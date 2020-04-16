---
title: Grid 网格
---

# Grid 网格

<h2 style="font-weight:normal">基本用法</h2>

<ClientOnly>

<grid-demos></grid-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
*{ box-sizing: border-box; }

<f-row>
  <f-col span="12">
    <div>12</div>
  </f-col>
  <f-col>
    <div>12</div>
  </f-col>
  <f-col>
    <div>12</div>
  </f-col>
</f-row>

<f-row>
  <f-col span="4">
    <div>4</div>
  </f-col>
  <f-col span="4">
    <div>4</div>
  </f-col>
  <f-col span="4">
    <div>4</div>
  </f-col>
  <f-col span="4">
    <div>4</div>
  </f-col>
  <f-col span="4">
    <div>4</div>
  </f-col>
  <f-col span="4">
    <div>4</div>
  </f-col>
</f-row>
```

:::
<br/>

<h2 style="font-weight:normal">设置固定间隔</h2>

<ClientOnly>
  <grid-gutter-demos></grid-gutter-demos>
</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
*{ box-sizing: border-box; }

<f-row gutter="10">
  <f-col span="8">
    <div>8</div>
  </f-col>
  <f-col>
    <div>8</div>
  </f-col>
  <f-col>
    <div>8</div>
  </f-col>
</f-row>

<f-row gutter="10">
  <f-col span="6">
    <div>6</div>
  </f-col>
  <f-col span="6">
    <div>6</div>
  </f-col>
  <f-col span="6">
    <div>6</div>
  </f-col>
  <f-col span="6">
    <div>6</div>
  </f-col>
</f-row>
```

:::
<br/>

<h2 style="font-weight:normal">自定义间隔</h2>

<ClientOnly>
  <grid-offset-demos></grid-offset-demos>
</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
*{ box-sizing: border-box; }

<f-row gutter="10">
  <f-col span="4">
    <div>4</div>
  </f-col>
  <f-col span="4" offset="1">
    <div>4</div>
  </f-col>
  <f-col span="4" offset="4">
    <div>4</div>
  </f-col>
  <f-col span="4" offset="3">
    <div>4</div>
  </f-col>
</f-row>

<f-row>
  <f-col span="2">
    <div>2</div>
  </f-col>
  <f-col span="2" offset="3">
    <div>2</div>
  </f-col>
  <f-col span="2" offset="6">
    <div>2</div>
  </f-col>
  <f-col span="2" offset="2">
    <div>2</div>
  </f-col>
  <f-col span="2" offset="1">
    <div>2</div>
  </f-col>
  <f-col span="2">
    <div>2</div>
  </f-col>
</f-row>
```

:::
