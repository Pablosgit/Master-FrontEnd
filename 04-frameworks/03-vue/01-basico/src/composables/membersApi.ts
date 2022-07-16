import { ref, Ref } from 'vue'
import { Member } from '@/types'
import { memberService } from '@/services/members'

export const useMembersApi = async (
  company: string
): Promise<Ref<Member[]>> => {
  const list: Ref<Member[]> = ref([])
  list.value = await memberService.get(company)
  return list
}
