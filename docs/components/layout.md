---
title: Layout 布局
---

# Layout 布局

协助进行页面整体布局

<h2 style="font-weight:normal">基本用法</h2>

<ClientOnly>

<layout-demos></layout-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

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
```vue
<script>
  import { FLayout, FHeader, FContent, FFooter}  from "fallen-ui";

  export default {
    components: {
      "f-layout": FLayout,
      "f-header": FHeader,
      "f-content": FContent,
      "f-footer": FFooter,
    },
  };
</script>
```
:::
<br/>

<h2 style="font-weight:normal">sider布局</h2>

<ClientOnly>
  <layout-sider-demos></layout-sider-demos>
</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

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
```vue
<script>
  import { FLayout, FHeader, FContent, FFooter}  from "fallen-ui";

  export default {
    components: {
      "f-layout": FLayout,
      "f-header": FHeader,
      "f-content": FContent,
      "f-footer": FFooter,
    },
  };
</script>
```
:::
<br/>

<h2 style="font-weight:normal">侧边布局</h2>

<ClientOnly>
  <layout-sider2-demos></layout-sider2-demos>
</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

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
```vue
<script>
  import { FLayout, FHeader, FContent, FFooter}  from "fallen-ui";

  export default {
    components: {
      "f-layout": FLayout,
      "f-header": FHeader,
      "f-content": FContent,
      "f-footer": FFooter,
    },
  };
</script>
```
:::

### Attributes

|  组件   |   功能   |                                       说明                                       |
| :-----: | :------: | :------------------------------------------------------------------------------: |
| Layout  | 布局容器 | 其下可嵌套 header、sider、content、footer 或 layout 本身，可以放在任何父容器中。 |
| Header  |  顶部栏  |               自带默认样式，其下可嵌套任何元素，只能放在 Layout 中               |
| Content |  内容区  |               自带默认样式，其下可嵌套任何元素，只能放在 Layout 中               |
| Footer  |  底部栏  |               自带默认样式，其下可嵌套任何元素，只能放在 Layout 中               |
|  Sider  |  侧边栏  |          自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中          |
