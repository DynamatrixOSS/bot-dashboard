<template>
    <div class="navbar">
        <div class="navbar__mobile">
            <router-link :to="{name: 'Home'}">
                <div class="navbar__logo">
                    <p class="navbar__logo--big">Rebel</p>
                    <p class="navbar__logo--small">By Dynamatrix</p>
                </div>
            </router-link>
            <i class="fa fa-bars navbar__burger" @click="navbarIsOpen = !navbarIsOpen"></i>
        </div>
        <i class="navbar__separator fa fa-angle-right"></i>
        <a class="navbar__link" v-if="isMobile && navbarIsOpen || !isMobile" href="https://discord.gg/Z8KGvGWZcY" target="_blank">Support</a>
        <router-link class="navbar__link" v-if="isMobile && navbarIsOpen || !isMobile" :to="{name: 'Privacy'}">
            Privacy
        </router-link>
        <router-link class="navbar__link" v-if="isMobile && navbarIsOpen || !isMobile" :to="{name: 'Terms'}">
            Terms
        </router-link>


        <div class="navbar__buttons" v-if="isMobile && navbarIsOpen || !isMobile">
            <a class="button button--secondary" href="https://dynamatrix.io">
                <i class="fas fa-globe"></i>
                Dynamatrix
            </a>
            <button @click="directToOAuth" class="button button--primary">
                <i class="fab fa-discord"></i>
                Sign in
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Navbar",
    data() {
        return {
            navbarIsOpen: false,
            isMobile: window.innerWidth <= 767
        }
    },
    methods: {
        directToOAuth() {
            window.location.href = 'https://discord.com/oauth2/authorize?client_id=1314619258797555753&response_type=code&redirect_uri=http%3A%2F%2F0.0.0.0&scope=guilds+email+guilds.members.read+identify'
        }
    },
}

</script>

<style scoped lang="scss">
@import "../../../../styles/sass/partials/navbar/navbar";
@import "../../../../styles/sass/components/buttons";
</style>
