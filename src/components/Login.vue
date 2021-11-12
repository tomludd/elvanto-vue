<template>

    <a v-if="access_token == null" :href="loginUrl">Login</a>

    <div v-if="access_token != null" >
      <span>AccessToken: </span>
      <span v-text="access_token"></span>
    </div>

</template>

<script>
import queryString from 'query-string'
import { mapState } from 'vuex'

const authSettings = {
  type: "user_agent",
  client_id: "93227",
  redirect_uri: "https://localhost:8080/login",
  scope: "ManagePeople,ManageGroups,ManageServices,ManageSongs,ManageCalendar,ManageFinancials,AdministerAccount"
}

export default {
  name: 'App',
  computed: {
    loginUrl(){
        return "https://api.elvanto.com/oauth?" + queryString.stringify(authSettings)
    },
    ...mapState({
      access_token: state => state.auth.access_token
    })
  }
}
</script>

<style scoped>

span {
  font-size: 20px;
}

</style>
