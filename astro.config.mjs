import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import swup from '@swup/astro'
import Compress from 'astro-compress'
import expressiveCode from 'astro-expressive-code'
import icon from 'astro-icon'
import mermaid from 'astro-mermaid'
import { defineConfig } from 'astro/config'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeComponents from 'rehype-components' /* Render the custom directive content */
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import remarkDirective from 'remark-directive' /* Handle directives */
import remarkGithubAdmonitionsToDirectives from 'remark-github-admonitions-to-directives'
import remarkMath from 'remark-math'
import remarkSectionize from 'remark-sectionize'
import { AdmonitionComponent } from './src/plugins/rehype-component-admonition.mjs'
import { GithubCardComponent } from './src/plugins/rehype-component-github-card.mjs'
import { rehypeFootnoteLabel } from './src/plugins/rehype-footnote-label.mjs'
import { parseDirectiveNode } from './src/plugins/remark-directive-rehype.js'
import { remarkExcerpt } from './src/plugins/remark-excerpt.js'
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs'
import imageOptimizer from './src/services/image-service.js'


import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  // GitHub Pages 项目站点：站点地址是 https://lzh8639-max.github.io/mizuki-blog/
  // 所以 site 只写域名，base 写子路径（页面内所有链接通过 url() 自动加前缀）
  site: 'https://lzh8639-max.github.io',
  base: '/mizuki-blog/',
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [
    imageOptimizer(),
    tailwind({
      nesting: true,
    }),
    swup({
      theme: false,
      animationClass: 'transition-swup-', // see https://swup.js.org/options/#animationselector
      // the default value `transition-` cause transition delay
      // when the Tailwind class `transition-all` is used
      containers: ['main', '#toc'],
      smoothScrolling: true,
      cache: true,
      preload: true,
      accessibility: true,
      updateHead: true,
      updateBodyClass: false,
      globalInstance: true,
    }),
    icon({
      include: {
        mdi: ["*"],
        'preprocess: vitePreprocess(),': ['*'],
        'fa6-brands': ['*'],
        'fa6-regular': ['*'],
        'fa6-solid': ['*'],
      },
    }),
    svelte(),
    // mermaid 必须排在 expressive-code 前面：它先把 ```mermaid 转成 <pre class="mermaid">，
    // 否则代码块会先被 expressive-code 吃掉
    mermaid({
      autoTheme: true,
    }),
    expressiveCode({
      // 亮/暗两套配色：浅色做基准，深色靠 <html class="dark"> 切换
      themes: ['catppuccin-latte', 'catppuccin-mocha'],
      // 站内是手动切 class，关掉系统媒体查询，改成按 class 选主题
      useDarkModeMediaQuery: false,
      themeCssSelector: (theme) => (theme.type === 'dark' ? '.dark' : false),
      plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
    }),
    sitemap(),
    Compress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true, // https://github.com/PlayForm/Compress/issues/376
      },
    }),
    vue(),
  ],
  markdown: {
    // 代码块高亮已交给 expressive-code，这里不再配置 shiki
    remarkPlugins: [
      remarkMath,
      remarkReadingTime,
      remarkExcerpt,
      remarkGithubAdmonitionsToDirectives,
      remarkDirective,
      remarkSectionize,
      parseDirectiveNode,
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      [
        rehypeComponents,
        {
          components: {
            github: GithubCardComponent,
            note: (x, y) => AdmonitionComponent(x, y, 'note'),
            tip: (x, y) => AdmonitionComponent(x, y, 'tip'),
            important: (x, y) => AdmonitionComponent(x, y, 'important'),
            caution: (x, y) => AdmonitionComponent(x, y, 'caution'),
            warning: (x, y) => AdmonitionComponent(x, y, 'warning'),
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['anchor'],
          },
          content: {
            type: 'element',
            tagName: 'span',
            properties: {
              className: ['anchor-icon'],
              'data-pagefind-ignore': true,
            },
            children: [
              {
                type: 'text',
                value: '#',
              },
            ],
          },
        },
      ],
      rehypeFootnoteLabel,
    ],
  },
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // temporarily suppress this warning
          if (
            warning.message.includes('is dynamically imported by') &&
            warning.message.includes('but also statically imported by')
          ) {
            return
          }
          warn(warning)
        },
      },
    },
  },
})
