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

:::warning WARNING 使用时一定要引入插件
vue
:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :--: | :--: | :--: | :----: | :----: |
| 香蕉 | \$1  |  5   |
| 苹果 | \$1  |  6   |
| 草莓 | \$1  |  7   |
