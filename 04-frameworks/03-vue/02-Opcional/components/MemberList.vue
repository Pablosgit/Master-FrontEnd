<template>
  <div>
    <h2 class="title-page">Hello from List page</h2>
    <div class="filter-search">
      <v-text-field label="Regular" v-model="filter.value"></v-text-field>
      <v-btn elevation="2" small @click="findCompany(filter.value)">
        Search
      </v-btn>
      <p><cite>Search by company: Lemoncode, Microsoft, apple...</cite></p>
    </div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Avatar</th>
            <th class="text-left">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="members in list"
            :key="members.id"
            :to="`/detail?login=${members.login}`"
          >
            <td>
              <v-avatar>
                <img :src="`${members.avatar_url}`" alt="Avatar" />
              </v-avatar>
            </td>
            <td>{{ members.login }}</td>
          </tr>
        </tbody>
      </template>
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </v-simple-table>

    <!-- <ul class="menber-list">
      <li v-for="members in list" :key="members.id">
        <NuxtLink :to="`/detail?login=${members.login}`">
          <img class="img-avatar" :src="`${members.avatar_url}`" alt="" />
          <span> {{ members.login }}</span>
        </NuxtLink>
      </li>
    </ul> -->
  </div>
</template>

<script lang="ts">
import { ref, Ref } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { useMembersApi } from '@/composables/membersApi'
import { Member } from '@/types'
export default {
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
}
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
