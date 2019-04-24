# wx-cards

微信小程序卡片类UI组件库

[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu) [![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)



#### 体验
使用微信扫一扫体验小程序组件示例
![](https://user-images.githubusercontent.com/23134442/56375252-9e4bc580-6237-11e9-8371-5b3f540c795e.png=1000x1000)


[文档](https://github.com/katherine0325/katherine0325.github.io/issues/25)


### 标准卡片

引入
```javascript
"usingComponents": {
    "card": "../../dist/card/card"
}
```
基本用法
```
<card
    headerImg='first'
    name=''>
</card>
```
属性
|属性|说明|类型|默认值|
| --------   | -----  | ----  ||
|headerImg|头像|string||
|name|用户名|string||
|time|时间|string||
|imageUrl|主图|string||
|tag|标签|string||
|tagColor|标签颜色，可选blue,yellow,green,red|string||
|isShowLike|是否显示喜欢图标|boolean|false|
|isLiked|喜欢图标颜色，true为红色，false为灰色|boolean|false|
|likeNumber|喜欢数量,如果数量为0则不显示|number||
|isShowUnlike|是否显示反对图标|boolean|false|
|isUnliked|反对图标颜色，true为蓝色，false为灰色|boolean|false|
|unlikeNumber|反对数量,如果数量为0则不显示|number||
|isShowDelete|删除图标|boolean|false|
|moreText|更多详情|string||

事件
|事件|说明|返回值|
|---|---|---|
|bind:like|点击喜欢图标触发|第一个参数为this，第二个参数为图标当前状态，true为红色，false为灰色|
|bind:unlike|点击反对图标触发|第一个参数为this，第二个参数为图标当前状态，true为蓝色，false为灰色|
|bind:delete|点击删除图标触发||


### 标题卡片
引入
```javascript
"usingComponents": {
    "title-card": "../../dist/title-card/title-card"
}
```
基本用法
```
<title-card
    headerImg='first'
    name=''>
</title-card>
```
属性
|属性|说明|类型|默认值|
| --------   | -----  | ----  ||
|imageUrl|主图|string||
|isShowBtns|是否显示按钮行|boolean|true|

事件
|事件|说明|返回值|
|---|---|---|
|bind:like|点击喜欢图标触发||

