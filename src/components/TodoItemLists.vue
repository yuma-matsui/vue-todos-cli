<template>
  <div class="main-container">
    <h1>{{ mainTitle }}</h1>
    <div class="todo-items">
      <template v-if="existTodoItems">
        <ul>
          <li
            v-for="(item, index) in todoItems"
            :key="item.id"
          >
            <p :class="itemStatus(item)">
              {{ item.title }}
            </p>
            <todo-item-edit-button
              :item="item"
              @edit-item="editItem"
            />
            <todo-item-delete-button
              :index="index"
              @delete-item="deleteItem"
            />
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
import TodoItemEditButton from '@/components/TodoItemEditButton'
import TodoItemDeleteButton from '@/components/TodoItemDeleteButton'

export default {
  components: {
    TodoItemEditButton,
    TodoItemDeleteButton
  },

  props: {
    todoItems: {
      type: Array,
      required: true
    }
  },

  emits: ['edit-item', 'delete-item'],

  computed: {
    existTodoItems () {
      return this.todoItems.length > 0
    },

    mainTitle () {
      return this.todoItems.length > 0
        ? 'Your todo lists.'
        : 'Add your tasks.'
    }
  },

  methods: {
    itemStatus (item) {
      return {
        'high-priority': item.highPriority,
        done: item.done
      }
    },

    editItem (item) {
      this.$emit('edit-item', item)
    },

    deleteItem (index) {
      this.$emit('delete-item', index)
    }
  }
}
</script>

<style scoped>
  .high-priority {
    color: goldenrod;
    font-weight: bold;
  }

  .done {
    text-decoration: line-through;
  }
</style>
