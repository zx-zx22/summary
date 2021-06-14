---
sidebarDepth: 2
---
## css选择器权重
css选择器的权重采用256进制

!important: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Infinity <br/>
行间样式: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1000 <br/>
id选择器: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100 <br/>
class选择器｜属性选择器｜伪类选择器: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10 <br/>
标签选择器 ｜ 伪元素选择器: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 <br/>
通配符选择器: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 <br/>
在比较选择相同元素采用不同选择器的样式优先级时，将写在同一行的选择器的权重相加，较大值的选择器优先级高。<br/>

## bfc(block format context) 
块及格式化上下文
- 可以解决margin塌陷问题（父级有margin-top时，子级不能相对于父级margin-top,除非值比父级的margin-top值大，会带着父级一起增加margin-top）
- 可以解决margin合并问题(子级的margin-top区域与父级的margin-bottom区域共用了，一般可以不解决该问题）

触发盒子bfc:
- position: absolute|fixed
- display: inline-block
- float: left|right
- overflow: hidden
## float
浮动元素会产生浮动流<br/>
- 所有产生了浮动流的元素，块级元素看不到他们
- 产生了bfc的元素和文本类属性（inline）的元素以及文本元素都能看到浮动元素。
