<template>
  <v-layout class="spotlight" column justify-center align-center>
    <img :src="'http://via.placeholder.com/' + placeholderSize">
    <div>{{ content.text }}</div>
  </v-layout>
</template>

<style lang="stylus" scoped>
</style>

<script>
export default {
  props: ['content'],
  computed: {
    placeholderSize() {
      return this.content.height + 'x' + this.content.width
    }
  }
}
</script>
