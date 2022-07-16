import { createStore } from 'vuex'
import FilterModule from './Search'

export default createStore({
  modules: {
    FilterModule,
  },
})
