import reducer, {
  increment,
  incrementByAmount,
} from "../src/features/customCounter/customCounterSlice";
import { render, screen } from "@testing-library/react";

describe("Reducer of ReduxToolKit", () => {
  describe("increment action", () => {
    let initialState = {
      mode: 0,
      value: 1,
    };
    it("モード 0 で 1 ずつ増加するはずです。", () => {
      // increment.type=customCounter/increment
      const action = { type: increment.type };
      // stateの参照
      const state = reducer(initialState, action);
      expect(state.value).toEqual(2);
    });
    it("モードにより100ずつ増加するようにする ", () => {
      initialState = {
        mode: 1,
        value: 1,
      };
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(101);
    });
    it("モード 2 で 10000 ずつ増加するはずです", () => {
      initialState = {
        mode: 2,
        value: 1,
      };
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(10001);
    });
  });
  describe("incrementByAmount action", () => {
    let initialState = {
      mode: 0,
      value: 1,
    };
    it("モード 0 の場合、ペイロード値でインクリメントする必要があります。", () => {
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(4);
    });
    it("モード 1 の場合、100 * ペイロード値でインクリメントする必要があります。", () => {
      initialState = {
        mode: 1,
        value: 1,
      };
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(301);
    });
    it("モード 2 の場合、10000 * ペイロード値でインクリメントする必要があります。", () => {
      initialState = {
        mode: 2,
        value: 1,
      };
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(30001);
    });
  });
});
