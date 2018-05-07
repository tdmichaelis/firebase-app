<template>
  <div class="sign-up">
    <p>Let's create a new account!</p>
    <v-alert :value="errorMessage" outline color="error" icon="warning">
      {{ errorMessage }}
    </v-alert>
    <input type="text" placeholder="First Name" v-model="name.firstname"><br>
    <input type="text" placeholder="Last Name" v-model="name.lastname"><br>
    <input type="text" placeholder="Email" v-model="email"><br>
    <input type="password" placeholder="Password" v-model="password"><br>
    <v-btn @click="signUp">Sign Up</v-btn>
    <span>or <router-link to="/login">login</router-link></span>
  </div>
</template>

<style lang="stylus" scoped>
.sign-up {
  margin-top: 40px;

  input {
    margin: 10px 0;
    width: 250px;
    padding: 15px;
    border: solid 1px rgb(238, 238, 238);
  }

  button {
    margin-top: 10px;
    width: 100px;
    cursor: pointer;
    height: 30px;
    background-color: lightgray;
  }

  span {
    display: block;
    font-size: 13px;

    a {
      text-decoration: none;
    }
  }
}
</style>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'

export default {
  name: 'SignUp',
  data() {
    return {
      name: {
        firstname: '',
        lastname: ''
      },
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  computed: {
    displayName() {
      const vm = this
      return vm.name.firstname + ' ' + vm.name.lastname
    }
  },
  methods: {
    ...mapActions(['updateUser']),
    signUp() {
      const vm = this
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            vm.updateUser({
              displayName: vm.displayName,
              email: vm.email,
              uid: user.uid
            })
            vm.$router.push('/home')
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
