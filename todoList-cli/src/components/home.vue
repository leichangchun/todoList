<template>
  <article class="app-body-home">
    <h1>任务追踪</h1>
    <p><router-link to="/add">创建一个任务.</router-link></p>
  </article>
</template>

<script>
  export default{
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .app-body-home{
    margin-left: 300px;
    width: 60%;
    height: 200px;
    text-align: center;
    background-color: #cdcdcd;
    padding-top: 40px;
  }
</style>
