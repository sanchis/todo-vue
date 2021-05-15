import { actionTree } from 'typed-vuex'
import { todoGetters as getters } from './store.getters'
import { todoState as state } from './store.state'
import { todoMutations as mutations } from './store.mutations'
import { Todo } from '@/models/todo.model'
import { todoStore } from '.'
import isNil from 'lodash/isNil'

export const todoActions = actionTree(
  { state, mutations, getters },
  {
    /**
     * Create a new todo
     *
     * @param {*} { commit }
     * @param {Todo} todo
     * @return {*}  {Promise<boolean>} return false if the todo with the same title already exist.
     */
    createTodo ({ commit }, todo:Todo): Promise<boolean> {
      const isUnique = validateUniqueTodo(todo)
      if (isUnique) {
        commit('addTodo', todo)
      }
      return Promise.resolve(isUnique)
    },
    /**
     * Change done/undone the current todo in the store
     *
     * @param {*} { commit }
     * @param {Todo} todo
     */
    toggleTodo ({ commit }, todo:Todo) {
      commit('toggleTodo', todo)
    },
    /**
     * Delete the todo in the store
     *
     * @param {*} { commit }
     * @param {Todo} todo
     */
    deleteTodo ({ commit }, todo:Todo) {
      const confirmResult = confirm(`Are you sure you want to delete todo:${todo.title}?`)
      if (confirmResult) {
        commit('deleteTodo', todo)
      }
    },
    /**
     * Edit a todo set the new todo in the store
     *
     * @param {*} { commit }
     * @param {UpdateTodoActionPayload} updateTodoPayload
     * @return {*}  {Promise<boolean>} return false if a todo with the same title already exist
     */
    editTodo ({ commit }, updateTodoPayload: UpdateTodoActionPayload): Promise<boolean> {
      const isUnique = validateUniqueTodo(updateTodoPayload.newTodo)
      if (isUnique) {
        commit('editTodo', updateTodoPayload)
      }
      return Promise.resolve(isUnique)
    },
    /**
     * Set the current filter in store to user later in the getter.
     *
     * @param {*} { commit }
     * @param {FilterTodoActionPayload} filter
     */
    filterTodos ({ commit }, filter: FilterTodoActionPayload) {
      commit('filterTodos', filter)
    }
  }
)

/**
 * Check if the current todo exist in the list.
 *
 * @param {Todo} todo the todo check if exist.
 * @return {boolean} true if no exist false if exist
 */
function validateUniqueTodo (todo:Todo):boolean {
  const exist = todoStore.getTodoByTitleExact(todo.title)
  if (!isNil(exist)) {
    alert(`🤔 Oops! Todo with title ${todo.title} already exist. Please try with another title.`)
    return false
  }
  return true
}

export interface UpdateTodoActionPayload{
  todo: Todo
  newTodo:Todo
}
export interface FilterTodoActionPayload{
  todoTitleFilter: string |null
  statusDone:boolean |null
}
