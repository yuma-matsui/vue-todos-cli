<template>
  <button @click="deleteItem">削除</button>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  },

  emits: ['delete-item'],

  methods: {
    deleteItem () {
      this.$emit('delete-item', this.index)
    }
  }
}
</script>

<style scoped>
  button {
    display: inline-block;
    border: solid 1px black;
    border-radius: 3px;
    background-color: transparent;
    height: 30px;
  }
</style>
