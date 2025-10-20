import { defineThemeConfig } from "vuepress-theme-plume";
import navbar from "./navbar";

export default defineThemeConfig({
    appearance: true,

    copyright: "CC-BY-NC-SA-4.0",

    prevPage: true, // 是否启用上一页链接
    nextPage: true, // 是否启用下一页链接
    createTime: false, // 是否显示文章创建时间

    // footer: {
    //   message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
    //   copyright: '',
    // },

    navbar,
});
