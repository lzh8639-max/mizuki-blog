# 慕雨棠的博客

个人博客源码，记录学习与生活。

## 本地开发

```bash
pnpm install   # 装依赖（需 pnpm 10）
pnpm dev       # 开发服务器 http://localhost:4321
pnpm build     # 构建生产版本（含 Pagefind 搜索索引）
pnpm preview   # 预览构建结果
```

## 技术栈

- [Astro](https://astro.build) + [Fuwari](https://github.com/saicaca/fuwari) 主题
- Svelte 5、Vue 3（友链墙）、Tailwind CSS 3
- Pagefind 全文搜索、@swup/astro 页面过渡、KaTeX、PhotoSwipe、Expressive Code

## 写文章

```bash
pnpm new-post 文章标题
```

文章放在 `src/content/posts/`，站点与导航配置集中在 `src/config.ts`。

## 致谢

主题结构参考 [Pinpe-top](https://github.com/Pinpe/Pinpe-top)，基础模板为 [Fuwari](https://github.com/saicaca/fuwari)。

## 许可

主题代码遵循 [Fuwari](https://github.com/saicaca/fuwari) 的 MIT 许可；本站文章内容采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。
