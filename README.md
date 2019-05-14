# Introduction

![](<https://img.shields.io/badge/springboot-v2.1-brightgreen.svg>)    ![](<https://img.shields.io/badge/-typescript-blue.svg>)    ![](<https://img.shields.io/badge/angular-v6.0-red.svg>)

在线查询斗鱼弹幕。

# Demo

* [小试Angular -- Hello World](<https://github.com/9plus/As/tree/master/demo/hello-world>)
* [小试Angular -- 整合Angular和Spring Boot](<https://github.com/9plus/As/tree/master/demo/plus>)

# Deploy

目前整个项目还没写完，可以按照以下步骤测试前端页面。

**Step1**

克隆As仓

```
git clone https://github.com/9plus/As.git
cd As
```

**Step2**

执行maven命令编译

```
mvn clean install
```

**Step3**

启动springboot

```
cd crawler-server
mvn spring-boot:run
```

默认端口号为9999，在浏览器打开localhost:9999即可进入