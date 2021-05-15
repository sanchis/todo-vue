import { Todo } from '@/models/todo.model'
import { mutationTree } from 'typed-vuex'
import { FilterTodoActionPayload, UpdateTodoActionPayload } from './store.actions'
import { todoState } from './store.state'

export const todoMutations = mutationTree(todoState, {
  /**
   * Add a new todo in the state.
   *
   * @param {*} state
   * @param {Todo} todo
   */
  addTodo (state, todo: Todo) {
    state.todoList.push(todo)
  },
  /**
   * Update the status for the current todo
   *
   * @param {*} state
   * @param {Todo} todo
   */
  toggleTodo (state, todo: Todo) {
    todo.toggle()
  },
  /**
   * Find the todo and delete it in the store
   *
   * @param {*} state
   * @param {Todo} todo
   */
  deleteTodo (state, todo: Todo) {
    state.todoList.splice(state.todoList.indexOf(todo), 1)
  },
  /**
   * Update the properties for the new and old todo for update the values.
   *
   * @param {*} state
   * @param {UpdateTodoActionPayload} updateTodoPayload
   */
  editTodo (state, updateTodoPayload: UpdateTodoActionPayload) {
    Object.assign(updateTodoPayload.todo, updateTodoPayload.newTodo)
  },
  /**
   * Set the filter in the state
   * @param state current state
   * @param filter the filter to be set.
   */
  filterTodos (state, filter: FilterTodoActionPayload) {
    state.filter = filter
  }
})
