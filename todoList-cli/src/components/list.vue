<template lang="html">
  <article class="app-body-list">
    <div class="new_btn" @click="goAdd">创建</div>
    <div class="list-item" v-for="(item,index) in list">
      <p class="name">{{item.date}}</p>
      <p class="time">{{item.time}}</p>
      <p class="todo">{{item.desc}}</p>
      <p class="close" @click="close(item,index)">X</p>
    </div>
  </article>
</template>

<script>
  export default {
    computed: {
      list () {
        return this.$store.state.todoList
      }
    },
    methods: {
      goAdd: function () {
        this.$router.push('/add')
      },
      close: function (item, index) {
        this.$store.dispatch('desTime', {
          time: item.time
        })
        this.$store.dispatch('spliceList', {
          index: index
        })
      }
    }
  }
</script>

<style lang="scss">
  .app-body-list{
    margin-left: 300px;
    width: 60%;
    text-align: center;
    background-color: #cdcdcd;
    position: relative;

    .new_btn{
      position: absolute;
      height: 30px;
      left: 10px;
      top: -40px;
      width: 80px;
      text-align: center;
      background-color: rgba(88, 123, 193,0.6);
      border-radius: 5px;
      cursor: pointer;

      &:hover{
        background-color: rgba(88, 123, 193,1);
      }
    }

    .list-item{
      display: flex;
      position: relative;
      margin-top: 10px;

      p{
        margin: 0;
        padding: 0;
        display: inline-block;
        height: 60px;
        line-height: 60px;
      }
      .name{
        width: 100px;
        background-color: #dcdcdc;
      }
      .time{
        width: 100px;
      }
      .todo{
        flex: 1;
        background-color: #dcdcdc;
      }
      .close{
        width: 60px;
        cursor: pointer;
        background-color: rgba(182, 180, 153,0.6);

        &:hover{
          background-color: rgba(182, 180, 153,1);
        }
      }
    }
  }
</style>
