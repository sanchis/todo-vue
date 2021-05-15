import Vue from 'vue'
import Vuex from 'vuex'
import { useAccessor } from 'typed-vuex'
import { todoMutations } from './store.mutations'
import { todoState } from './store.state'
import { todoGetters } from './store.getters'
import { todoActions } from './store.actions'

Vue.use(Vuex)

const storeObj = {
  state: todoState,
  actions: todoActions,
  getters: todoGetters,
  mutations: todoMutations
}
const store = new Vuex.Store(storeObj)

export const todoStore = useAccessor(store, storeObj)

Vue.prototype.$todoStore = todoStore
export default store
