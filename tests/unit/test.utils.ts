import { Todo } from '@/models/todo.model'
import { todoGetters } from '@/store/store.getters'
import { TodoState, todoState } from '@/store/store.state'
import Vuex from 'vuex'

export const initialStateTest = { ...todoState(), todoList: [new Todo('test'), new Todo('test2')] }
export const testStore = (state?:TodoState) => new Vuex.Store({
  state: state || initialStateTest,
  getters: todoGetters
})
