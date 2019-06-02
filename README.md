# Introduction

![](<https://img.shields.io/badge/springboot-v2.1-brightgreen.svg>)    ![](<https://img.shields.io/badge/-typescript-blue.svg>)    ![](<https://img.shields.io/badge/angular-v6.0-red.svg>)

一些练习与实践项目。

# Demo

* [小试Angular -- Hello World](<https://github.com/9plus/As/tree/master/demo/hello-world>)
* [小试Angular -- 整合Angular和Spring Boot](<https://github.com/9plus/As/tree/master/demo/plus>)
* [小试Angular -- 搭建一个弹幕查询页面(1)](<https://github.com/9plus/As/tree/master/demo/search>)
* [小试Angular -- 我用Java爬取了斗鱼刀塔区的弹幕](<https://github.com/9plus/As/tree/master/demo/DyTest>)
* [小试Angular -- 理解Directive，图片拖放实践](<https://github.com/9plus/As/tree/master/demo/Drag>)
* [油猴脚本 -- 斗鱼弹幕助手]([chrome油猴斗鱼弹幕助手v0.1.txt](https://github.com/9plus/As/blob/master/demo/DyDm/chrome%E6%B2%B9%E7%8C%B4%E6%96%97%E9%B1%BC%E5%BC%B9%E5%B9%95%E5%8A%A9%E6%89%8Bv0.1.txt))

# Display

效果见[知乎专栏](<https://zhuanlan.zhihu.com/p/63672230>)

# Deploy

目前斗鱼爬虫项目已经可用，部署可按以下步骤：

**Step1**

克隆As仓

```
git clone https://github.com/9plus/As.git
cd As
```

**Step2**

修改DyController.java文件中的房间名。

导入dy.sql文件，并修改application.yml中的数据库中的用户名与密码。

**Step3**

执行maven命令编译

```
mvn clean install
```

**Step4**

启动springboot

```
cd crawler-server
mvn spring-boot:run
```

默认端口号为9999，在浏览器打开localhost:9999即可进入

# About Me

学习Java与Angular，关注我的公众号：

![](<https://mmbiz.qpic.cn/mmbiz_png/mEUmd7rdpBfBdw0w6xXEYOicxiaBbjBVIkY1jDCqSwMLdiaLBNZCNGpY8acyB7ozcADvRZGOOqyM27hgANjlxIDicw/0?wx_fmt=png>)

更多精彩文章等你来看~