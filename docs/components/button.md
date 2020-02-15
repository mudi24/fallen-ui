---
title: Button
sidebarDepth: 2
---

# Button 按钮

<ClientOnly>
  <button-demos></button-demos>
</ClientOnly>

#### 代码

```html
<f-button>默认按钮</f-button>
<f-button icon="settings">默认按钮</f-button>
<f-button :loading="true">默认按钮</f-button>
<f-button disabled>默认按钮</f-button>
```

<br/>

<ClientOnly>
  <button-group-demos></button-group-demos>
</ClientOnly>

#### 代码

```html
<f-button-group>
  <f-button icon="left">上一页</f-button>
  <f-button>更多</f-button>
  <f-button icon="right" icon-position="right">下一页</f-button>
</f-button-group>
```
