<template>
  <div class="main-container">
    <h2>個別ページ</h2>
    <p>{{ item.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      todoItems: []
    }
  },

  created () {
    const todoItems = JSON.parse(localStorage.getItem('todoItems'))
    this.todoItems = todoItems || []
  },

  computed: {
    indexNum () {
      return Number(this.index)
    },

    item () {
      const index = Number(this.index)
      return this.todoItems[index]
    }
  }
}
</script>

<style scoped>
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
