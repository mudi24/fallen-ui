---
title: Popover 弹出层
---

# Popover 弹出层

点击/鼠标移入元素，弹出卡片浮层。

<h2 style="font-weight:normal">基本用法</h2>

<ClientOnly>

<popover-demos></popover-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
<f-popover>
  <f-button>上方弹出</f-button>
  <template slot="content">
    弹出内容
  </template>
</f-popover>
<f-popover position="bottom">
  <f-button>下方弹出</f-button>
  <template slot="content">
    弹出内容
  </template>
</f-popover>
<f-popover position="left">
  <f-button>左边弹出</f-button>
  <template slot="content">
    弹出内容
  </template>
</f-popover>
<f-popover position="right">
  <f-button>右边弹出</f-button>
  <template slot="content">
    弹出内容
  </template>
</f-popover>
```
```vue
<script>
  import { FButton, FPopover } from "fallen-ui";

  export default {
    components: {
      "f-button": FButton,
      "f-popover": FPopover,
    },
  };
</script>
```

:::
<br/>

<h2 style="font-weight:normal">鼠标移入触发弹出层</h2>

<ClientOnly>

<popover-hover-demos></popover-hover-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
<f-popover trigger="hover">
  <f-button>上方弹出</f-button>
  <template slot="content">
    弹出内容
  </template>
</f-popover>
<f-popover trigger="hover" position="bottom">
  <f-button>下方弹出</f-button>
  <template slot="content">
    弹出内容
  </template>
</f-popover>
<f-popover trigger="hover" position="left">
  <f-button>左边弹出</f-button>
  <template slot="content">
    弹出内容
  </template>
</f-popover>
<f-popover trigger="hover" position="right">
  <f-button>右边弹出</f-button>
  <template slot="content">
    弹出内容
  </template>
</f-popover>
```

```vue
<script>
  import { FButton, FPopover } from "fallen-ui";

  export default {
    components: {
      "f-button": FButton,
      "f-popover": FPopover,
    },
  };
</script>
```
:::

### Attributes

|   参数   |   说明   |  类型   |            可选值             | 默认值 |
| :------: | :------: | :-----: | :---------------------------: | :----: |
| position | 弹出位置 | String  | 'top'/'bottom'/'left'/'right' | 'top'  |
| trigger  | 触发方式 | Boolean |        **true/false**         | false  |
