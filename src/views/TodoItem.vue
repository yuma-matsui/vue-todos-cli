<template>
  <p>{{ item.title }}</p>
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
