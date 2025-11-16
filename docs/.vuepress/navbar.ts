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
            { text: "Yuzhen Qin", link: "https://github.com/YuzhenQin" },
            { text: "Iron_Grey_", link: "https://irongrey.top/" },
            { text: "Faceybr0", link: "https://github.com/faceybro" },
            { text: "Richard Yang", link: "https://github.com/yang-zhongtian" },
            { text: "Cheng", link: "https://github.com/jackywwwwww" },
        ],
    },
]);
