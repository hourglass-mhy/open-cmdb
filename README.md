
openCMDB 前端项目

## 项目介绍

    前端项目，使用Vue.js + iviewui进行开发。

## 环境部署

### 版本详情：

	node-v6.10.2
## 开发
### 安装第三方依赖
```
npm install

```
###本地开发 开启服务
```
npm run dev
```

## 发布
### 安装第三方依赖
```
npm install

```
### 打包发布
```
npm run build

### 打包后的文件

  打包后直接使用Nginx发布dist目录即可。
	 dist
		 --static(静态资源)
		 --index.html (入口html)