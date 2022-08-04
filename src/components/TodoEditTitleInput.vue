<template>
  <div class="edit-input">
    <label for="edited-title">タイトル</label>
    <input
      type="text"
      id="edited-title"
      placeholder="Input a todo title."
      v-model="editedTitle"
    >
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },

  emits: ['edit-title'],

  computed: {
    editedTitle: {
      get () {
        return this.title
      },

      set (editedTitle) {
        this.$emit('edit-title', editedTitle)
      }
    }
  }
}
</script>
