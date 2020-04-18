---
title: Collapse 折叠面板
---

# Collapse 折叠面板

可以折叠/展开的内容区域。

<h2 style="font-weight:normal">基本用法</h2>

<ClientOnly>

<collapse-demos></collapse-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
<f-collapse :selected.sync="selectedTab">
  <f-collapse-item title="一致性 Consistency" name="1">
    与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念
  </f-collapse-item>
  <f-collapse-item title="反馈 Feedback" name="2">
    控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作
  </f-collapse-item>
  <f-collapse-item title="效率 Efficiency" name="3">
    清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策
  </f-collapse-item>
</f-collapse>
```

```vue
<script>
import { FCollapse, FCollapseItem } from "fallen-ui";

export default {
  components: {
    "f-collapse": FCollapse,
    "f-collapse-item": FCollapseItem,
  },
  data() {
    return {
      selectedTab: ["2", "3"],
    };
  },
};
</script>
```

:::
<br/>

<h2 style="font-weight:normal">手风琴</h2>

<ClientOnly>

<collapse-single-demos></collapse-single-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
<f-collapse :selected.sync="selectedTab" single>
  <f-collapse-item title="效率 Efficiency" name="1">
    清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策
  </f-collapse-item>
  <f-collapse-item title="反馈 Feedback" name="2"
    >控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作
  </f-collapse-item>
  <f-collapse-item title="可控 Controllability" name="3">
    结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等
  </f-collapse-item>
</f-collapse>
```

```vue
<script>
import { FCollapse, FCollapseItem } from "fallen-ui";

export default {
  components: {
    "f-collapse": FCollapse,
    "f-collapse-item": FCollapseItem,
  },
  data() {
    return {
      selectedTab: ["3"],
    };
  },
};
</script>
```

:::

### collapse

|           参数           |         说明         |  类型   |   可选值   | 默认值 |
| :----------------------: | :------------------: | :-----: | :--------: | :----: |
| **selected**（**必填**） |     被选中的标签     |  Array  |     无     |   无   |
|          single          | 是否展示为手风琴效果 | Boolean | true/false | false  |

### collapse.collapse-item

|         参数          |          说明          |  类型  | 可选值 | 默认值 |
| :-------------------: | :--------------------: | :----: | :----: | ------ |
| **name**（**必填**）  | collapse-item 组件名称 | String |   无   | 无     |
| **title**（**必填**） |        标题内容        | String |   无   | 无     |
