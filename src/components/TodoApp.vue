<template>
  <todo-item-lists
    :todoItems="todoItems"
    @edit-item="editItem"
    @delete-item="deleteItem"
    @update-item="updateItem"
  />
  <todo-create-form
    @add-todo-item="addTodoItem"
  />
</template>

<script>
import TodoCreateForm from '@/components/TodoCreateForm'
import TodoItemLists from '@/components/TodoItemLists'

export default {
  components: {
    TodoCreateForm,
    TodoItemLists
  },

  data () {
    return {
      todoItems: [],
      localStorageKey: 'todoItems'
    }
  },

  created () {
    const todoItems = JSON.parse(localStorage.getItem(this.localStorageKey))
    this.todoItems = todoItems || []
  },

  methods: {
    addTodoItem (newItem) {
      this.todoItems.push(newItem)
      this.saveTodoItems()
    },

    saveTodoItems () {
      localStorage.clear()
      const todoItemsJson = JSON.stringify(this.todoItems)
      localStorage.setItem(this.localStorageKey, todoItemsJson)
    },

    editItem (item) {
      item.editable = true
    },

    updateItem ({ index, item }) {
      item.editable = false
      this.todoItems[index] = item
      this.saveTodoItems()
    },

    deleteItem (index) {
      this.todoItems.splice(index, 1)
      this.saveTodoItems()
    }
  }

}
</script>
