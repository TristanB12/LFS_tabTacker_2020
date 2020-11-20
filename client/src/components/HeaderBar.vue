<template>
    <div class="header-container">
        <header>
            <div class="main-title">
                <router-link to="/">TabTracker</router-link>
            </div>
            <div class="auth-links">
                <router-link to="/login">Login</router-link>
                <router-link to="/register">Register</router-link>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'HeaderBar'
    }
</script>

<style lang="scss" scoped>
.header-container {
    background-color: #e67e22;
    height: 8vh;
    box-shadow: 0px 0px 5px black;

    header {
        width: 90%;
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.main-title {
    flex: 5;
    a {
        color: white;
        font-size: 2em;
        font-family: 'Josefin Sans', sans-serif;
        text-decoration: none;
        &:hover {
            color: black;
        }
    }
}
.auth-links {
    flex: 1;
    display: flex;
    justify-content: space-around;
    a {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1.5em;
        text-decoration: none;
        color: white;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>