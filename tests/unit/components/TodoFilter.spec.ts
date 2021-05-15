import { createLocalVue, mount, Wrapper } from '@vue/test-utils'
import TodoFilter from '@/components/TodoFilter.vue'
import Vuex from 'vuex'
import { testStore } from '../test.utils'
import { Todo } from '@/models/todo.model'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TodoFilter.vue', () => {
  let component: Wrapper<TodoFilter>
  let inputText: Wrapper<Vue>
  let inputStatus: Wrapper<Vue>
  beforeEach(() => {
    component = mount(TodoFilter, { store: testStore() })
    component.vm.$todoStore.createTodo(new Todo('test2'))
    component.vm.$todoStore.createTodo(new Todo('test'))
    component.vm.$todoStore.createTodo(new Todo('test1'))
    component.vm.$todoStore.createTodo(new Todo('test1992', true))
    inputText = component.find('[name="title-filter-todo"]')
    inputStatus = component.find('[name="status-filter-todo"]')
  })

  it('todo should be filter text', async () => {
    await inputText.setValue('2')
    expect(component.vm.$todoStore.todoList.map(todo => todo.title)).toEqual(['test2', 'test1992'])
    await inputStatus.setValue(true)
    expect(component.vm.$todoStore.todoList.map(todo => todo.title)).toEqual(['test1992'])
  })
})
