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
}
</style>

<script>
import Strava from 'strava-v3'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      athlete: ''
    }
  },
  methods: {
    ...mapActions(['setUser']),
    login() {
      const vm = this
      let args = {
        scope: 'view_private',
        approval_prompt: 'auto',
        response_type: 'code'
      }
      let url = Strava.oauth.getRequestAccessURL(args)
      console.log(url)
    }
    //   let url =
    //     'https://www.strava.com/oauth/authorize?client_id=25758&redirect_uri=http://localhost:8080/strava&scope=view_private&approval_prompt=auto&response_type=code'
    //   axios
    //     .get(url, {
    //       headers: {
    //         'Access-Control-Allow-Origin': '*'
    //       }
    //     })
    //     .then(function(res) {
    //       console.log(res)
    //     })
    // }
  },
  mounted() {
    const vm = this
    Strava.athlete.get(
      { access_token: 'c79b44fa6ac131930a626b10b42c10c9fd7f902a' },
      function(err, payload, limits) {
        if (!err) {
          console.log(payload)
        } else {
          console.log(err)
        }
      }
    )
  }
}
</script>
