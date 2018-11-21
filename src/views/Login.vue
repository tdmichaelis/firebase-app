<template>
  <div class="login">
    <h3>Sign In</h3>
    <v-alert outline color="error" icon="warning"
        :value="errorMessage">
      {{ errorMessage }}
    </v-alert>
    <input type="text" placeholder="Email" v-model="email"><br>
    <input type="password" placeholder="Password" v-model="password"><br>
    <v-btn @click="login">Sign In</v-btn><br>
    <p>
      Don't have an account? <router-link to="/sign-up">Sign up</router-link>
      <br>
      Or Sign in using a third party app
    </p>
    <v-layout column align-center>
      <img class="google" src="/img/logos/google-button.png" @click="googleSignIn" />
      <button class="loginBtn loginBtn--facebook" @click="facebookSignIn">Sign in with Facebook</button>
      <v-btn class="loginBtn--github" @click="githubSignIn">Sign in with <img class="github-logo" src="img/logos/GitHub_Logo.png" alt=""></v-btn>
    </v-layout>
  </div>
</template>

<style lang="stylus" scoped>
.login {
  margin-top: 40px;

  input {
    margin: 10px 0;
    width: 250px;
    padding: 15px;
    border: solid 1px rgb(238, 238, 238);
  }

  .google {
    width: 250px;
    cursor: pointer;
  }

  /* Shared */
  .loginBtn {
    box-sizing: border-box;
    position: relative;
    /* width: 13em;  - apply for fixed size */
    margin: 0.2em;
    padding: 0 15px 0 56px;
    border: none;
    text-align: left;
    line-height: 34px;
    white-space: nowrap;
    border-radius: 0.2em;
    font-size: 16px;
    color: #FFF;
  }

  .loginBtn:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 5px;
    width: 40px;
    height: 100%;
  }

  .loginBtn:focus {
    outline: none;
  }

  .loginBtn:active {
    box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
  }

  /* Facebook */
  .loginBtn--facebook {
    background-color: #4C69BA;
    background-image: linear-gradient(#4C69BA, #3B55A0);
    /* font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif; */
    text-shadow: 0 -1px 0 #354C8C;
  }

  .loginBtn--facebook:before {
    border-right: #364e92 1px solid;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 14px no-repeat;
  }

  button {
    margin-top: 10px;
    width: 244px;
    cursor: pointer;
    height: 50px;
    background-color: lightgray;
  }

  p {
    font-size: 13px;
    margin-top: 10px;

    a {
      text-decoration: none;
    }
  }

  .loginBtn--github {
    .github-logo {
      height: 25px;
      margin-bottom: 5px;
    }
  }
}
</style>

<script>
import firebase from 'firebase'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    ...mapActions(['setUser']),
    login() {
      const vm = this
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            vm.setUser(user)
            vm.$router.replace('home')
          },
          function(err) {
            console.log(err)
            vm.errorMessage = err.message
          }
        )
    },
    googleSignIn() {
      const vm = this
      var provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('profile')
      provider.addScope('email')
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(
          function(result) {
            // This gives you a Google Access Token.
            let token = result.credential.accessToken
            // The signed-in user info.
            let user = result.user
            vm.setUser(result.user)
            vm.$router.replace('home')
          },
          function(err) {
            // error codes "auth/user-not-found" "auth/wrong-password" "auth/account-exists-with-different-credential"
            console.log(err)
            vm.errorMessage = err.message
          }
        )
    },
    facebookSignIn() {
      const vm = this
      var provider = new firebase.auth.FacebookAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(
          function(result) {
            // This gives you a Google Access Token.
            let token = result.credential.accessToken
            // The signed-in user info.
            let user = result.user
            vm.setUser(result.user)
            vm.$router.replace('home')
          },
          function(err) {
            // error codes "auth/user-not-found" "auth/wrong-password" "auth/account-exists-with-different-credential"
            console.log(err)
            vm.errorMessage = err.message
          }
        )
    },
    githubSignIn() {
      const vm = this
      var provider = new firebase.auth.GithubAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(
          function(result) {
            // This gives you a Google Access Token.
            let token = result.credential.accessToken
            // The signed-in user info.
            let user = result.user
            vm.setUser(result.user)
            vm.$router.replace('home')
          },
          function(err) {
            // error codes "auth/user-not-found" "auth/wrong-password" "auth/account-exists-with-different-credential"
            console.log(err)
            vm.errorMessage = err.message
          }
        )
    }
  }
}
</script>
