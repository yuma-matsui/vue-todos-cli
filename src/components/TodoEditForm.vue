<template>
  <div class="edit-form">
    <todo-edit-title-input
      :title="item.title"
      @edit-title="editTitle"
    />
    <todo-edit-high-priority-input
      :high-priority="item.highPriority"
      @edit-high-priority="editHighPriority"
    />
    <todo-edit-done-input
      :done="item.done"
      @edit-done="editDone"
    />
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

  emits: ['update-item'],

  methods: {
    updateItem () {
      const editedItem = {
        index: this.index,
        item: this.editedItem
      }
      this.$emit('update-item', editedItem)
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
