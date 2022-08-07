<template>
  <div class="edit-form">
    <todo-edit-title-input
      :title="item.title"
      @edit-title="editTitle"
    />
    <div class="edit-form-checkbox">
      <todo-edit-high-priority-input
        :high-priority="item.highPriority"
        @edit-high-priority="editHighPriority"
      />
      <todo-edit-done-input
        :done="item.done"
        @edit-done="editDone"
      />
    </div>
    <button @click="updateItem">更新</button>
  </div>
</template>

<script>
import TodoEditTitleInput from '@/components/TodoEditTitleInput'
import TodoEditHighPriorityInput from '@/components/TodoEditHighPriorityInput'
import TodoEditDoneInput from '@/components/TodoEditDoneInput'

export default {
  components: {
    TodoEditTitleInput,
    TodoEditHighPriorityInput,
    TodoEditDoneInput
  },

  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      editedItem: this.item
    }
  },

  methods: {
    updateItem () {
      this.$store.dispatch('updateItem', {
        index: this.index,
        editedItem: this.editedItem
      })
    },

    editTitle (editedTitle) {
      this.editedItem.title = editedTitle
    },

    editHighPriority (editedHighPriority) {
      this.editedItem.highPriority = editedHighPriority
    },

    editDone (editedDone) {
      this.editedItem.done = editedDone
    }
  }
}
</script>

<style scoped>
  .edit-form {
    display: flex;
  }
  .edit-form-checkbox {
    display: flex;
    margin-right: 5px;
  }

  .edit-form button {
    border: 1px solid black;
    border-radius: 3px;
    background-color: transparent;
    height: 30px;
  }
</style>
