import { todoStore } from './store'

declare module 'vue/types/vue' {
  interface Vue {
    $todoStore: typeof todoStore
  }
}
