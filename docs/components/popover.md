---
title: Popover 弹出层
---

# popover

<ClientOnly>

<popover-demos></popover-demos>

</ClientOnly>

#### 代码

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

<br/>

<ClientOnly>

<popover-hover-demos></popover-hover-demos>

</ClientOnly>

#### 代码

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
