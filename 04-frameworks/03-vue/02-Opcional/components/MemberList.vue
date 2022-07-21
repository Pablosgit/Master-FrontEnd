<template>
  <div>
    <h2 class="title-page">Hello from List page</h2>
    <div class="filter-search">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field solo v-model="filter.value"></v-text-field>
          </v-col>
          <v-col>
            <v-btn elevation="2" small @click="findCompany(filter.value)">
              Search
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <p><cite>Search by company: Lemoncode, Microsoft, apple...</cite></p>
    <v-simple-table class="member-list">
      <template v-slot:default>
        <tbody>
          <tr v-for="members in list" :key="members.id">
            <td>
              <NuxtLink :to="`/detail?login=${members.login}`">
                <v-avatar class="img-avatar">
                  <img :src="`${members.avatar_url}`" alt="Avatar" />
                </v-avatar>
                {{ members.login }}
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-pagination
      v-model="pageIni"
      :length="pageCount"
      @input="handlePageChange"
    ></v-pagination>
  </div>
</template>

<script lang="ts">
import { ref, Ref } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { useMembersApi } from '@/composables/membersApi'
import { Member } from '@/types'
export default {
  data() {
    return {
      list: {} as Member,
      listPage: {} as Member,
      pageIni: 1,
      page: 0,
      pageCount: 0,
      itemsPerPage: 5,
    }
  },
  computed: {
    ...mapGetters({
      getFilterString: 'getFilterString',
    }),
  },
  methods: {
    ...mapActions(['filterCompany']),
    async findCompany(company: string) {
      this.filterCompany(company)
      this.page = 0
      this.pageIni = 1
      this.list = await this.calcPagList(company)
      this.pageCount = this.calcPagination()
    },
    async handlePageChange(value) {
      this.page = value - 1
      this.list = await this.calcPagList(this.filter.value)
    },
    async calcPagList(param) {
      this.listPage = await useMembersApi(param)
      return this.listPage.slice(
        this.page * this.itemsPerPage,
        this.page * this.itemsPerPage + this.itemsPerPage
      )
    },
    calcPagination() {
      const pageNum = this.listPage.length / this.itemsPerPage
      return Number.isInteger(pageNum) ? pageNum : Math.trunc(pageNum) + 1
    },
  },
  async created() {
    const filteredCompany: Ref<string> = ref(this.getFilterString)
    this.filter = filteredCompany
    this.list = await this.calcPagList(this.filter.value)
    this.pageCount = this.calcPagination()
  },
}
</script>

<style lang="scss" scoped>
.img-avatar {
  margin-right: 20px;
}
.v-pagination__item--active {
  background-color: #34495e;
}
</style>
