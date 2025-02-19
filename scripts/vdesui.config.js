var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/vdesui.config.ts
__export(exports, {
  default: () => vdesui_config_default
});

// src/packages/config.ts
function defineConfig(config) {
  return config;
}

// src/vdesui.config.ts
var vdesui_config_default = defineConfig({
  site: {
    defaultLang: "zh-CN",
    versions: [
      {
        name: "1.x",
        link: "/"
      }
    ]
  },
  locales: {
    "zh-CN": {
      langLabel: "\u4E2D",
      header: [
        {
          name: "intro",
          cName: "\u7EC4\u4EF6",
          path: "intro"
        },
        {
          name: "api",
          cName: "API",
          path: "api/index"
        }
      ],
      docs: {
        name: "\u6307\u5357",
        packages: [
          {
            name: "intro",
            cName: "\u4ECB\u7ECD",
            show: true
          }
        ]
      },
      navs: [
        {
          name: "js",
          demoShow: false,
          packages: [
            {
              name: "events",
              desc: "\u4E8B\u4EF6",
              type: "methods"
            }
          ]
        },
        {
          name: "\u8868\u5355\u7EC4\u4EF6",
          packages: [
            {
              name: "button",
              desc: "\u6309\u94AE",
              author: "cc"
            },
            {
              name: "form",
              desc: "\u8868\u5355",
              author: "cc"
            },
            {
              name: "input",
              desc: "\u8F93\u5165\u6846",
              author: "cc"
            },
            {
              name: "Switch",
              desc: "\u5F00\u5173",
              author: "cc"
            },
            {
              name: "cell",
              desc: "\u5217\u8868\u9879",
              author: ""
            },
            {
              name: "cells",
              desc: "\u5217\u8868\u5206\u7EC4"
            },
            {
              name: "textarea",
              desc: "\u591A\u884C\u8F93\u5165\u6846"
            },
            {
              name: "picker-view",
              desc: "\u5D4C\u5165\u9875\u9762\u7684\u6EDA\u52A8\u9009\u62E9\u5668"
            },
            {
              name: "picker-view-column",
              desc: "\u6EDA\u52A8\u9009\u62E9\u5668\u5B50\u9879"
            },
            {
              name: "picker",
              desc: "\u4ECE\u5E95\u90E8\u5F39\u8D77\u7684\u6EDA\u52A8\u9009\u62E9\u5668"
            },
            {
              name: "radio",
              desc: "\u5355\u9009\u9879\u76EE"
            },
            {
              name: "radio-group",
              desc: "\u5355\u9009\u7EC4"
            }
          ]
        },
        {
          name: "\u89C6\u56FE\u5BB9\u5668",
          packages: [
            {
              name: "view",
              desc: "\u89C6\u56FE\u5BB9\u5668"
            }
          ]
        },
        {
          name: "\u64CD\u4F5C\u53CD\u9988",
          packages: [
            {
              name: "Dialog",
              desc: "\u5F39\u7A97\u7EC4\u4EF6"
            }
          ]
        },
        {
          name: "\u5A92\u4F53\u7EC4\u4EF6",
          packages: [
            {
              name: "Image",
              desc: "\u56FE\u7247"
            }
          ]
        }
      ],
      apis: [
        {
          name: "\u5F00\u653E\u63A5\u53E3",
          packages: [
            {
              name: "\u7528\u6237\u4FE1\u606F",
              path: "open-api/user-info"
            },
            {
              name: "\u767B\u5F55",
              path: "open-api/login"
            },
            {
              name: "\u6388\u6743",
              path: "open-api/authorize"
            },
            {
              name: "\u8BBE\u7F6E",
              path: "open-api/seeting"
            }
          ]
        },
        {
          name: "\u754C\u9762",
          packages: [
            {
              name: "\u4EA4\u4E92",
              path: "ui/interaction"
            },
            {
              name: "\u5BFC\u822A\u680F",
              path: "ui/navigation-bar"
            }
          ]
        },
        {
          name: "\u7F51\u7EDC",
          packages: [
            {
              name: "\u53D1\u8D77\u8BF7\u6C42",
              path: "network/request"
            }
          ]
        }
      ]
    },
    "en-US": {
      langLabel: "EN",
      header: [
        {
          name: "intro",
          cName: "guide",
          path: "intro"
        },
        {
          name: "api",
          cName: "API",
          path: "api/index"
        }
      ],
      docs: {
        name: "guide",
        packages: [
          {
            name: "intro",
            cName: "introduce",
            show: true
          }
        ]
      },
      navs: [
        {
          name: "form compoents",
          packages: [
            {
              name: "Button",
              desc: "Button",
              author: "cc"
            }
          ]
        }
      ],
      apis: []
    }
  }
});
