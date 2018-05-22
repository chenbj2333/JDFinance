## 组件化思维与技巧之京东金融实战

本项目使用的是Vue(2.5.9)实现的组件化课程，侧重思维与方法的训练。在模块化方面不仅涉及常规的JS还有CSS，CSS的模块化使用Sass组织代码，将模块化设计做到极致。在构建部分采用webpack（3.10.0） 和 npm scripts独立完成，不依赖任何第三方的脚手架。

**体验地址**

<img src="./static/enter.png" alt="体验地址" width="160" height="160">

请使用手机扫码体验，微信或者浏览器的扫一扫都可以的。

## css模块化设计
1. 设计原则
  - 可复用能继承要完整 
  - 周期性迭代
2. 设计方法
  - 先整体后部分再颗粒化
  - 先抽象再具体
![图例1](https://raw.githubusercontent.com/chenbj2333/blog/master/images/JDCSSModule1.jpg)
![图例2](https://raw.githubusercontent.com/chenbj2333/blog/master/images/JDCSSModule2.jpg)
> 代码
/app/css/layout.scss
/app/css/element.scss
