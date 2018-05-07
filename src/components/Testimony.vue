<template>
  <v-layout class="testimony" row align-center justify-center>
    <v-flex xs6 class="image">
      
    </v-flex>
    <v-flex xs6>
      <div>{{ content.text }}</div>
    </v-flex>
  </v-layout>
</template>

<style lang="stylus" scoped>
.testimony {
  height: 80vh;

  .image {
    background: gray;
    height: 100%;
    width: 100%;
  }
}
</style>

<script>
export default {
  props: ['content'],
  computed: {
    placeholderSize() {
      console.log(this.$vuetify)
      return this.content.height + 'x' + this.content.width
    }
  }
}
</script>
