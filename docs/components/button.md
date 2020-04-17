---
title: Button 按钮
sidebarDepth: 2
---

# Button 按钮

按钮用于开始一个即时操作。

<h2 style="font-weight:normal">基本用法</h2>

<ClientOnly>

<button-demos></button-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
<f-button>默认按钮</f-button>
<f-button icon="settings">默认按钮</f-button>
<f-button :loading="true">默认按钮</f-button>
<f-button disabled>默认按钮</f-button>
```

:::

<br/>

<h2 style="font-weight:normal">按钮组</h2>

以按钮组的方式出现，常用于多项类似操作。

<ClientOnly>
<button-group-demos></button-group-demos>
</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
<f-button-group>
  <f-button icon="left">上一页</f-button>
  <f-button>更多</f-button>
  <f-button icon="right" icon-position="right">下一页</f-button>
</f-button-group>
```

:::

### Attributes

|     参数     |          说明          |  类型   |       可选值       | 默认值 |
| :----------: | :--------------------: | :-----: | :----------------: | :----: |
|   loading    | 按钮是否显示加载中状态 | Boolean |   **true/false**   | false  |
| iconPosition |  图标相对于文本的位置  | String  | **'left'/'right'** | 'left' |
|   disabled   |   是否显示为禁用状态   | Boolean |   **true/false**   | false  |
