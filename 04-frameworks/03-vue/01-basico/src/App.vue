<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/HeaderPage.vue'
import Footer from '@/components/FooterPage.vue'
export default defineComponent({
  components: {
    Header,
    Footer,
  },
})
</script>
