import * as shopcartApi from '../../../services/shopcart';
export default {
  namespace: 'shopcart',
  state: {
    list: [],
  },
  effects: {
    *getList({ payload }, { call, put }) {
      const res = yield call(shopcartApi.getListApi);
      yield put({
        type: 'setList',
        payload: res,
      });
    },
    *changeNum({ payload }, { call, put }) {
        yield call(shopcartApi.changeNumApi, payload);
        yield put({
          type: "getList",
        });
      },
      *del({ payload }, { call, put }) {
        yield call(shopcartApi.delApi, payload);
        yield put({
          type: "getList",
        });
      },
  },
  reducers: {
    setList(state, action) {
      // state.list = [...state.list, action.payload];
    //   console.log(action);
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
