<template>
  <div>
    <router-view />
    <div class="router-link-container">
      <div class="router-links">
        <router-link to="/">Home</router-link>
        <router-link to="/todos">TodoApp</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .router-link-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
  }

  .router-links a {
    margin-right: 5px;
  }
</style>
