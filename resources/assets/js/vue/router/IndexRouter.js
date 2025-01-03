// Vital imports for Vue router
import {createRouter, createWebHistory} from "vue-router";

// Imports for public frontend pages
import homePage from "../frontend/home.vue";
import privacyPage from "../frontend/privacy.vue";
import termsPage from "../frontend/terms.vue";

// Imports for authentication pages
import authCallback from "../authentication/callback.vue";
import {useUserStore} from "../piniaStores/userStore";

const authRoutes = [
    {
        path: "callback",
        name: "authCallback",
        component: () => authCallback
    }
]

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => homePage
    },
    {
        path: "/privacy",
        name: "Privacy",
        component: () => privacyPage
    },
    {
        path: "/terms",
        name: "Terms",
        component: () => termsPage
    },
    {
        path: "/auth",
        children: authRoutes,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(async (to, from, next) => {
    let user = await useUserStore().getUser
    console.log(`user: ${JSON.stringify(user)}`)
    if (user === null) {
        await useUserStore().fetchUser()
        user = await useUserStore().getUser
    }

    next()
})

export default router
