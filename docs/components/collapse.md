---
title: Collapse 折叠面板
---

# Collapse 折叠面板

<h2 style="font-weight:normal">基本用法</h2>

<ClientOnly>

<collapse-demos></collapse-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
<f-collapse :selected.sync="selectedTab">
  <f-collapse-item title="标题1" name="1">
    两只老虎，两只老虎，跑得快，跑得快
  </f-collapse-item>
  <f-collapse-item title="标题2" name="2">
    一只没有耳朵，一只没有尾巴
  </f-collapse-item>
  <f-collapse-item title="标题3" name="3">
    好奇怪，好奇怪
  </f-collapse-item>
</f-collapse>
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
  <f-collapse-item title="标题1" name="1">
    门前大桥下，游过一群鸭
  </f-collapse-item>
  <f-collapse-item title="标题2" name="2">
    快来快来数一数，二四六七八
  </f-collapse-item>
  <f-collapse-item title="标题3" name="3">
    李雷在和韩梅梅学习外语
  </f-collapse-item>
</f-collapse>
```

:::
