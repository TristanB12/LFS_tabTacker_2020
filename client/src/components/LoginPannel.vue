<template>
    <div class="login-pannel">
        <input
            type="email"
            name="email"
            v-model="email"
            placeholder="email"
            class="input" required/>
        <input
            type="password"
            name="password"
            v-model="password"
            placeholder="password"
            class="input" required/>
            <div v-html="error" class="error"></div>
        <button
            @click="auth"
            :class="{disabled : !can_login}">
            Register
        </button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
            can_login:false,
            error: null
        }
    },
    methods: {
        auth() {
            axios.post('http://localhost:8081/authentication/login', {
                email: this.email,
                password: this.password
            })
            .then(() => console.log("connected"))
            .catch(error => {
                this.error = error.response.data.message
            })
        },
        canLogin() {
            if(this.password != '' && this.email != '')
                this.can_login = true;
            else
                this.can_login = false;
        }
    },
    beforeUpdate () {
        this.canLogin();
    },
}
</script>

<style lang="scss" scoped>
.login-pannel {
    width: 60%;
    height: 40vh;
    margin: auto;
    padding: 2vh 5vh 2vh 5vh;
    display: flex;
    flex-direction: column;
    border: 5px solid #e67e22;
    border-radius: .7em;
    box-shadow: 0px 0px 5px black;
    input {
        width: 60%;
        margin: auto;
    }
}
.input {
    font-size: 1.5em;
    padding: .4em 1.2em .4em 1.2em;
    border: 2px solid #e67e22;
    border-radius: .5em;
    outline: none;
    font-family: Josefin Sans, sans-serif;
    &:invalid
    {
        background-color: rgba(230, 126, 34, 0.3);
    }
    &:valid {
        background-color: rgba(230, 126, 34, 0.8);
        color: white;
    }
}
button {
    width: 30%;
    margin: auto;
    font-size: 1.7em;
    padding: .4em 1.2em .4em 1.2em;
    border: 2px solid #e67e22;
    border-radius: .5em;
    color: white;
    background-color: #e67e22;
    font-family: Josefin Sans, sans-serif;
    cursor: pointer;
    outline: none;
    transition-duration: 400ms;
    &:hover {
        background-color: white;
        color: #e67e22;
    }
}

.disabled {
    cursor: not-allowed;
    background-color: white;
    color: #e67e22;
}

.error {
    color: red;
    text-align: center;
}
</style>