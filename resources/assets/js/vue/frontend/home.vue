<template>
    <div class="header">
        <div class="header__intro width--50">
            <h1 class="text__header1">
                <span class="text--decorated">R</span>ebel <i class="fab fa-discord"></i> server management from A to Z
            </h1>
            <p>Rebel is a multi-module discord bot, dedicated to managing your server with every module necessary for moderation, management, utility and entertainment.</p>
        </div>
    </div>
    <div class="modules">
        <div class="modules__intro width--50">
            <h1 class="text__header1">Modules</h1>
        </div>
        <div class="vertical-scrolling-container">
            <div class="vertical-scrolling-content">
                <div v-for="module in modules" :key="module.name" class="module-card">
                    <h2 class="text__header2">{{ module.name }}</h2>
                    <p>{{ module.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Home",
    data() {
        return {
            modules: [
                {name: 'Levelling', description: 'Track activity statistics in your server and reward users who interact a lot '},
                {name: 'Entertainment', description: 'Provide entertainment to your members through our entertainment system with economy, pets and more.' },
                {name: 'Utility', description: 'Manage your server through our convenient utility systems' },
                {name: 'Verification', description: 'Keep your server safe from unverified bad actors with our user-friendly verification methods' },
                {name: 'Moderation', description: 'Protect your server and members against bad actors with our sophisticated moderation module' },
            ],
        };
    },
}

</script>

<style scoped lang="scss">
@import "../../../styles/sass/frontend/home/main.scss";
</style>
