<template>
  <div class="brands">
    <v-layout justify-center align-center>
      <v-divider></v-divider>
      <div class="brands-title">Great Brands</div>
      <v-divider></v-divider>
    </v-layout>
    <v-layout row wrap justify-center align-center>
      <img v-for="logo in logos" :key="logo.src"
          :src="logo.src" :alt="logo.src"
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
    max-width: 150px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      logos: [
        { src: 'img/logos/alternative.png', text: 'Alternative' },
        { src: 'img/logos/gildan.png', text: 'Gildan' },
        { src: 'img/logos/district.png', text: 'District' },
        { src: 'img/logos/hanes.png', text: 'Hanes' },
        { src: 'img/logos/jerzees.png', text: 'Jerzees' },
        { src: 'img/logos/north-face.png', text: 'The North Face' },
        { src: 'img/logos/ogio.png', text: 'Ogio' },
        { src: 'img/logos/sport-tek.png', text: 'Sport Tek' },
        {
          src: 'img/logos/port-and-company.png',
          text: 'Port and Company'
        },
        { src: 'img/logos/nike.png', text: 'Nike' },
        {
          src: 'img/logos/fruit-of-the-loom.png',
          text: 'Fruit of the Loom'
        },
        { src: 'img/logos/anvil.png', text: 'Anvil' },
        {
          src: 'img/logos/district-made.png',
          text: 'District Made'
        }
      ]
    }
  }
}
</script>
