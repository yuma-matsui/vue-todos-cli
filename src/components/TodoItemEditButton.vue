<template>
  <button @click="editItem(index)">編集</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  },

  methods: {
    ...mapActions([
      'editItem'
    ])
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
