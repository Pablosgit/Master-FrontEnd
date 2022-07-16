<template>
  <div class="main-content">
    <h2 class="title-page">Hello from Detail page</h2>
    <div class="card" v-if="member">
      <div class="avatar">
        <img class="img-avatar" :src="`${member.avatar_url}`" alt="" />
      </div>
      <div class="info">
        <p><strong>Name: </strong> {{ member.name }}</p>
        <p><strong>Company: </strong> {{ member.company }}</p>
        <p><strong>Public repos: </strong> {{ member.public_repos }}</p>
        <p><strong>Followers: </strong> {{ member.followers }}</p>
        <p>
          <a target="_black" :href="`${member.html_url}`">
            <strong>Github profile</strong>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteLocation } from 'vue-router'
import { Member, MemberDetail } from '@/types'
import { memberService } from '@/services/members'

export default defineComponent({
  data: () => ({
    member: {} as Member,
  }),
  computed: {
    id(): string {
      return String((this.$route as RouteLocation).params.login)
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
})
</script>

<style lang="scss" scoped>
.img-avatar {
  width: 150px;
  margin-right: 20px;
}
</style>
