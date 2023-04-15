import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const sleep = (msec) => {
  const start = new Date();
  while (new Date() - start < msec);
};

// createAsyncThunk:非同期系の関数を生成する
export const fetchDummy = createAsyncThunk("fetch/dummy", async (num) => {
  await sleep(2000);
  return num;
});

// 実行後extraReducersに映る
export const fetchJSON = createAsyncThunk("fetch/api", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
  const { username } = res.data;
  return username;
});

// createSlice：reduxの領域を生成
// 管理したいデータを目的別/機能別に分けることができる
export const customCounterSlice = createSlice({
  name: "customCounter",
  initialState: {
    mode: 0,
    value: 0,
    username: "",
  },
  reducers: {
    increment: (state) => {
      switch (state.mode) {
        case 0:
          state.value += 1;
          break;
        case 1:
          state.value += 100;
          break;
        case 2:
          state.value += 10000;
          break;
        default:
          break;
      }
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      switch (state.mode) {
        case 0:
          state.value += action.payload;
          break;
        case 1:
          state.value += 100 * action.payload;
          break;
        case 2:
          state.value += 10000 * action.payload;
          break;
        default:
          break;
      }
    },
  },
  // 非同期関数を扱う場合のreducers
  extraReducers: (builder) => {
    console.log(builder, "builder");
    // fetchが成功
    builder.addCase(fetchDummy.fulfilled, (state, action) => {
      state.value = 100 + action.payload;
    });
    // fetchが失敗
    builder.addCase(fetchDummy.rejected, (state, action) => {
      state.value = 100 - action.payload;
    });
    builder.addCase(fetchJSON.fulfilled, (state, action) => {
      state.username = action.payload;
    });
    builder.addCase(fetchJSON.rejected, (state, action) => {
      state.username = "anonymous";
    });
  },
});

// reducersの中に展開されているactionsをexport
export const { increment, decrement, incrementByAmount } =
  customCounterSlice.actions;

// useSelecterを使用してreduxの値を直接参照できる
export const selectCount = (state) => state.customCounter.value;
export const selectUsername = (state) => state.customCounter.username;
// reducerの部分をexport
export default customCounterSlice.reducer;
