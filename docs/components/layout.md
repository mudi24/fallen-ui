---
title: Layout 布局
---

# layout

<ClientOnly>

<layout-demos></layout-demos>

</ClientOnly>

#### 代码

```html
<f-layout style="color: white; margin-bottom:50px;">
  <f-header style="height: 50px; background:lightskyblue;">
    header
  </f-header>
  <f-content style="height: 100px; background:deepskyblue;">
    content
  </f-content>
  <f-footer style="height: 50px; background:lightskyblue;">
    footer
  </f-footer>
</f-layout>
```

<br/>

<ClientOnly>
  <layout-sider-demos></layout-sider-demos>
</ClientOnly>

#### 代码

```html
<f-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <f-header style="height: 50px; background:lightskyblue;">
    header
  </f-header>
  <f-layout>
    <f-sider style="height: 100px; background:#ddd; width:200px; color: black;">
      sider
    </f-sider>
    <f-content style="height: 100px; background:deepskyblue;">
      content
    </f-content>
  </f-layout>
  <f-footer style="height: 50px; background:lightskyblue;">
    footer
  </f-footer>
</f-layout>
```

<br/>

<ClientOnly>
  <layout-sider2-demos></layout-sider2-demos>
</ClientOnly>

#### 代码

```html
<f-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <f-sider style="height: 200px; background:#ddd; width:200px; color: black;">
    sider
  </f-sider>
  <f-layout>
    <f-header style="height: 50px; background:lightskyblue;">
      header
    </f-header>
    <f-content style="height: 100px; background:deepskyblue;">
      content
    </f-content>
    <f-footer style="height: 50px; background:lightskyblue;">
      footer
    </f-footer>
  </f-layout>
</f-layout>
```
