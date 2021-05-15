<template>
  <main>
    <todo-filter/>
    <todo-list/>
    <create-todo/>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CreateTodo from '@/components/CreateTodo.vue'
import TodoFilter from '@/components/TodoFilter.vue'
import TodoList from '@/components/TodoList.vue'

@Component({
  components: {
    CreateTodo, TodoList, TodoFilter
  }
})
export default class Home extends Vue {

}
</script>
