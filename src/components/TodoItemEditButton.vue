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
