## 基于vue3+vite+uniapp+Eslint+Prettier+husky构建的小程序项目模板

### 项目介绍

#### main分支上的代码是没有引入组件库的项目模板，没有自定义tabbar，没有自定导航栏。uview-plus分支上的引用了uview-plus组件库+自定义tabbar+自定义导航栏，需要的小伙伴切换到uview-plus分支上

使用了vue3中的组合式api+setup语法糖

适用于团队开发，统一代码风格。使用git commit命令的时候会对项目的代码进行eslint校验，并会尝试对不符合eslint的代码尝试进行修复，如果commit失败就代表中项目中的的代码eslint无法修复，需要手动修改。

使用vscode开发项目的时候ctrl+s的时候会Prettier插件会自动修复代码，如果修改了规则.prettierrc.json请对相应的eslint规则文件进行配置 

可以制定项目中统一的主题

使用了uview组件库，有自定义的tabbr和导航栏，封装了请求，可以在请求失败的情况下重新请求次数，默认是重新发送2次

### 项目结构

   ```
                         
   ├─.husky                                   #git hook
   │  │  pre-commit
   │  │  
   │  └─_
   │          .gitignore
   │          husky.sh
   │          
   ├─.vscode                                 #推荐插件+配置
   │      extensions.json
   │      settings.json
   │      
   └─src
       │  App.vue
       │  main.js
       │  manifest.json
       │  pages.json
       │  uni.scss
       │  
       ├─common
       │  └─api
       ├─components
       │  └─custom
       │          custom.vue
       │          
       ├─pages
       │  └─tabbar
       │          index.vue
       │          shop.vue
       │          tabbar.vue
       │          
       ├─static
       │  │  logo.png
       │  │  
       │  └─tabbar
       │          index.png
       │          index_cur.png
       │          me.png
       │          me_cur.png
       │          order.png
       │          order_cur.png
       │          shop.png
       │          shop_cur.png
       │          
       ├─styles
       │      flex.scss
       │      global.scss
       │      theme.scss
       │      
       └─utils
               config.js
               http.js
               rules.js
               util.js
               utils.js
   ```

### 运行项目

```shell
#安装依赖
pnpm install
#运行到微信小程序
pnpm run dev:mp-weixin
#在微信下程序开发工具导入项目，打开当前项目中的dist/dev/mp-weixin目录
#打包小程序
pnpm run build:mp-weixin
#在微信下程序开发工具导入项目，打开当前项目中的dist/build/mp-weixin目录
```

