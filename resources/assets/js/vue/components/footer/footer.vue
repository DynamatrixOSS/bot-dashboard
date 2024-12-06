<template>
    <div class="footer">
        <h1 class="brandText">Copyright {{new Date().getFullYear()}} - <a href="https://dynamatrix.io" target="_blank">Dynamatrix B.V.</a></h1>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Footer",
}

</script>

<style scoped lang="scss">
@import "../../../../styles/sass/partials/footer/footer";
</style>
