---
title: Tabs 选项卡
---

# Tabs 选项卡

选项卡切换组件

功能：提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

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

```vue
<script>
  import { FTabs, FTabsHeader, FTabsBody, FTabsItem, FTabsPane } from "fallen-ui";

  export default {
    components: {
      "f-tabs": FTabs,
      "f-tabs-header": FTabsHeader,
      "f-tabs-body": FTabsBody,
      "f-tabs-item": FTabsItem,
      "f-tabs-pane": FTabsPane,
    },
    data() {
      return {
        selected: "2",
      };
    },
  };
</script>
```

:::

### tabs

|           参数           |     说明     |  类型  | 可选值 | 默认值 |
| :----------------------: | :----------: | :----: | :----: | :----: |
| **selected**（**必填**） | 选中的标签页 | String | String |   无   |

### tabs.tabs-item

|         参数         |               说明                |     类型      | 默认值 |
| :------------------: | :-------------------------------: | :-----------: | :----: |
| **name**（**必填**） | 与对应 tabs-pane 的 name **相同** | String/Number |   无   |
|       disabled       |          是否为禁用状态           |    Boolean    | false  |

### tabs.tabs-pane

|         参数         |               说明                |     类型      | 默认值 |
| :------------------: | :-------------------------------: | :-----------: | :----: |
| **name**（**必填**） | 与对应 tabs-item 的 name **相同** | String/Number |   无   |
