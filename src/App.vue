<template>
<div>
  <v-app id="inspire">
    <side-nav :drawer="drawer" />
    <main-toolbar :drawer="drawer" @toggle-drawer="toggleDrawer"/>
    <v-content id="app">
      <router-view></router-view>
    </v-content>
  </v-app>
</div>
</template>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#header {
  margin-bottom: 10px;
}
</style>

<script>
import SideNav from '@/components/SideNav'
import MainToolbar from '@/components/MainToolbar'

export default {
  data() {
    return {
      drawer: false
    }
  },
  components: { SideNav, MainToolbar },
  methods: {
    toggleDrawer() {
      console.log('toggle', this.drawer)
      this.drawer = !this.drawer
    }
  }
}
</script>
