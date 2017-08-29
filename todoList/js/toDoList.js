//几个组件常量
const home = {
  template : `<article class="app-body-home">
                <h1>任务追踪</h1>
                <p><router-link to="/add">创建一个任务.</router-link></p>
              </article>`
}

const list = {
  template : `<article class="app-body-list">
                <div class="new_btn" @click="goAdd">创建</div>
                <div class="list-item" v-for="(item,index) in list">
                  <p class="name">{{item.date}}</p>
                  <p class="time">{{item.time}}</p>
                  <p class="todo">{{item.desc}}</p>
                  <p class="close" @click="close(item,index)">X</p>
                </div>
              </article>`,
  data : function(){
    return {}
  },
  computed : {
    list (){
      return store.state.todoList
      console.log(store.state.todoList);
    }
  },
  methods : {
    goAdd : function(){
      router.push('/add')
    },
    close : function(item,index){
      store.dispatch('desTime',{
        time : item.time
      })
      store.dispatch('spliceList',{
        index : index
      })
    }
  }
}

const add = {
  template : `<article class="app-body-add">
                <div class="item"><label for="date">日期 ： </label><input type="text" name="date" value="" id="date" v-model="inputDate"></div>
                <div class="item"><label for="time">耗时 ： </label><input type="text" name="time" value="" id="time" v-model.number="inputTime"></div>
                <div class="item"><label for="desc">描述 ： </label><input type="text" name="desc" value="" id="desc" v-model="inputDesc"></div>
                <div class="btn" @click="save">保存</div>
              </article>`,
  data : function(){
    return {
      inputDate : '',
      inputTime : null,
      inputDesc : '',
    }
  },
  computed : {

  },
  methods : {
    save : function(){
      const listItem = {
        date : this.inputDate,
        time : this.inputTime,
        desc : this.inputDesc
      }
      store.dispatch('addTime',{
        time : listItem.time
      })
      store.dispatch('addList',{
        item : listItem
      })

      router.go(-1)

    }
  }
}

//定义路由
const routes = [
  {
    path : '/home',
    component : home,
  },
  {
    path : '/list',
    component : list,
  },
  {
    path : '/add',
    component : add
  }
]

//创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes
})

//定义mutation常量
const ADD_TOTAL_TIME = "ADD_TOTAL_TIME"
const DES_TOTAL_TIME = "DES_TOTAL_TIME"
const PUSH_TODO_LIST = "PUSH_TODO_LIST"
const SPLICE_TODO_LIST = "SPLICE_TODO_LIST"

//定义store
const store = new Vuex.Store({
  state: {
    totalTime: 0,
    todoList : [],
  },
  mutations: {
    [ADD_TOTAL_TIME] (state,payload) {
      state.totalTime += payload.time
    },
    [DES_TOTAL_TIME] (state,payload) {
      state.totalTime -= payload.time
    },
    [PUSH_TODO_LIST] (state,payload) {
      state.todoList.push(payload.item)
    },
    [SPLICE_TODO_LIST] (state,payload) {
      state.todoList.splice(payload.index,1)
    }
  },
  actions:{
    addTime(context,payload){
      context.commit("ADD_TOTAL_TIME",payload)
    },
    desTime(context,payload){
      context.commit("DES_TOTAL_TIME",payload)
    },
    addList(context,payload){
      context.commit("PUSH_TODO_LIST",payload)
    },
    spliceList(context,payload){
      context.commit("SPLICE_TODO_LIST",payload)
    }
  }
})

var vm = new Vue({
  el : '#app',
  data : {

  },

  computed : {
    time(){
      return store.state.totalTime
    }
  },
  methods : {

  },
  router,
  store
})
