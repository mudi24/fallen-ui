---
title: Grid 网格
---

# Grid 网格

24 格网络

概述：

- 我们把每一行（row）分为 24 份，如果 row 中的 col 总数超过 24，多出来的 col 就会**另起一行**排列
- 你的内容应当放置于 col 内，并且，**只有 col** 可以作为 row 的直接元素
- 你可以为元素设置跨越的范围，例如 **`<f-col span="6"></f-col>`**

<h2 style="font-weight:normal">基本用法</h2>

<ClientOnly>

<grid-demos></grid-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
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

```vue
<script>
  import { FRow, FCol } from "fallen-ui";

  export default {
    components: {
      "f-row": FRow,
      "f-col": FCol,
    },
  };
</script>
```

:::
<br/>

<h2 style="font-weight:normal">区块间隔</h2>

网格通常需要和间隔进行配合，使用 Row 的 gutter 属性可以设置间隔。

<ClientOnly>
  <grid-gutter-demos></grid-gutter-demos>
</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
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

```vue
<script>
  import { FRow, FCol } from "fallen-ui";

  export default {
    components: {
      "f-row": FRow,
      "f-col": FCol,
    },
  };
</script>
```

:::
<br/>

<h2 style="font-weight:normal">自适应网格</h2>

根据浏览器窗口宽度调整网格布局方式

<ClientOnly>
  <grid-offset-demos></grid-offset-demos>
</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
<f-row>
  <f-col span="24" :ipad="{ span: 12 }" :narrow-pc="{ span: 8 }">
    <div>1</div>
  </f-col>
  <f-col span="24" :ipad="{ span: 12 }" :narrow-pc="{ span: 8 }">
    <div>2</div>
  </f-col>
  <f-col span="24" :ipad="{ span: 12 }" :narrow-pc="{ span: 8 }">
    <div>3</div>
  </f-col>
  <f-col span="24" :ipad="{ span: 12 }" :narrow-pc="{ span: 8 }">
    <div>4</div>
  </f-col>
  <f-col span="24" :ipad="{ span: 12 }" :narrow-pc="{ span: 8 }">
    <div>5</div>
  </f-col>
  <f-col span="24" :ipad="{ span: 12 }" :narrow-pc="{ span: 8 }">
    <div>6</div>
  </f-col>
</f-row>
```

```vue
<script>
  import { FRow, FCol } from "fallen-ui";

  export default {
    components: {
      "f-row": FRow,
      "f-col": FCol,
    },
  };
</script>
```

:::

### Row

|  参数  |      说明      |     类型      |           可选值            |  默认值  |
| :----: | :------------: | :-----------: | :-------------------------: | :------: |
| gutter | 网格之间的间隔 | Number/String |          无                   |  无        |
| align  |  内容水平对齐方式  |    String     | **'left'/'center'/'right'** | 'center' |

### Col

|   参数   |              说明              |     类型      | 
| :------: | :----------------------------: | :-----------: | 
|   span   |         网格之间的间隔         | Number/String |  
|  offset  |          垂直对齐方式          | Number/String |  
|   ipad   | 最小宽度为 577px 时的网格布局  |    Object     |   
| narrowPc | 最小宽度为 769px 时的网格布局  |    Object     |  
|    pc    | 最小宽度为 993px 时的网格布局  |    Object     |      
|  widePc  | 最小宽度为 1201px 时的网格布局 |    Object     |    
