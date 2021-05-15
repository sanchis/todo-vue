import { createLocalVue, shallowMount } from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'
import TodoItem from '@/components/TodoItem.vue'
import Vuex, { Store } from 'vuex'
import { TodoState } from '@/store/store.state'
import { initialStateTest, testStore } from '../test.utils'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TodoList.vue', () => {
  it('should render todoList', () => {
    const component = shallowMount(TodoList, { store: testStore() })
    expect(component.findAllComponents(TodoItem).length).toEqual(initialStateTest.todoList.length)
    expect(component).toBeDefined()
  })
})
