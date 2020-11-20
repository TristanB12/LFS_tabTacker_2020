<template>
    <div class="login-view">
        <h1>Login to your account</h1>
        <p>you don't have an account ? click <a href="">here</a></p>
        <LoginPannel></LoginPannel>
    </div>
</template>

<script>
import LoginPannel from '@/components/LoginPannel.vue';
    export default {
        name: 'LoginView',
        components: {
            LoginPannel,
        },
    }
</script>

<style lang="scss" scoped>
.login-view{
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
        font-size: .9em;
        font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: 100;
        text-align: center;
    }
}
</style>