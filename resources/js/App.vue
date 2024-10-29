<template>
    <ComputerNavbar></ComputerNavbar>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import ComputerNavbar from "../assets/js/vue/components/navbar/computer.vue"

export default {
    name: "app",
    components: {
        ComputerNavbar,
    },
};
</script>
