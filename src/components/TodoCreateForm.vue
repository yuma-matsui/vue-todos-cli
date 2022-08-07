<template>
  <div class="create-form-wrapper">
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
  </div>
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

  methods: {
    addTodoItem () {
      this.$store.dispatch('addTodoItem', { ...this.newTodoItem })
      this.resetItem()
    },

    resetItem () {
      this.newTodoItem.title = ''
      this.newTodoItem.highPriority = false
    }
  }
}
</script>

<style scoped>
  .create-form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .create-form-wrapper form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-block {
    margin-bottom: 8px;
  }

  label[for="title"] {
    margin-right: 5px;
    vertical-align: middle;
  }

  input[type="submit"] {
    border: 1px solid black;
    border-radius: 3px;
    background-color: transparent;
    width: 50px;
  }
</style>
