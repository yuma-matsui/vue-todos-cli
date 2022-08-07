<template>
  <todo-item-lists />
  <todo-create-form />
</template>

<script>
import TodoCreateForm from '@/components/TodoCreateForm'
import TodoItemLists from '@/components/TodoItemLists'

export default {
  components: {
    TodoCreateForm,
    TodoItemLists
  },

  computed: {
    todoItems () {
      return this.$store.state.todoItems
    }
  }
}
</script>
