<template>

  <div>
    <button v-if="isAuthenticated" @click="loadUser">LoadUser</button>
    <div v-html="user"></div>
  </div>

</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions({
      loadUser: 'user/loadUser'
    })
  },
  computed: {
    ...mapState({
      user: 'user/user'
    }),
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated'
    })
  }
}
</script>

<style scoped>

span {
  font-size: 20px;
}

</style>
