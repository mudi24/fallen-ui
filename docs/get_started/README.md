---
title: 快速上手
---

# 快速上手

### 示例

1. 引入需要的组件
```js
import { Button, ButtonGroup, Icon } from "fallen-ui";
```
2. 引入样式
```js
import "fallen-ui/dist/index.css";
```

3. 注册组件
```js
export default {
  name: "app",
  components: {
    "f-button": Button,
    "f-icon": Icon,
    "f-button-group": ButtonGroup
  }
}
```
4. 接下来你可以在项目中任意使用组件，各个组件的使用方法请参阅它们各自的文档。