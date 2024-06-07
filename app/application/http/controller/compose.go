package controller

import (
	"errors"
	"github.com/donknap/dpanel/app/application/logic"
	"github.com/donknap/dpanel/common/dao"
	"github.com/donknap/dpanel/common/entity"
	"github.com/gin-gonic/gin"
	"github.com/we7coreteam/w7-rangine-go/src/http/controller"
)

type Compose struct {
	controller.Abstract
}

func (self Compose) Create(http *gin.Context) {
	type ParamsValidate struct {
		Title string `json:"title" binding:"required"`
		Yaml  string `json:"yaml" binding:"required"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	_, err := logic.Compose{}.GetYaml(params.Yaml)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	yamlRow := &entity.Compose{
		Title: params.Title,
		Yaml:  params.Yaml,
	}
	_ = dao.Compose.Create(yamlRow)
	self.JsonResponseWithoutError(http, gin.H{
		"id": yamlRow.ID,
	})
	return
}

func (self Compose) Deploy(http *gin.Context) {
	type ParamsValidate struct {
		Id       int32  `json:"id" binding:"required"`
		SiteName string `json:"siteName" binding:"required"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	composeRow, _ := dao.Compose.Where(dao.Compose.ID.Eq(params.Id)).First()
	if composeRow == nil {
		self.JsonResponseWithError(http, errors.New("任务不存在"), 500)
		return
	}

	logic.Compose{}.Deploy(&logic.ComposeTask{
		SiteName: params.SiteName,
		Yaml:     composeRow.Yaml,
	})
}

func (self Compose) Uninstall(http *gin.Context) {
	type ParamsValidate struct {
		Id          int32  `json:"id" binding:"required"`
		SiteName    string `json:"siteName" binding:"required"`
		DeleteImage bool   `json:"deleteImage"`
	}

	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	composeRow, _ := dao.Compose.Where(dao.Compose.ID.Eq(params.Id)).First()
	if composeRow == nil {
		self.JsonResponseWithError(http, errors.New("任务不存在"), 500)
		return
	}

	logic.Compose{}.Uninstall(&logic.ComposeTask{
		SiteName:    params.SiteName,
		Yaml:        composeRow.Yaml,
		DeleteImage: params.DeleteImage,
	})
}

func (self Compose) GetList(http *gin.Context) {
	type ParamsValidate struct {
		Page     int    `json:"page,default=1" binding:"omitempty,gt=0"`
		PageSize int    `json:"pageSize" binding:"omitempty"`
		Title    string `json:"title"`
	}

	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	if params.Page < 1 {
		params.Page = 1
	}
	if params.PageSize < 1 {
		params.PageSize = 10
	}

	query := dao.Compose.Order(dao.Compose.ID.Desc())
	if params.Title != "" {
		query = query.Where(dao.Compose.Title.Like("%" + params.Title + "%"))
	}
	list, total, _ := query.FindByPage((params.Page-1)*params.PageSize, params.PageSize)

	self.JsonResponseWithoutError(http, gin.H{
		"total": total,
		"page":  params.Page,
		"list":  list,
	})
	return
}