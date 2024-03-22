<template>
    <div>
    <h1>临时链接生成示例</h1>
    <p>临时链接: {{ temporaryLink }}</p>
  </div>
  <ToDoItem></ToDoItem>

</template>


<script>
import ToDoItem from "./components/ToDoItem.vue";

export default {
    name: 'App',
    components: {
        ToDoItem,
    },
    data() {
    return {
      temporaryLink: ''
    };
  },
  mounted() {
    this.generateTemporaryLink();
  },
  methods: {
    generateTemporaryLink() {
      // 生成临时链接的逻辑
      const randomString = Math.random().toString(36).substring(7);
      this.temporaryLink = `https://example.com/${randomString}`;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
