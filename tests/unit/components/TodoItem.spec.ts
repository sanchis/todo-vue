import { createLocalVue, mount, shallowMount, Wrapper } from '@vue/test-utils'
import TodoItem from '@/components/TodoItem.vue'
import Vuex from 'vuex'
import { Todo } from '@/models/todo.model'
import { testStore } from '../test.utils'
import Vue from 'vue'

const localVue = createLocalVue()
localVue.use(Vuex)
jest.spyOn(window, 'alert').mockReturnValue()

describe('TodoItem.vue', () => {
  const todoToTest = new Todo('test')
  let component: Wrapper<TodoItem>
  beforeEach(() => {
    component = mount(TodoItem, { store: testStore(),
      propsData: {
        todo: todoToTest
      } }
    )
  })

  it('should render todoItem', () => {
    expect(component.find('.content-todo span').text()).toEqual(todoToTest.title)
    expect(component.find('[type="checkbox"]').attributes('checked')).toBeFalsy()
    expect(component).toBeDefined()
  })

  it('should be editable todoItem', async () => {
    const buttonEdit = component.find('.todo-button-edit')
    expect(buttonEdit.isVisible()).toBeTruthy()

    await buttonEdit.vm.$emit('click')
    const inputSubmit = component.find('[type="submit"]')
    const inputReset = component.find('[type="reset"]')
    expect(inputSubmit.isVisible()).toBeTruthy()
    expect(inputReset.isVisible()).toBeTruthy()
    expect(component.find('.todo-button-edit').exists()).toBeFalsy()

    const inputTextEdit = component.find('input[type="text"]')
    await inputTextEdit.setValue('testEdited')
    await inputTextEdit.trigger('change')
    await inputSubmit.vm.$emit('click')
    expect(component.find('.content-todo span').text()).toEqual('testEdited')
    expect(component.find('.content-todo span').text()).toEqual(component.vm.$props.todo.title)
  })

  it('todo should be checked', async () => {
    const inputCheckbox = component.find('input[type="checkbox"]')
    await inputCheckbox.trigger('click')
    expect(inputCheckbox.attributes('checked')).toBeTruthy()
    expect(inputCheckbox.attributes('checked') === 'checked').toEqual(component.vm.$props.todo.done)
  })

  it('todo should be deleted', async () => {
    window.confirm = jest.fn(() => true)
    const titleTodo = component.find('.content-todo span').text()
    const deleteButton = component.find('.todo-button-delete')
    await deleteButton.trigger('click')
    expect(component.vm.$todoStore.getTodoByTitleExact(titleTodo)).toBeUndefined()
  })
})
