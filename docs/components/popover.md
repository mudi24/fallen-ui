---
title: Popover 弹出层
---

# Popover 弹出层

<h2 style="font-weight:normal">设置关闭按钮</h2>

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

:::
<br/>

<h2 style="font-weight:normal">设置关闭按钮</h2>

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

:::
