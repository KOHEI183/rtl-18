import reducer, {
  fetchDummy,
} from "../src/features/customCounter/customCounterSlice";

describe("extraReducers", () => {
  const initialState = {
    mode: 0,
    value: 0,
  };
  it("成功した場合、100＋ペイロードを出力すること。", () => {
    const action = { type: fetchDummy.fulfilled.type, payload: 5 };
    const state = reducer(initialState, action);
    expect(state.value).toEqual(105);
  });
  it("拒否された場合、100 - ペイロードを出力する必要があります。", () => {
    const action = { type: fetchDummy.rejected.type, payload: 5 };
    const state = reducer(initialState, action);
    expect(state.value).toEqual(95);
  });
});
