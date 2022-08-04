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
