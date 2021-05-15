import { createLocalVue, mount, shallowMount, Wrapper } from '@vue/test-utils'
import CreateTodo from '@/components/CreateTodo.vue'
import Vuex, { Store } from 'vuex'
import { TodoState } from '@/store/store.state'
import { initialStateTest, testStore } from '../test.utils'
import { Todo } from '@/models/todo.model'
import Vue from 'vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('CreateTodo.vue', () => {
  let component: Wrapper<CreateTodo>
  beforeEach(() => {
    component = mount(CreateTodo, { store: testStore() })
  })

  it('should render createTodo', () => {
    const inputTitleTodo = component.find('[name="title-todo"]')
    const buttonSubmitForm = component.find('[type="submit"]')
    const buttonResetForm = component.find('[type="reset"]')

    expect(inputTitleTodo.isVisible()).toBeTruthy()
    expect(buttonSubmitForm.isVisible()).toBeTruthy()
    expect(buttonResetForm.isVisible()).toBeTruthy()
    expect(component).toBeDefined()
  })

  it('should createTodo success', async () => {
    const testDummy = new Todo('todo dummy')
    const inputTitleTodo = component.find('input[name="title-todo"]')
    const inputTitleTodoRawElement = inputTitleTodo.element as HTMLInputElement
    const formTodo = component.find('form')

    await inputTitleTodo.setValue(testDummy.title)
    await formTodo.trigger('submit')
    await Vue.nextTick()

    expect(inputTitleTodoRawElement.value).toBe('')
    expect(component.vm.$todoStore.getTodoByTitleExact(testDummy.title)).toHaveProperty('title', testDummy.title)
  })

  it('should createTodo on empty text fail', async () => {
    const previousQuantity = component.vm.$todoStore.todoList.length
    const formTodo = component.find('form')
    await formTodo.trigger('submit')
    await Vue.nextTick()

    expect(component.vm.$todoStore.todoList.length).toBe(previousQuantity)
  })

  it('should createTodo repeated fail', async () => {
    window.alert = jest.fn()
    const dummyTodo = new Todo('test')
    component.vm.$todoStore.createTodo(dummyTodo)
    const previousQuantity = component.vm.$todoStore.todoList.length
    const inputTitleTodo = component.find('input[name="title-todo"]')
    const inputTitleTodoRawElement = inputTitleTodo.element as HTMLInputElement
    const formTodo = component.find('form')
    await inputTitleTodo.setValue(dummyTodo.title)
    await formTodo.trigger('submit')
    await Vue.nextTick()

    expect(inputTitleTodoRawElement.value).toBe(dummyTodo.title)
    expect(component.vm.$todoStore.todoList.length).toBe(previousQuantity)
  })
})
