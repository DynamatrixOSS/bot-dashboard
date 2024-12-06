<template>
    <Navbar></Navbar>
    <div class="routecontainer">
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from "../assets/js/vue/components/navbar/navbar.vue"
import Footer from "../assets/js/vue/components/footer/footer.vue"
export default {
    name: "app",
    components: {
        Navbar,
        Footer,
    },
};
</script>
