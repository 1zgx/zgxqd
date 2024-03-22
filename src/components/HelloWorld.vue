<template>
    <div class="hello">
      <h1 @click="getName()">{{ msg }}</h1>
    </div>
  </template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    methods:{
        async getName(){
          this.$http.get('/api/member/getToken').then(response => {
              // 请求成功处理
              console.log(response.data);
          }).catch(error => {
              // 请求失败处理
              console.log(error);
          });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
