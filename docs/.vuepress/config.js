module.exports = {
  base: '/fallen-ui/',
  title: 'Fallen UI',
  description: '一个很 nice 的 UI 框架 ',
  themeConfig: {
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '交流',
        link: 'https://mail.google.com/mail/u/0/#inbox?compose=new'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/MambaNeverOut'
      },
    ],
    sidebar: [{
        title: '入门',
        children: ['/install/', '/get_started/']
      },
      {
        title: '组件',
        children: ['/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/tabs',
          '/components/popover',
          '/components/collapse',
        ],
      },
    ]
  }
}