<template>
  <div class="main-content">
    <div v-if="error">Error:(</div>
    <Suspense>
      <template #default>
        <MemberList />
      </template>
      <template #loading>
        <div class="loading">Loading ...</div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref, Ref } from 'vue'
import MemberList from '@/components/MemberList.vue'

export default defineComponent({
  name: 'HomeView',
  components: { MemberList },
  setup() {
    const error: Ref<unknown> = ref()
    onErrorCaptured((err) => {
      console.log(err)
      error.value = err
    })
    return {
      error,
    }
  },
})
</script>
