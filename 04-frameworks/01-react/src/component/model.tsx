export interface MemberEntity {
    id: string;
    login: string;
    avatar_url: string;
  }
  
export interface MemberDetailEntity {
    id: string;
    login: string;
    name: string;
    company: string;
    bio: string;
    avatar_url: string;
  }


  export interface MemberEntityRyM {
    id: string;
    name: string;
    image: string;
    species: string;
  }

  export interface MemberDetailEntityRyM {
    id: string;
    status: string;
    name: string;
    species: string;
    gender: string;
    image: string;
  }