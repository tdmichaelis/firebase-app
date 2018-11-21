<template>
  <v-layout v-bind="layoutDir" justify-center class="services" :class="{'align-start': $vuetify.breakpoint.smAndUp,
                                                                        'align-center': $vuetify.breakpoint.xsOnly}">
    <v-layout column justify-center align-center class="flex xs12 md4 service">
      <img src="@/assets/screenprinting.png" />
      <div class="service-title">Screen Printing</div>
      <div>Text here</div>
    </v-layout>
    <v-layout column justify-center align-center class="flex xs12 md4 service">
      <img src="@/assets/embroidery.png" />
      <div class="service-title">Embroidery</div>
      <div>Direct to garment printing (DTG) is a process of printing on textiles using specialized ink jet technology. DTG printers hold the garment in a fixed position, and use specialty inks that are applied to the textile directly by the print head and are absorbed by the garment's fibers; these features prevent the distortion seen with some other textile printing techniques.</div>
    </v-layout>
    <v-layout column justify-center align-center class="flex xs12 md4 service">
      <img src="@/assets/dtg.png" />
      <div class="service-title">DTG</div>
      <div>Direct to garment printing (DTG) is a process of printing on textiles using specialized ink jet technology. DTG printers hold the garment in a fixed position, and use specialty inks that are applied to the textile directly by the print head and are absorbed by the garment's fibers; these features prevent the distortion seen with some other textile printing techniques.</div>
    </v-layout>
  </v-layout>
</template>

<style lang="stylus" scoped>
.service {
  margin: 20px;

  img {
    width: 100px;
  }

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

