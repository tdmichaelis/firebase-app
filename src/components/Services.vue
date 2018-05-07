<template>
  <v-layout v-bind="layoutDir" justify-center align-center class="services">
    <v-layout column justify-center align-center class="service">
      <v-icon :size="75">star_half</v-icon>
      <div class="service-title">Screen Printing</div>
      <div>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
    </v-layout>
    <v-layout column justify-center align-center class="service">
      <v-icon :size="75">rounded_corner</v-icon>
      <div class="service-title">Embroidery</div>
      <div>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
    </v-layout>
    <v-layout column justify-center align-center class="service">
      <v-icon :size="75">local_printshop</v-icon>
      <div class="service-title">DTG</div>
      <div>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
    </v-layout>
  </v-layout>
</template>

<style lang="stylus" scoped>
.service {
  margin: 20px;

  .service-title {
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 24px;
    color: darkgray;
  }
}
</style>

<script>
export default {
  computed: {
    layoutDir() {
      const vm = this
      if (vm.$vuetify.breakpoint.xs) {
        return { column: true }
      } else {
        return { row: true }
      }
    }
  }
}
</script>

