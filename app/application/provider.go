package application

import (
	"github.com/donknap/dpanel/app/application/command"
	"github.com/donknap/dpanel/app/application/http/controller"
	"github.com/donknap/dpanel/app/application/logic"
	common "github.com/donknap/dpanel/common/middleware"
	"github.com/gin-gonic/gin"
	"github.com/we7coreteam/w7-rangine-go-support/src/console"
	http_server "github.com/we7coreteam/w7-rangine-go/src/http/server"
)

type Provider struct {
}

func (provider *Provider) Register(httpServer *http_server.Server, console console.Console) {
	logic.RegisterContainerTask()

	// 注册一个 application:test 命令
	console.RegisterCommand(new(command.Test))

	task := logic.NewContainerTask()
	go task.CreateLoop()

	// 注册一些路由
	httpServer.RegisterRouters(
		func(engine *gin.Engine) {
			cors := engine.Group("/", common.CorsMiddleware{}.Process)

			cors.POST("/app/run-env/source-env", controller.RunEnv{}.SupportRunEnv)
			cors.POST("/app/run-env/php-ext", controller.RunEnv{}.PhpExt)

			// 站点相关
			cors.POST("/app/site/create-by-image", controller.Site{}.CreateByImage)
			cors.POST("/app/site/get-list", controller.Site{}.GetList)

			// 日志相关
			cors.POST("/app/log/task", controller.Log{}.Task)
			cors.POST("/app/log/run", controller.Log{}.Run)
		},
	)
}