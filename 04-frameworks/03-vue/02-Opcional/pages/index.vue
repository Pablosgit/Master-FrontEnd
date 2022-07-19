<template>
  <div id="app">
    <Header />
    <div class="main-content">
      <MemberList />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Vuetify from 'vuetify'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
