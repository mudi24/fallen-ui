# fallen-ui - 一个 Vue UI 组件

[![Build Status](https://www.travis-ci.org/MambaNeverOut/fallen-ui.svg?branch=master)](https://www.travis-ci.org/MambaNeverOut/fallen-ui)

## 介绍

- 这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有帮助

## 开始使用

1.  添加 CSS 样式

    - 使用本框架前，请在 CSS 中开启 border-box

    ```
    *, *::before, *::after { box-sizing: border-box; }
    ```

    IE 8 及以上浏览器都支持此样式

2.  安装 fallen-ui
    ```
    npm i --save fallen-ui
    ```
3.  引入 fallen-ui
    ```
    import { Button, ButtonGroup, Icon } from "fallen-ui";
    import "fallen-ui/dist/index.css";
    export default {
      name: "app",
      components: {
        "f-button": Button,
        "f-icon": Icon,
        "f-button-group": ButtonGroup
      }
    };
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
