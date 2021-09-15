# cell
app端nvue专用组件。它的重要价值在于告诉原生引擎，哪些部分是可重用的。

`<cell>` Cell 必须以一级子组件的形式存在于 `list recycler waterfall` 中。

#### 子组件

Cell 支持添加任意类型的组件作为自己的子组件，但是请不要再内部添加滚动容器了。


#### 属性
| 属性                   | 类型        | 默认值       | 说明                                                                                                                                                           |
| ---------------------- | ----------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|extClass|String|default||
|icon|String|default|矢量图标库|
|title|String|default|和icon二选一，都是放在cell_hd里面|
|hover|Boolean|false|选择鼠标指针浮动在其上的元素，并设置其样式|
|link|Boolean|false|选择器设置指向未被访问页面的链接的样式|
|value|String|default||
|showError|Boolean|false|显示错误|
|prop|String|default|校验的属性，给父元素form使用|
|footer|String|default|文档中的页脚部分|
|inline|Boolean|true|左右布局样式还是上下布局|
|iconClass|String|default|矢量图标库类|
|bodyClass|String|default|页面主体类|
|url|String|default|在link为true的时候有效，表示navigator的跳转url|
|footerClass|String|default||
|hasHeader|Boolean|true||
|hasFooter|Boolean|true||
|hasBody|Boolean|true||
|extHoverClass|String|default|提供给需要定制 hover-class 的场景，要求 hover 为 false|

#### 样式

- 通用样式.

> TIP
> - 不要指定 `<cell>` 的 `flex` 值。Cell 的宽度是由它的父容器决定的，你也不需要指定它的高度。
> - Cell 的排版的位置是由父容器控制的，所以一般不要为其指定 `margin` 样式

#### 事件

- 通用事件.
