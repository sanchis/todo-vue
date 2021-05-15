<template>
  <div>
    <ui-input
      type="text"
      v-model="todoFilterText" placeholder="Filter elements by title"
      v-on:input="filterTodos"
      name="title-filter-todo"
    />
    <ui-select
      name="status-filter-todo"
      v-model="statusDone"
      v-on:change="filterTodos"
      :items="items"
    />
  </div>
</template>

<script lang="ts">
import { todoStore } from '@/store'
import { Component, Vue } from 'vue-property-decorator'
import UiInput from './ui/UiInput.vue'
import UiSelect, { UiSelectItems } from './ui/UiSelect.vue'
import { mapGetters } from 'vuex'

@Component({
  components: { UiInput, UiSelect },
  computed: {
    ...mapGetters(['todoList'])
  }
})
export default class TodoFilter extends Vue {
  todoFilterText: string | null = null;
  statusDone: boolean | null = null;
  items: UiSelectItems[] = [
    { label: 'All', value: null },
    { label: 'Done', value: true },
    { label: 'Undone', value: false }
  ];

  /**
   * Filter the current todos in window with the current parameters set by the user.
   */
  filterTodos () {
    todoStore.filterTodos({
      todoTitleFilter: this.todoFilterText,
      statusDone: this.statusDone
    })
  }
}
</script>

<style scoped lang="scss">
div{
  background-color: white;
  padding: 20px;
  display: flex;
  justify-content: center;
  input{
    flex: 0.8 1 auto;
    margin: 0px 10px;
  }
}
</style>
