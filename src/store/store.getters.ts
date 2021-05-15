import { Todo } from '@/models/todo.model'
import { getterTree } from 'typed-vuex'
import { FilterTodoActionPayload } from './store.actions'
import { todoState } from './store.state'
import isEmpty from 'lodash/isEmpty'
import isNil from 'lodash/isNil'

export const todoGetters = getterTree(todoState, {
  todoList: (state) => applyFilterTodos(state.todoList, state.filter),
  getTodoByTitleExact: (state) => (title:string) => state.todoList.find(todo => todo.title === title)
})

export function applyFilterTodos (todos:Todo[], filter:FilterTodoActionPayload) {
  if (!isEmpty(filter.todoTitleFilter)) {
    todos = todos.filter(todo => todo.title.toLowerCase().includes(filter.todoTitleFilter || ''))
  }

  if (!isNil(filter.statusDone)) {
    todos = todos.filter(todo => todo.done === filter.statusDone)
  }
  return todos
}
