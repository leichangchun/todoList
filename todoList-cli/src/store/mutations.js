import * as types from './mutation_type'

export default {
  [types.ADD_TOTAL_TIME] (state, payload) {
    state.totalTime += payload.time
  },
  [types.DES_TOTAL_TIME] (state, payload) {
    state.totalTime -= payload.time
  },
  [types.PUSH_TODO_LIST] (state, payload) {
    state.todoList.push(payload.item)
  },
  [types.SPLICE_TODO_LIST] (state, payload) {
    state.todoList.splice(payload.index, 1)
  }
}
