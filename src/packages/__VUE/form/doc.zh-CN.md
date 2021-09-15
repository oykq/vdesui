#### form
表单，将组件内的用户输入的``<switch>`` ``<input>`` ``<checkbox>`` ``<slider>`` ``<radio>`` ``<picker>`` 提交。

当点击 ``<form>`` 表单中 formType 为 submit 的 ``<button>`` 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。

**属性说明**

|属性名|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|report-submit|Boolean|是否返回 formId 用于发送[模板消息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/template-message.html)|微信小程序、支付宝小程序|
|report-submit-timeout|number|等待一段时间（毫秒数）以确认 formId 是否生效。如果未指定这个参数，formId 有很小的概率是无效的（如遇到网络失败的情况）。指定这个参数将可以检测 formId 是否有效，以这个参数的时间作为这项检测的超时时间。如果失败，将返回 requestFormId:fail 开头的 formId|微信小程序2.6.2|
|@submit|EventHandle|携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''}，report-submit 为 true 时才会返回 formId||
|@reset|EventHandle|表单重置时会触发 reset 事件|&nbsp;|