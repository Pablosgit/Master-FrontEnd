<template>
  <footer>
    <p>Laboratorio Módulo 4.3 - Vue</p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import Vuetify from 'vuetify'

export default Vue.extend({
  name: 'Footer',
})
</script>

<style lang="scss" scoped>
footer {
  padding: 10px;
  text-align: center;
  background-color: #34495e;
  color: white;
}

footer p {
  margin: 0px;
  font-size: 80%;
}
</style>
