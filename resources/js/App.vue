<template>
    <ComputerNavbar></ComputerNavbar>
    <div class="body">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "../assets/js/vue/components/navbar/navbar.vue"

export default {
    name: "app",
    components: {
        Navbar,
    },
};
</script>
