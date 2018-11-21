<template>
  <v-toolbar app dark fixed
      color="teal lighten-1"
      :clipped-left="$vuetify.breakpoint.mdAndUp">
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-toolbar-side-icon @click="$emit('toggle-drawer')"></v-toolbar-side-icon>
      <span class="hidden-sm-and-down">Michaelis Factor</span>
    </v-toolbar-title>
    <v-text-field flat solo-inverted
        prepend-icon="search"
        label="Search"
        class="hidden-sm-and-down">
    </v-text-field>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>
    <v-menu offset-y transition="slide-y-transition">
      <v-btn icon large slot="activator">
        <v-avatar size="32px">
          <img v-if="profileImage" :src="profileImage">
          <v-icon v-else>account_circle</v-icon>
        </v-avatar>
      </v-btn>
      <v-list v-if="user">
              <v-list-tile v-for="(item, i) in [{title: 'Sign out', click: logout}]" :key="i" @click="item.click()">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import firebase from 'firebase'

export default {
  computed: {
    ...mapState(['user']),
    profileImage() {
      const vm = this
      return vm.user ? vm.user.photoURL : ''
    }
  },
  methods: {
    ...mapActions(['clearUser']),
    logout() {
      const vm = this
      firebase
        .auth()
        .signOut()
        .then(() => {
          vm.clearUser()
          vm.$router.replace('login')
        })
    }
  }
}
</script>
