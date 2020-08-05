require("./bootstrap");

window.Vue = require("vue");

Vue.component("articles", () =>
    import ("./components/Articles.vue"));

Vue.component("navbar", () =>
    import ("./components/Navbar.vue"));

const app = new Vue({
    el: "#app",
});