<template>
  <div class="edit-input">
    <input
      type="checkbox"
      id="edited-high-priority"
      v-model="editedHighPriority"
    />
    <label for="edited-high-priority">HighPriority</label>
  </div>
</template>

<script>
export default {
  props: {
    highPriority: {
      type: Boolean,
      required: true
    }
  },

  emits: ['edit-high-priority'],

  computed: {
    editedHighPriority: {
      get () {
        return this.highPriority
      },

      set (editedHighPriority) {
        this.$emit('edit-high-priority', editedHighPriority)
      }
    }
  }
}
</script>
