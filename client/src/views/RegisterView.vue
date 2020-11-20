<template>
    <div class="register-view">
        <h1>Register</h1>
        <p>Create an account for free and have unlimited access to more than 1000000 tabs</p>
        <RegisterPannel></RegisterPannel>
    </div>
</template>

<script>
import RegisterPannel from '@/components/RegisterPannel.vue';
    export default {
        name: 'RegisterVue',
        components: {
            RegisterPannel,
        },
    }
</script>

<style lang="scss" scoped>
.register-view{
    width: 70%;
    margin: auto;
    margin-top: 4vh;
    height: 65vh;
    display: flex;
    flex-direction: column;
    h1 {
        text-align: center;
    }
    p {
        font-size: 1em;
        margin-top: 3vh;
        font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: 100;
        text-align: center;
    }
}
</style>