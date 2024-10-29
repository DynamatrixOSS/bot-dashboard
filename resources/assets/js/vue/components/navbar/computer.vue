<template>
    <div class="navbar">
        <router-link :to="{name: 'Home'}">
            <div class="navbar__logo">
                <p class="navbar__logo--big">Rebel</p>
                <p class="navbar__logo--small">By Dynamatrix</p>
            </div>
        </router-link>
        <i class="navbar__separator fa fa-angle-right"></i>
        <a class="navbar__link" href="https://discord.gg/Z8KGvGWZcY" target="_blank">Support</a>
        <router-link class="navbar__link" :to="{name: 'Privacy'}">
            Privacy
        </router-link>
        <router-link class="navbar__link" :to="{name: 'Terms'}">
            Terms
        </router-link>


        <div class="navbar__buttons">
            <button class="button button--secondary">
                <i class="fas fa-globe"></i>
                Dynamatrix
            </button>
            <button class="button button--primary">
                <i class="fab fa-discord"></i>
                Sign in
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ComputerNavbar",
}

</script>

<style scoped lang="scss">
@import "../../../../styles/sass/partials/navbar/computer";
@import "../../../../styles/sass/components/buttons";
</style>
