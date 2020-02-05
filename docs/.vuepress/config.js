module.exports = {
  title: 'Fallen UI',
  description: '一个很 nice 的 UI 框架 ',
  themeConfig: {
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '交流',
        link: '/guide/'
      },
      {
        text: '交流',
        link: 'https://www.google.com'
      },
    ],
    sidebar: [{
        title: '入门',
        children: ['/install/', '/get_started/']
      },
      {
        title: '组件',
        children: ['/components/button']
      },
    ]
  }
}