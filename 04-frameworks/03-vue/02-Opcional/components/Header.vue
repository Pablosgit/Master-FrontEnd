<template>
  <header>
    <div className="header-top">
      <div className="titleModulo">
        <div className="name-master">Master Front End XI</div>
        <h1>Laboratorio Módulo 4.3 - Vue</h1>
      </div>
      <div className="name-author">Pablo Sánchez Garcia</div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Vuetify from 'vuetify'

export default Vue.extend({
  name: 'Header',
})
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

header .header-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
}

header .name-master {
  padding: 5px 10px 0;
}

header .name-author {
  padding-right: 10px;
}

header h1 {
  margin: 0;
  padding: 5px 10px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

@media screen and (max-width: 420px) {
  header h1 {
    font-size: 1em;
  }
}

@media screen and (max-width: 768px) {
  header .header-top {
    flex-direction: column;
    align-items: center;
  }

  header .header-top .titleModulo {
    text-align: center;
  }

  header h1 {
    font-size: 1.4em;
  }
}
</style>
