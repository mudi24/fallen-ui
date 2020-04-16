---
title: Tabs 选项卡
---

# tabs

<ClientOnly>

<tabs-demos></tabs-demos>

</ClientOnly>

#### 代码

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
