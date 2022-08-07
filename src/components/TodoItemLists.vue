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
            <template v-if="item.editable">
              <todo-edit-form
                :item="item"
                :index="index"
              />
            </template>
            <template v-else>
              <p>
                <router-link
                  :to="todoItemLink(index)"
                  :class="itemStatus(item)"
                >
                  {{ item.title }}
                </router-link>
              </p>
              <todo-item-edit-button
                :index="index"
              />
              <todo-item-delete-button
                :index="index"
              />
            </template>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
import TodoItemEditButton from '@/components/TodoItemEditButton'
import TodoItemDeleteButton from '@/components/TodoItemDeleteButton'
import TodoEditForm from '@/components/TodoEditForm'
import { mapGetters } from 'vuex'

export default {
  components: {
    TodoItemEditButton,
    TodoItemDeleteButton,
    TodoEditForm
  },

  computed: {
    todoItems () {
      return this.$store.state.todoItems
    },

    todoItemLink () {
      return (index) => {
        return `todos/${index}`
      }
    },

    ...mapGetters([
      'existTodoItems',
      'mainTitle'
    ])
  },

  methods: {
    itemStatus (item) {
      return {
        'high-priority': item.highPriority,
        done: item.done
      }
    }
  }
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todo-items ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-items ul li {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.todo-items ul li p {
  margin-right: 8px;
}
  a.high-priority {
    color: goldenrod;
    font-weight: bold;
  }

  a.done {
    text-decoration: line-through;
  }

  a {
    color: black;
    text-decoration: none;
  }
</style>
