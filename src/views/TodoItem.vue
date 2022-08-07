<template>
  <div class="main-container">
    <h2>個別ページ</h2>
    <p>{{ todoItem(Number(index)).title }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    index: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters([
      'todoItem'
    ])
  }
}
</script>

<style scoped>
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
