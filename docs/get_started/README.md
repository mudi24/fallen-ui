---
title: 快速上手
---

# 快速上手

- 使用本框架前，请在 CSS 中开启 border-box （IE 8 及以上浏览器都支持此样式）

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

- 引入 fallen-ui，像使用正常的 vue 组件那样使用即可

```javascript
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
