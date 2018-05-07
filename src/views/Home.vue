<template>
  <div class="home">
    <div v-if="user">
      <services />
      <brands />
      <!-- <spotlight :content="{text: 'spotlight', height: '300', width: '300'}"/>
      <testimony :content="{text: 'testimony'}"/> -->
    </div>
    <div v-else>
      <v-progress-circular indeterminate 
          :size="150" :width="7">
      </v-progress-circular>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.home {
  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
}
</style>

<script>
import firebase from 'firebase'
import { mapActions, mapState } from 'vuex'
import Spotlight from '@/components/Spotlight'
import Testimony from '@/components/Testimony'
import Services from '@/components/Services'
import Brands from '@/components/Brands'

export default {
  name: 'home',
  components: {
    Spotlight,
    Testimony,
    Services,
    Brands
  },
  computed: {
    ...mapState(['user']),
    displayName() {
      const vm = this
      return vm.user.displayName || 'User'
    },
    profileImage() {
      const vm = this
      return vm.user.photoURL
    }
  }
}
</script>
