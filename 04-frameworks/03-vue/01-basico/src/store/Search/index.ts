import { ActionContext } from 'vuex'

interface FilterState {
  filter: string
}

const state = {
  filter: 'Lemoncode',
}

const mutations = {
  saveFilterCompany: (state: FilterState, filter: string) => {
    state.filter = filter
  },
}

const actions = {
  filterCompany: (
    { commit }: ActionContext<FilterState, unknown>,
    filter: string
  ) => {
    commit('saveFilterCompany', filter)
  },
}

const getters = {
  getFilterString: () => {
    return state.filter
  },
}

const FilterModule = {
  namespace: true,
  state,
  mutations,
  actions,
  getters,
}

export default FilterModule
