<template>
  <v-footer>
    <p>Laboratorio Módulo 4.3 - Vue</p>
  </v-footer>
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

table thead {
  background-color: rgb(224, 224, 224);
}
</style>
