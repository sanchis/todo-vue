<template>
  <li class="item-wrapper">
    <ui-input
      type="checkbox"
      v-bind:checked="todo.done"
      v-on:click="toggleValue(todo)"
    />

    <div class="content-todo">
      <form
        v-on:submit.prevent="saveEdit"
        v-if="todoEditing && todoEditing.id === todo.id"
      >
        <ui-input
          type="text"
          name="title-editing"
          v-model="todoEditing.title"
        />
        <ui-button
          label="Cancel"
          type="reset"
          v-on:click="todoEditing = null"
        />
        <ui-button label="Save" type="submit" v-on:click="saveEdit"  :disabled="!todoEditing.title" />
      </form>
      <span v-if="!todoEditing">{{ todo.title }}</span>
      <ui-button
        displayType="icon"
        v-if="!todoEditing"
        class="todo-button-edit"
        v-on:click="editTodo(todo)"
        label="✏️"
      />
    </div>

    <ui-button
      class="todo-button-delete"
      displayType="icon"
      v-on:click="deleteTodo(todo)"
      label="🗑️"
    />
  </li>
</template>
<script lang="ts">
import { todoStore } from '@/store'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Todo } from '../models/todo.model'
import isNil from 'lodash/isNil'
import UiInput from './ui/UiInput.vue'
import UiButton from './ui/UiButton.vue'

@Component({
  components: { UiInput, UiButton }
})
export default class TodoItem extends Vue {
  @Prop({ type: Object, required: true }) todo!: Todo;
  todoEditing: Todo | null = null;

  /**
   * Change to done/undone the current todo in window
   */
  toggleValue () {
    todoStore.toggleTodo(this.todo)
  }

  /**
   * Delete the current todo item in view
   */
  deleteTodo () {
    todoStore.deleteTodo(this.todo)
  }

  /**
   * Start the edition for the current todo.
   * Create a copy of the current object to start editing.
   */
  editTodo () {
    this.todoEditing = Object.assign({}, this.todo)
  }

  /**
   * Save the current editing todo.
   */
  saveEdit () {
    if (!isNil(this.todoEditing)) {
      todoStore.editTodo({
        newTodo: this.todoEditing,
        todo: this.todo
      })
    }
    this.todoEditing = null
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item-wrapper {
  display: flex;
  flex: 2 1 auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 10px 0;
  border-radius: $radius;
  padding: 10px 10px;
  background-color: $input-bck;

  .content-todo {
    flex: 1 1 0;
    display: flex;
    text-align: start;
    text-overflow: ellipsis;
    overflow: hidden;

    form button {
      height: 100%;
      margin: 0px 2px;
      background-color: $secondary-color;
    }

    span {
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .todo-button-delete {
    flex: 0 1 auto;
  }

  input[type="checkbox"] {
    flex: 0 1 auto;

    width: 40px;
    height: 40px;
    background: #ddd;
    appearance: none;

    border-radius: 100%;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
    &:checked {
      background-color: $primary-color;
      border: 6px solid $secondary-color;
    }
  }
}
</style>
