<template>
  <ul>
    <transition-group
      enter-active-class="animate__animated animate__bounceInLeft"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <todo-item
        v-for="todo in todoList"
        v-bind:key="todo.id"
        :todo="todo"
      />
    </transition-group>
  </ul>
</template>
<script lang="ts">
import { mapGetters } from 'vuex'
import { Component, Vue } from 'vue-property-decorator'
import UiInput from './ui/UiInput.vue'
import TodoItem from './TodoItem.vue'

@Component({
  components: { UiInput, TodoItem },
  computed: {
    ...mapGetters(['todoList'])
  }
})
export default class TodoList extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  margin: 10px;
  height: calc(100vh - #{$create-todo-size});
}
</style>
