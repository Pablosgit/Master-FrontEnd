
export interface LocationEntityApi {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: string
  },
  results:
    {
      id: number,
      name: string,
      type: string,
      dimension: string,
      residents: string[],
      url: string,
      created: string,
    }
}


export interface LocationEntityApi2 {
    id: number,
    name: string,
    type: string,
    dimension: string,
    residents: string[],
    url: string,
    created: string,
}
