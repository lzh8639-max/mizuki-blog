import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'

export const siteConfig: SiteConfig = {
  title: '慕雨棠的博客',
  subtitle: '记录学习与生活',
  lang: 'zh_CN', // 语言：'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 265, // 主题色默认色相（0-360）
    fixed: true, // 对访客隐藏主题色选择器
  },
  banner: {
    enable: true,
    text: '',
    subText: '',
    src: 'assets/images/back.webp', // 相对于 src 目录
    position: 'center',
    credit: {
      enable: false,
      text: '',
      url: '',
    },
  },
  toc: {
    enable: true,
    depth: 3,
    showConditions: {
      startsWith: ['/posts/'],
      equalsTo: [],
    },
  },
  favicon: [
    {
      src: '/favicon/logo.jpg',
    },
  ],
}

export const navBarConfig: NavBarConfig = {
  links: [
    {
      icon: 'material-symbols:home-outline-rounded',
      name: '主页',
      url: '/',
    },
    {
      icon: 'material-symbols:archive-outline-rounded',
      name: '归档',
      url: '/archive/',
    },
    {
      icon: 'material-symbols:id-card-outline-rounded',
      name: '关于',
      url: '/about/',
    },
    // 友链已关闭（导航项与 /links/ 页面一并下线），需要时恢复 src/pages/links.astro 后再打开
    // {
    //   icon: 'material-symbols:link-rounded',
    //   name: '友链',
    //   url: '/links/',
    // },
    // 留言板需要先在仓库开启 Discussions 并安装 giscus 应用，
    // 填好 src/components/widget/Comments.svelte 里的 repoId / categoryId 后再打开
    // {
    //   icon: 'material-symbols:android-messages-outline',
    //   name: '留言',
    //   url: '/comment/',
    // },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/head.jpg',
  name: '慕雨棠',
  bio: '君子浮沉三两风｜入我一生憾梦中',
  links: [
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/Pinpe/Pinpe-top',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
