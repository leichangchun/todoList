<template>
  <div class="wrapper">
    <header class="app-header">
      <nav>
        <div class="logo">Tode</div>
        <ul>
          <router-link to="/home" tag="li">首页</router-link>
          <router-link to="/list" tag="li">计划列表</router-link>
        </ul>
      </nav>
    </header>
    <aside class="show-time">
      <ul>
        <li>已有时间</li>
        <li><span>{{time}}</span> 小时</li>
      </ul>
    </aside>

    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    computed: {
      time () {
        return this.$store.state.totalTime
      }
    }
  }
</script>

<style lang="scss">
.wrapper{
  width: 100%;
  height: 100%;
}
.app-header{
  height: 100px;
  margin-bottom: 20px;

  .logo{
    display: inline-block;
    width: 100px;
    font-size: 20px;
  }

  ul{
    display: inline-block;
    li{
      display: inline-block;
      list-style: none;
      width: 90px;
      text-align: center;
      cursor: pointer;
        background-color: rgba(226, 227, 236, 1);

      &:hover{
        background-color: rgba(200, 223, 201, 0.19);
      }
    }
  }
}

.show-time{
  float: left;
  top: 0;
  left: 0;
  background-color: #ccc;

  ul{

    li{
      width: 110px;
      list-style: none;
      height: 60px;
      line-height: 60px;
      margin-left: -30px;
      text-align: center;

      &:first-child{
        font-size: 24px;
      }
    }
  }
}

</style>
