---
title: Input 输入框
---

# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

<h2 style="font-weight:normal">基本用法</h2>

<ClientOnly>

<input-demos></input-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
<f-input value="输入框"></f-input>
<f-input value="禁用" disabled></f-input>
<f-input value="只读" readonly></f-input>
<f-input error="输入内容必须符合规则"></f-input>
```

:::
<br/>

<h2 style="font-weight:normal">双向绑定</h2>

<ClientOnly>

<input-model-demos></input-model-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
<f-input v-model="message"></f-input>
```

:::
