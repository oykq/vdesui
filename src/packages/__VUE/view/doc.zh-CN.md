# view

视图容器。

它类似于传统html中的div，用于包裹各种元素内容。

如果使用[nvue](https://uniapp.dcloud.io/nvue-outline)，则需注意，包裹文字应该使用`<text>`组件。

**属性说明**

|属性名|类型|默认值|说明|
|:-|:-|:-|:-|
|hover-class|String|none|指定按下去的样式类。当 hover-class="none" 时，没有点击态效果|
|hover-stop-propagation|Boolean|false|指定是否阻止本节点的祖先节点出现点击态，App、H5、支付宝小程序、百度小程序不支持（支付宝小程序、百度小程序文档中都有此属性，实测未支持）|
|hover-start-time|Number|50|按住后多久出现点击态，单位毫秒|
|hover-stay-time|Number|400|手指松开后点击态保留时间，单位毫秒|