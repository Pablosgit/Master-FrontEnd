export interface Member {
  id: string
  login: string
  avatar_url: string
  url: string
}

export interface MemberDetail {
  id: string
  login: string
  avatar_url: string
  name: string
  company: string
  public_repos: number
  followers: number
  html_url: string
  url: string
}
