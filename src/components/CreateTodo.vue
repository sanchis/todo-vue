<template>
  <div class="container-form">
    <form v-on:submit.prevent="onSubmitCreateForm">
      <ui-input
        type="text"
        v-model.trim="newTodoTitle"
        placeholder="New Todo"
        name="title-todo"
      />
      <ui-button label="Cancel" type="reset" />
      <ui-button label="Save" type="submit"  :disabled="newTodoTitle === ''" />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { todoStore } from '@/store'
import { Todo } from '@/models/todo.model'
import isEmpty from 'lodash/isEmpty'
import UiInput from './ui/UiInput.vue'
import UiButton from './ui/UiButton.vue'

@Component({
  components: { UiInput, UiButton }
})
export default class CreateTodo extends Vue {
  private newTodoTitle: string = '';

  /**
   * Save the new todo with the new title set by user.
   */
  async onSubmitCreateForm () {
    if (!isEmpty(this.newTodoTitle)) {
      const success = await todoStore.createTodo(new Todo(this.newTodoTitle))
      if (success) {
        this.newTodoTitle = ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container-form {
  position: fixed;
  bottom: 0;
  height: $create-todo-size;
  padding: 20px;
  width: 100%;
  background-color:  $secondary-color;
  form {
    display: flex;
    justify-content: center;
  }
  input,
  button {
    margin: 0px 5px;
  }
}
</style>
