/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
    { text: "首页", link: "/" },
    { text: "更多教程", link: "https://docs.yxzl.dev/" },
    { text: "异想之旅のBlog", link: "https://blog.yxzl.dev/" },
    {
        text: "贡献者",
        items: [
            { text: "异想之旅", link: "https://github.com/yxzlwz" },
            { text: "程家麒", link: "https://github.com/modenicheng" },
            { text: "Yuzhen Qin", link: "https://github.com/YuzhenQin" },
            { text: "yellowbutton", link: "https://github.com/yellowbutton" },
            { text: "Faceybr0", link: "https://github.com/faceybro" },
            { text: "Richard Yang", link: "https://github.com/yang-zhongtian" },
            { text: "Cheng", link: "https://github.com/jackywwwwww" },
        ],
    },
]);
