import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../frontend/home.vue")
    },
    {
        path: "/privacy",
        name: "Privacy",
        component: () => import("../frontend/privacy.vue")
    },
    {
        path: "/terms",
        name: "Terms",
        component: () => import("../frontend/terms.vue")
    }
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
