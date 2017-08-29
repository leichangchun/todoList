<template lang="html">
  <article class="app-body-add">
    <div class="item"><label for="date">日期 ： </label><input type="text" name="date" value="" id="date" v-model="inputDate"></div>
    <div class="item"><label for="time">耗时 ： </label><input type="text" name="time" value="" id="time" v-model.number="inputTime"></div>
    <div class="item"><label for="desc">描述 ： </label><input type="text" name="desc" value="" id="desc" v-model="inputDesc"></div>
    <div class="btn" @click="save">保存</div>
  </article>
</template>

<script>
export default {
  data: function () {
    return {
      inputDate: '',
      inputTime: null,
      inputDesc: ''
    }
  },
  computed: {

  },
  methods: {
    save: function () {
      console.log(this)
      const listItem = {
        date: this.inputDate,
        time: this.inputTime,
        desc: this.inputDesc
      }
      this.$store.dispatch('addTime', {
        time: listItem.time
      })
      this.$store.dispatch('addList', {
        item: listItem
      })

      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
  .app-body-add{
    margin-left: 300px;
    width: 60%;
    height: 200px;
    text-align: center;
    background-color: #cdcdcd;
    padding-top: 40px;

    .btn{
      margin: 3px auto 0;
      width: 50px;
      height: 20px;
      background-color: rgba(162, 238, 12,0.35);
      border-radius: 3px;
      cursor: pointer;


      &:hover{
        background-color: rgba(162, 238, 12,1);
      }
    }
  }
</style>
