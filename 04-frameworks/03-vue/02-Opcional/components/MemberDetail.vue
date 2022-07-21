<template>
  <div>
    <h2 class="title-page">Hello from Detail page</h2>
    <v-card elevation="3" loading outlined tile v-if="member">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            <strong>Name: </strong> {{ member.name }}
          </div>
          <v-list-item-title class="text-h5 mb-1">
            <strong>Company: </strong> {{ member.company }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <strong>Public repos: </strong> {{ member.public_repos }} /
            <strong>Followers: </strong> {{ member.followers }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar tile size="100" color="grey">
          <v-img :src="`${member.avatar_url}`" alt=""></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-card-actions>
        <a target="_black" :href="`${member.html_url}`">
          <strong>Github profile</strong>
        </a>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { RouteLocation } from 'vue-router'
import { Member, MemberDetail } from '@/types'
import { memberService } from '@/services/members'

export default {
  data: () => ({
    member: {} as Member,
  }),
  computed: {
    id(): string {
      return String((this.$route as RouteLocation).query.login)
    },
  },
  created() {
    memberService
      .getDetail(this.id)
      .then((member: MemberDetail | undefined) => {
        if (member) {
          this.member = member
        }
      })
  },
}
</script>

<style lang="scss" scoped>
.img-avatar {
  width: 150px;
  margin-right: 20px;
}
</style>
