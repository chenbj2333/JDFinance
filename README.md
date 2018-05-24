## 组件化思维与技巧之京东金融实战

本项目使用的是Vue(2.5.9)实现的组件化课程，侧重思维与方法的训练。在模块化方面不仅涉及常规的JS还有CSS，CSS的模块化使用Sass组织代码，将模块化设计做到极致。在构建部分采用webpack（3.10.0） 和 npm scripts独立完成，不依赖任何第三方的脚手架。

**体验地址**

<img src="./static/enter.png" alt="体验地址" width="160" height="160">

请使用手机扫码体验，微信或者浏览器的扫一扫都可以的。

## CSS模块化设计
1. 设计原则
  - 可复用能继承要完整
  - 周期性迭代
2. 设计方法
  - 先整体后部分再颗粒化
  - 先抽象再具体

![图例1](https://raw.githubusercontent.com/chenbj2333/blog/master/images/JDCSSModule1.jpg)
![图例2](https://raw.githubusercontent.com/chenbj2333/blog/master/images/JDCSSModule2.jpg)
> 代码
1. /app/css/layout.scss
2. /app/css/element.scss

## JS组件设计
1. 设计原则
  - 高内聚低耦合
  - 周期性迭代
2. 设计方法
  - 先整体后部分再颗粒化
  - 尽可能的抽象

## 自适应
1. 基本概念
  - [css像素、设备像素、逻辑像素、设备像素比](https://github.com/jawil/blog/issues/21)
  - viewport
  - rem
2. 工作原理
  - 利用viewport和设备像素比调整基准像素
  - 利用px2rem自动转换css单位

## SPA设计
1. 设计意义
  - 前后端分离
  - 减轻服务器压力
  - 增强用户体验
  - prerender预渲染优化SEO
2. 工作原理
  - history API
  - hash
