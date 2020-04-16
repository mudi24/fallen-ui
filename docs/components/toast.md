---
title: Toast 提示
---

# Toast 提示

<h2 style="font-weight:normal">this.$toast</h2>

<ClientOnly>

<toast-demos></toast-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
<style>
  .fallen-toast {
    z-index: 30;
  }
</style>

<f-button @click="$toast('点击弹出提示')">上方弹出</f-button>
<f-button @click="$toast('点击弹出提示', {position:'middle'})"
  >中间弹出</f-button
>
<f-button @click="$toast('点击弹出提示', {position:'bottom'})"
  >下方弹出</f-button
>
```

:::

<br/>

<h2 style="font-weight:normal">设置关闭按钮</h2>

<ClientOnly>

<toast-close-demos></toast-close-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
<style>
  .fallen-toast {
    z-index: 30;
  }
</style>

<f-button @click="onClickButton">上方弹出</f-button>
```

```js
methods:{
  onClickButton() {
    this.$toast("我在这里提示你", {
      closeButton: {
        text: "我看见了",
        callback: () => {
          console.log("他关闭了提示");
        }
      }
    });
  }
}
```

:::
<br/>

<h2 style="font-weight:normal">设置HTMl</h2>

<ClientOnly>

<toast-html-demos></toast-html-demos>

</ClientOnly>

<h3 style="font-weight:normal">代码演示</h3>

::: details 点击查看代码

```html
<style>
  .fallen-toast {
    z-index: 30;
  }
</style>

<f-button @click="onClickButton">上方弹出</f-button>
```

```js
methods: {
  onClickButton() {
    this.$toast('<strong style="color:green;">原谅色加粗提示</strong>', {
      enableHtml: true
    });
  }
}
```

:::
