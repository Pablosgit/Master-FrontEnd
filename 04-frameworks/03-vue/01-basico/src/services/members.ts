import { Member, MemberDetail } from '@/types'

//const url = './books.mock.json'
const urlDetail = 'https://api.github.com/users/'
const url = 'https://api.github.com/orgs/'

export const memberService = {
  async get(company: string): Promise<Member[]> {
    const members = fetch(url + company + '/members', {
      headers: {
        Accept: 'application/json',
      },
    }).then((res) => res.json())
    return members
  },
  async getDetail(urlId: string): Promise<MemberDetail> {
    const members = fetch(urlDetail + urlId, {
      headers: {
        Accept: 'application/json',
      },
    }).then((res) => res.json())
    return members
  },
  async getMember(id: string): Promise<Member | undefined> {
    if (!id) {
      throw new Error('id is required')
    }
    const member = this.get('').then((members) => {
      return members.find((member) => member.id == id)
    })
    return member
  },
}
