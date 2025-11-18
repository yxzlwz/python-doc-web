import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
    { text: "首页", link: "/" },
    {
        text: "相关内容",
        items: [
            { text: "更多教程", link: "https://docs.yxzl.dev/" },
            { text: "QA校友项目", link: "https://github.com/QingdaoAcademy" },
        ],
    },
    {
        text: "贡献者",
        items: [
            { text: "异想之旅", link: "https://blog.yxzl.dev/" },
            { text: "程家麒", link: "https://modenc.top/" },
            { text: "Honahec", link: "https://honahec.cc/" },
            { text: "Iron_Grey_", link: "https://irongrey.top/" },
            { text: "完整名单", link: "/taqbzfxf/" },
        ],
    },
]);
