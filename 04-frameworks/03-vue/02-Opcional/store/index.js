
export const state = () => ({
  filter: 'Lemoncode'
})

export const mutations = {
  saveFilterCompany: (state, filter) => {
    state.filter = filter
  },
}

export const actions = {
  filterCompany: (
    { commit },
    filter
  ) => {
    commit('saveFilterCompany', filter)
  },
}

export const getters = {
  getFilterString: (state) => {
    return state.filter
  },
}

