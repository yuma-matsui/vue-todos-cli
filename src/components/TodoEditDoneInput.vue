<template>
  <div class="edit-input">
    <input
      type="checkbox"
      id="edited-done"
      v-model="editedDone"
    />
    <label for="edited-done">Done?</label>
  </div>
</template>

<script>
export default {
  props: {
    done: {
      type: Boolean,
      required: true
    }
  },

  emits: ['edit-done'],

  computed: {
    editedDone: {
      get () {
        return this.done
      },

      set (editedDone) {
        this.$emit('edit-done', editedDone)
      }
    }
  }
}
</script>
