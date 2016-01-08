# moensun-koa-mvc
## 目录结构
* app

    -Http

     -Controllers

     --Controller.js

     --IndexController.js

     -Middleware

     -Kernel.js

     -routes.js
* bootatrap

    -autoload.js

    -bootstrap.js

* config

    -app.js

    -folder.js
* lib

  -router

  --MSBaseController.js

  --MSRouter.js


* public
* resources
* app.js

# 使用说明
## 路由
    路由的配置在 app->Http->routes.js
    提供了 get,post,put,delete http请求方式

    MSRouter.get('/route-name',{'uses':'controller@action'});
## 过滤
    这里用middleware做的过滤，
    MSRouter.get('/route-name',{'uses':'controller@action','middleware':['middle']});
    middle 是 一个key ，这key 配在 app->Http->Kernael.js 里面。
    里面的 middle 分两种 ，一个是
    middle ,这个是用来做代码级的过滤的，这块目前没有做处理

    还有个是 routerMiddle 这个是路由的过滤器

## 最后
    基本来说，只是对koa的路由级别做了封装，符合一些人的代码习惯而已，主要还是TJ大神厉害。
    另外来说，框架，框架，只是一个架子。不要带太多的东西进去，否则的话，会影响灵活性。
    项目没有固定的，不同的东西适用于不同的地方。