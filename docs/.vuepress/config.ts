import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

export default defineUserConfig({
    base: "/",
    lang: "zh-CN",
    title: "Python 入门文档",
    description: "一个新手友好的 Python 3 入门文档",

    head: [
        // ['link', { rel: 'icon', type: 'image/png', href: 'https://theme-plume.vuejs.press/favicon-32x32.png' }],
    ],

    bundler: viteBundler(),
    shouldPrefetch: false,

    theme: plumeTheme({
        hostname: "https://python.yxzl.dev",

        /* 文档仓库配置，用于 editLink */
        docsRepo: "yxzlwz/python-doc-web",
        docsDir: "docs",
        docsBranch: "main",

        editLink: true,
        contributors: false,
        changelog: false,

        cache: "filesystem",

        autoFrontmatter: {
            permalink: true, // 是否生成永久链接
            createTime: false, // 是否生成创建时间
            title: false, // 是否生成标题
        },

        search: {
            provider: "algolia",
            appId: "X09UO4RR4M",
            apiKey: "8fcd255a8eff7072fc440d840327b25d",
            indices: ["python"],
        },

        readingTime: false,
        collections: [
            {
                type: "doc",
                dir: "",
                title: "Python 文档",
                sidebar: "auto",
                autoFrontmatter: {
                    permalink: true,
                },
            },
        ],

        /**
         * markdown
         * @see https://theme-plume.vuejs.press/config/markdown/
         */
        markdown: {
            abbr: true, // 启用 abbr 语法  *[label]: content
            annotation: true, // 启用 annotation 语法  [+label]: content
            caniuse: true, // 启用 caniuse 语法  @[caniuse](feature_name)
            plot: true, // 启用隐秘文本语法 !!xxxx!!
            icon: { provider: "iconify" }, // 启用内置图标语法  ::icon-name::
            repl: {
                // 启用 代码演示容器
                python: true, // ::: python-repl
            },
            math: {
                // 启用数学公式
                type: "katex",
            },
            image: {
                figure: true, // 启用 figure
                lazyload: true, // 启用图片懒加载
                mark: true, // 启用图片标记
                size: true, // 启用图片大小
            },
            mark: 'lazy',
            imageSize: "local", // 启用 自动填充 图片宽高属性，避免页面抖动
        },

        comment: {
            provider: "Giscus",
            comment: true,
            repo: "yxzlwz/python-doc-web",
            repoId: "R_kgDOP1HjCQ",
            category: "General",
            categoryId: "DIC_kwDOP1HjCc4CvyWj",
            mapping: "pathname",
            reactionsEnabled: true,
            inputPosition: "top",
        },
    }),
    plugins: [
        googleAnalyticsPlugin({
            id: "G-NZF098DNSL",
        }),
    ],
});
