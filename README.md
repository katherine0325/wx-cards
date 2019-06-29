# wx-cards

微信小程序卡片类UI组件库

[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu) [![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)



#### 体验
使用微信扫一扫体验小程序组件示例
<br />
<img src='https://user-images.githubusercontent.com/23134442/56375252-9e4bc580-6237-11e9-8371-5b3f540c795e.png' alt='image' width='250' />


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
    headerImg='/pages/wx-cards/images/head.jpeg'
    title='Mastering Pizza'
    time='September 25, 2019'
    img='/pages/wx-cards/images/pizazz.jpg'
    context='A revolutionary guide to making delicious pizza at home, offering a variety of base doughs so that your pizza will turn out perfect no matter what kind of oven or equipment you have.'
    moreText="Pizza remains America's favorite food, but one that many people hesitate to make at home. In Mastering Pizza, award-winning chef Marc Vetri tackles the topic with his trademark precision, making perfect pizza available to anyone. \n\nThe recipes—gleaned from years spent researching recipes in Italy and perfecting them in America—have a variety of base doughs of different hydration levels, which allow home cooks to achieve the same results with a regular kitchen oven as they would with a professional pizza oven. \n\nThe book covers popular standards like Margherita and Carbonara while also featuring unexpected toppings such as mussels and truffles—and even a dessert pizza made with Nutella. \n\nWith transporting imagery from Italy and hardworking step-by-step photos to demystify the process, Mastering Pizza will help you make pizza as delicious as you find in Italy."
    tag='标签一'
    tagColor='blue'
    isShowLike="{{true}}"
    isLiked="{{false}}"
    likeNumber='{{10}}'
    isShowUnlike="{{true}}"
    isUnLiked="{{false}}"
    unlikeNumber='{{2}}'
    isShowDelete='{{true}}'
    bind:like='handleLike'
    bind:unlike='handleUnlike'
    bind:delete='handleDelete'></card>
```

属性

|属性|说明|类型|默认值|
| --------   | -----  | ----  |-|
|headerImg|头像|string||
|title|标题|string||
|time|时间|string||
|img|主图|string||
|context|内容|string||
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
    img='/pages/wx-cards/images/title-card.jpg'
    title='MidWest Pet'
    context='Secure double latch step-through door access, Exercise Pen / Pet Playpen folds flat for convenient storage'
    isShowBtns='{{true}}'
    isLiked='{{false}}'
    likeNumber='{{30}}'
    bind:like='handleLike'></title-card>
```

属性

|属性|说明|类型|默认值|
|--------| -----|---|-|
|img|主图|string||
|title|标题|string||
|context|内容|string||
|isShowBtns|是否显示按钮行|boolean|true|
|isLiked|喜欢图标颜色，true为红色，false为黑色|boolean|false|
|likeNumber|喜欢数量，如果是0则不显示|number|0|

事件

|事件|说明|返回值|
|---|---|---|
|bind:like|点击喜欢图标触发||
