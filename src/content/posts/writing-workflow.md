---
title: 写一篇文章的完整流程
published: 2026-10-21
description: 从新建文件到本地预览，本站的写作流程和 frontmatter 字段说明。
tags: [指南, 写作]
category: 指南
draft: false
lang: zh_CN
---

记录一下自己写文章时的固定动作，省得每次都想一遍。

## 1. 新建文章

```bash
pnpm new-post 文章标题
```

会在 `src/content/posts/` 下生成一个带 frontmatter 的 Markdown 文件。也可以直接手动建文件，文件名会成为 URL：

```text
src/content/posts/my-note.md  →  /posts/my-note/
```

## 2. 填写 frontmatter

```yaml
---
title: 文章标题
published: 2026-10-21
description: 出现在列表和搜索结果里的一句话摘要
tags: [标签一, 标签二]
category: 分类
draft: false
lang: zh_CN
---
```

| 字段 | 作用 | 备注 |
| --- | --- | --- |
| `title` | 标题 | 必填 |
| `published` | 发布日期 | 必填，决定排序 |
| `updated` | 更新日期 | 可选，显示「已更新」 |
| `description` | 摘要 | 影响列表和 SEO |
| `image` | 封面图 | 相对当前文件的路径 |
| `tags` | 标签 | 数组，可多个 |
| `category` | 分类 | 单值 |
| `draft` | 草稿 | `true` 时不出现在生产构建 |
| `pinned` | 置顶 | `true` 时排在文章列表最前 |
| `lang` | 文章语言 | 如 `zh_CN`、`en` |

## 3. 本地预览

```bash
pnpm dev
```

打开 http://localhost:4321 看效果，改文件会自动热更新。

## 4. 构建

```bash
pnpm build
```

构建过程做了三件事：先抓一次 GitHub 贡献数据作为快照，再 `astro build` 生成静态页面，最后跑 Pagefind 建立全站搜索索引。产物在 `dist/`。

## 5. 发布

把 `dist/` 交给任意静态托管即可。本站暂时只在本地跑，部署的事以后再说。

> [!TIP]
> 写长文时我会先列提纲，再用 `##` 一级结构把提纲变成小标题，最后才往里填内容——这样不容易写散。
