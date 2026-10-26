---
title: 在文章里嵌入视频
published: 2026-10-22
description: 用 iframe 把 B 站、YouTube 的视频放进文章。
tags: [视频, 写作]
category: 写作
draft: false
lang: zh_CN
---

Markdown 本身没有视频语法，但文章里可以直接写 HTML，所以嵌入外部播放器的 iframe 就够了。

## B 站

```html
<iframe
  src="//player.bilibili.com/player.html?bvid=BV1GJ411x7h7&page=1&autoplay=0"
  width="100%"
  height="468"
  frameborder="0"
  allowfullscreen>
</iframe>
```

效果：

<iframe src="//player.bilibili.com/player.html?bvid=BV1GJ411x7h7&page=1&autoplay=0" width="100%" height="468" frameborder="0" allowfullscreen></iframe>

## YouTube

把 `VIDEO_ID` 换成视频地址里 `v=` 后面那一段：

```html
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  width="100%"
  height="468"
  frameborder="0"
  allowfullscreen>
</iframe>
```

## 本地视频

如果视频文件不大，也可以直接放在 `public/` 下，用原生 `<video>` 播放：

```html
<video src="/videos/demo.mp4" controls width="100%"></video>
```

## 提醒

- iframe 里的内容来自第三方，对方被墙或改地址都会让播放器显示空白
- 竖屏视频的高度别写死 468，改成 `aspect-ratio` 更稳
- 视频比图片重得多，文章里放太多会明显拖慢加载
