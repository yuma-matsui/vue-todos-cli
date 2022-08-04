<template>
  <h2>Add New Task</h2>
  <form @submit.prevent>
    <div class="form-block">
      <label for="title">タイトル</label>
      <input
        type="text"
        id="title"
        placeholder="Input a todo title."
        v-model="newTodoItem.title"
      >
    </div>
    <div class="form-block">
      <input
        type="checkbox"
        id="high-priority"
        v-model="newTodoItem.highPriority"
      >
      <label for="high-priority">HighPriority</label>
    </div>
    <input
      type="submit"
      value="追加"
      @click="addTodoItem"
    >
  </form>
</template>

<script>
export default {
  data () {
    return {
      newTodoItem: {
        title: '',
        highPriority: false,
        editable: false,
        done: false
      }
    }
  },

  emits: ['add-todo-item'],

  methods: {
    addTodoItem () {
      this.$emit('add-todo-item', { ...this.newTodoItem })
      this.resetItem()
    },

    resetItem () {
      this.newTodoItem.title = ''
      this.newTodoItem.highPriority = false
    }
  }
}
</script>
