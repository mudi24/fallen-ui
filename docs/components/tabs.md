---
title: Tabs 选项卡
---

# Tabs 选项卡

选项卡切换组件

<h2 style="font-weight:normal">设置关闭按钮</h2>

<ClientOnly>

<tabs-demos></tabs-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码提示</h3>

::: details 点击查看代码

```html
<f-tabs :selected="selected">
  <f-tabs-header>
    <f-tabs-item name="1">tab 1</f-tabs-item>
    <f-tabs-item name="2">tab 2</f-tabs-item>
    <f-tabs-item name="3">tab 3</f-tabs-item>
  </f-tabs-header>
  <f-tabs-body>
    <f-tabs-pane name="1">content 1</f-tabs-pane>
    <f-tabs-pane name="2">content 2</f-tabs-pane>
    <f-tabs-pane name="3">content 3</f-tabs-pane>
  </f-tabs-body>
</f-tabs>
```

```js
data(){
  return{
    selected:'2'
  }
}
```

:::
