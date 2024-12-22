<template>
    <h1 class="text text--red">Attempting to authenticate you, please wait...</h1>
</template>

<script>
import axios from 'axios';
import {useRoute} from "vue-router";
import {useUserStore} from "../piniaStores/userStore";

export default {
    name: "authCallback",
    data() {
        return {
        }
    },
    async mounted() {
        const exchange_code = await this.getExchangeCode();
        console.log(exchange_code)

        await axios.get('/sanctum/csrf-cookie').then(async response => {
            await axios.post('/api/auth/callback', {code: exchange_code})
                .then(response => {
                    if (response.data.status === 200) {
                        useUserStore().addUser(response.data.user)
                        return this.$router.push('/')
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        });
    },
    methods: {
        async getExchangeCode() {
            const route = useRoute();
            return route.query.code
        }
    },
}

</script>

<style scoped lang="scss">
@import "../../../styles/sass/frontend/home/main.scss";
</style>
