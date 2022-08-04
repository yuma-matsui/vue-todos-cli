<template>
  <button @click="editItem">編集</button>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  emits: ['edit-item'],

  methods: {
    editItem () {
      this.$emit('edit-item', this.item)
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
    margin-right: 5px;
  }
</style>
