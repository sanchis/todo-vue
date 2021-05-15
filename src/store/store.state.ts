import { Todo } from '../models/todo.model'
import { FilterTodoActionPayload } from './store.actions'

export interface TodoState {
  todoList: Todo[];
  filter: FilterTodoActionPayload;
}

export const todoState = ():TodoState => ({
  todoList: [],
  filter: {
    statusDone: null,
    todoTitleFilter: null
  }
})
