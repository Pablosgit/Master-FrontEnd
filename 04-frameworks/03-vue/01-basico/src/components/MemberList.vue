<template>
  <h2 class="title-page">Hello from List page</h2>
  <div class="filter-search">
    <input type="text" v-model="filter.value" />
    <button class="button" type="button" @click="findCompany(filter.value)">
      Search
    </button>
    <p><cite>Search by company: Lemoncode, Microsoft, apple...</cite></p>
  </div>
  <ul class="menber-list">
    <li v-for="members in list" :key="members.id">
      <router-link :to="`/detail/${members.login}`">
        <img class="img-avatar" :src="`${members.avatar_url}`" alt="" />
        <span> {{ members.login }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { useMembersApi } from '@/composables/membersApi'
import { Member } from '@/types'
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    list: Member[]
  }
}
export default defineComponent({
  data: () => ({
    list: {} as Member,
  }),
  computed: {
    ...mapGetters({
      getFilterString: 'getFilterString',
    }),
  },
  methods: {
    ...mapActions(['filterCompany']),
    async findCompany(company: string) {
      this.filterCompany(company)
      this.list = await useMembersApi(company)
    },
  },
  async created() {
    const filteredCompany: Ref<string> = ref(this.getFilterString)
    this.filter = filteredCompany
    this.list = await useMembersApi(this.filter.value)
  },
  // async setup() {
  //   //const filteredCompany: Ref<string> = ref(getFilterString)
  //   //const list = await useMembersApi(filteredCompany.value)
  //   const findCompany = async (company: string) => {
  //     list.value = (await useMembersApi(company)).value
  //   }
  //   return {
  //     list,
  //     filteredCompany,
  //     findCompany,
  //   }
  // },
})
</script>

<style lang="scss" scoped>
.img-avatar {
  width: 50px;
  border-radius: 50%;
  margin-right: 20px;
}
.filter-search input {
  margin-right: 10px;
}
</style>
