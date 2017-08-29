import * as types from './mutation_type'

export default {
  addTime (context, payload) {
    context.commit(types.ADD_TOTAL_TIME, payload)
  },
  desTime (context, payload) {
    context.commit(types.DES_TOTAL_TIME, payload)
  },
  addList (context, payload) {
    context.commit(types.PUSH_TODO_LIST, payload)
  },
  spliceList (context, payload) {
    context.commit(types.SPLICE_TODO_LIST, payload)
  }
}
