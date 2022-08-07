import { createStore } from 'vuex'

export default createStore({
  state: {
    todoItems: JSON.parse(localStorage.getItem('todoItems')) || []
  },

  getters: {
    existTodoItems (state) {
      return state.todoItems.length > 0
    },

    mainTitle (_, getters) {
      return getters.existTodoItems
        ? 'Your todo lists.'
        : 'Add your tasks.'
    },

    todoItem (state) {
      return (index) => {
        return state.todoItems.at(index)
      }
    }
  },

  mutations: {
    addTodoItem (state, newTodoItem) {
      state.todoItems.push(newTodoItem)
    },

    saveTodoItems (state) {
      localStorage.clear()
      const todoItemsJSON = JSON.stringify(state.todoItems)
      localStorage.setItem('todoItems', todoItemsJSON)
    },

    editItem (state, index) {
      state.todoItems.at(index).editable = true
    },

    updateItem (state, { index, editedItem }) {
      editedItem.editable = false
      state.todoItems[index] = editedItem
    },

    deleteItem (state, index) {
      state.todoItems.splice(index, 1)
    }
  },

  actions: {
    addTodoItem ({ commit }, newTodoItem) {
      commit('addTodoItem', newTodoItem)
      commit('saveTodoItems')
    },

    editItem ({ commit }, index) {
      commit('editItem', index)
    },

    updateItem ({ commit }, { index, editedItem }) {
      commit('updateItem', { index, editedItem })
      commit('saveTodoItems')
    },

    deleteItem ({ commit }, index) {
      commit('deleteItem', index)
      commit('saveTodoItems')
    }
  },

  modules: {}
})
