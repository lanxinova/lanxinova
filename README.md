# YOUR SPACE — GitHub Pages 个人博客

一个不需要服务器、数据库和构建步骤的中文个人博客。直接用 GitHub Pages 发布。

## 功能

- 首页：个人介绍、技能标签、文章和项目展示
- 博客：文章分类、搜索、完整文章详情页
- 响应式布局：支持手机、平板、电脑
- 亮色／深色主题：自动保存浏览器中的选择
- 纯静态：HTML、CSS、JavaScript，无第三方依赖
- 无外部字体、图片请求，部署后不需要调用任何第三方 API

## 先本地预览

双击 `index.html` 即可在浏览器中查看首页；打开文章也能正常显示。

## 修改个人资料 / 文章 / 项目

打开 **`assets/site-data.js`**，修改 `window.SITE_DATA` 中的内容：

- `site.brand`：左上角网站名称
- `site.personName`：名字或网名
- `site.avatarText`：头像区域字符
- `site.role`、`site.heroDescription`、`site.about`：个人介绍
- `site.skills`：技能/兴趣标签
- `site.github`：GitHub 主页网址（留空则不显示）
- `posts`：文章列表，包含标题、分类、日期、摘要和正文 `content`
- `projects`：项目列表，包含名称、简介、技术标签和链接

**所有自带的人物、文章、项目均为演示内容，不代表用户真实经历。公开发布前请修改。**

### 新增文章

在 `posts` 数组中按现有格式增加一个对象，`slug` 必须唯一。

正文的 `content` 支持以下类型：

```js
content: [
  { type: 'p', text: '普通段落' },
  { type: 'h2', text: '二级标题' },
  { type: 'h3', text: '三级标题' },
  { type: 'quote', text: '引用文字' },
  { type: 'list', items: ['第一条', '第二条'] },
  { type: 'code', text: 'console.log("hello")' },
  { type: 'callout', text: '提示文字' }
]
```

文章链接会自动生成为 `article.html?slug=你的slug`。搜索、分类和文章详情会自动更新。

### 新增项目

在 `projects` 数组中追加对象；`url` 可填写真实的 GitHub 仓库或演示网址。留空不会生成无效按钮。

## 免费部署 GitHub Pages

1. 登录 [GitHub](https://github.com)，新建一个 **Public** 仓库，仓库名填写 `你的GitHub用户名.github.io`（例如用户名为 `alice`，就命名为 `alice.github.io`）。
2. 将此项目文件（注意是文件本身，不是压缩包，也不是多套一层文件夹）上传至仓库根目录，提交到默认 `main` 分支。
3. 进入仓库的 **Settings → Pages**。
4. 在 **Build and deployment → Source** 选择 **Deploy from a branch**。
5. 选择 **main** 和 **/(root)**，点击 **Save**。
6. 发布完成后访问 `https://你的GitHub用户名.github.io/`。

> 也可以将这些文件放进普通仓库，例如 `my-blog`，访问地址会是 `https://用户名.github.io/my-blog/`。所有内部路径均为相对路径，支持这两种方式。

官方文档：<https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>

## 文件结构

```text
├── index.html           # 首页
├── article.html         # 文章详情模板
├── favicon.svg          # 网站图标
├── .nojekyll            # 禁用 Jekyll 处理，直接发布静态文件
├── assets/
│   ├── style.css        # 全站样式、响应式布局
│   ├── site-data.js     # 所有可编辑内容
│   └── app.js           # 交互功能
└── README.md            # 本说明
```

## 使用说明

- 本模板不需要 `npm install`、Node.js 或独立服务器。
- 发布后网站是公开的，请勿在资料、文章或源码里添加密码、密钥、内部资料或不希望被搜索到的个人信息。
- 页面内容默认存储在浏览器端脚本中，无后台管理系统；新增内容时需提交 GitHub 文件修改。
- 若后续希望直接使用 Markdown 撰写博客，可再迁移到 Jekyll 或其他静态站点生成器。
