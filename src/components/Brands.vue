<template>
  <div class="brands">
    <v-layout justify-center align-center>
      <v-divider></v-divider>
      <div class="brands-title">Great Brands</div>
      <v-divider></v-divider>
    </v-layout>
    <v-layout row wrap justify-center align-center>
      <img src="http://via.placeholder.com/200x100" alt="" 
          v-for="(logo, idx) in logos" :key="idx"
          class="logo">
    </v-layout>
  </div>
</template>

<style lang="stylus" scoped>
.brands {
  .brands-title {
    padding: 10px;
    font-size: 30px;
    font-family: Roboto, sans-serif;
  }

  .logo {
    margin: 10px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      logos: [1, 2, 3, 4, 5]
    }
  }
}
</script>
