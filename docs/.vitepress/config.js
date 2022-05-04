const cviSidebar = [
    { text: "cvi", link: "/cvi/" },
    { text: "briif", link: "/cvi/brief" },
    { text: "moodboard", link: "/cvi/moodboard" },
]
const logiSidebar = [
    {text:"logi", link:"/logi/"},
    {text:"Font märgiks", link:"/logi/01_font-margiks"},
]

module.exports = {
    title: "Minu dokuveeb",
    base: "/dokuveeb/",
    themeConfig: {
        nav: [
            { text: "Esileht", link: "/" },
            { text: "Minust", link: "/minust/" },
            { text: "Logi", link: "/logi/" },
            { text: "CVI", link: "/cvi/" },
        ],
        sidebar: 
        {
            "/cvi/": cviSidebar,
            "/cvi/brief": cviSidebar,
            "logi/": logiSidebar,
            "/logi/fontmargiks": logiSidebar,
        },
    }
};