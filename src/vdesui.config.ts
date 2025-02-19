import { defineConfig } from './packages/config';

export default defineConfig({
  site: {
    defaultLang: 'zh-CN',
    versions: [
      {
        name: '1.x',
        link: '/'
      }
    ]
  },

  locales: {
    'zh-CN': {
      langLabel: '中',
      header: [
        {
          name: 'intro',
          cName: '组件',
          path: 'intro'
        },
        {
          name: 'api',
          cName: 'API',
          path: 'api/index'
        }
      ],
      docs: {
        name: '指南',
        packages: [
          {
            name: 'intro',
            cName: '介绍',
            show: true
          }
        ]
      },
      navs: [
        {
          name: 'js',
          demoShow: false,
          packages: [
            {
              name: 'events',
              desc: '事件',
              type: 'methods'
            }
          ]
        },
        {
          name: '表单组件',
          packages: [
            {
              name: 'button',
              desc: '按钮',
              author: 'cc'
            },
            {
              name: 'form',
              desc: '表单',
              author: 'cc'
            },
            {
              name: 'input',
              desc: '输入框',
              author: 'cc'
            },
            {
              name: 'Switch',
              desc: '开关',
              author: 'cc'
            },
            {
              name: 'cell',
              desc: '列表项',
              author: ''
            },
            {
              name: 'cells',
              desc: '列表分组'
            },
            {
              name: 'textarea',
              desc: '多行输入框'
            },
            {
              name: 'picker-view',
              desc: '嵌入页面的滚动选择器'
            },
            {
              name: 'picker-view-column',
              desc: '滚动选择器子项'
            },
            {
              name: 'picker',
              desc: '从底部弹起的滚动选择器'
            },
            {
              name: 'radio',
              desc : '单选项目'
            },
            {
              name: 'radio-group',
              desc : '单选组'
            }
          ]
        },
        {
          name: '视图容器',
          packages: [
            {
              name: 'view',
              desc: '视图容器'
            }
          ]
        },
        {
          name: '操作反馈',
          packages: [
            {
              name: 'Dialog',
              desc: '弹窗组件'
            },
          ]
        },
        {
          name: '媒体组件',
          packages: [
            {
              name: 'Image',
              desc: '图片'
            }
          ]
        }
      ],
      apis: [
        {
          name: '开放接口',
          packages: [
            {
              name: '用户信息',
              path: 'open-api/user-info'
            },
            {
              name: '登录',
              path: 'open-api/login'
            },
            {
              name: '授权',
              path: 'open-api/authorize'
            },
            {
              name: '设置',
              path: 'open-api/seeting'
            }
          ]
        },
        {
          name: '界面',
          packages: [
            {
              name: '交互',
              path: 'ui/interaction'
            },
            {
              name: '导航栏',
              path: 'ui/navigation-bar'
            }
          ]
        },
        {
          name: '网络',
          packages: [
            {
              name: '发起请求',
              path: 'network/request'
            }
          ]
        }
      ]
    },
    'en-US': {
      langLabel: 'EN',
      header: [
        {
          name: 'intro',
          cName: 'guide',
          path: 'intro'
        },
        {
          name: 'api',
          cName: 'API',
          path: 'api/index'
        }
      ],
      docs: {
        name: 'guide',
        packages: [
          {
            name: 'intro',
            cName: 'introduce',
            show: true
          }
        ]
      },
      navs: [
        {
          name: 'form compoents',
          packages: [
            {
              name: 'Button',
              desc: 'Button',
              author: 'cc'
            }
          ]
        }
      ],
      apis: []
    }
  }
});
