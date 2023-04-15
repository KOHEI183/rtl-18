import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import Redux from "./Redux";
import { configureStore } from "@reduxjs/toolkit";
// customCounterSlice.reducerをimport
import customCounterReducer from "../src/features/customCounter/customCounterSlice";

describe("Redux Integration Test", () => {
  let store;
  beforeEach(() => {
    // test用でもreduxを再現するため/app/store.jsの7行目と同じことをしている
    store = configureStore({
      reducer: {
        // customCounterとしてtest用のreducerを登録する、sliceファイルのnameと一致させる
        customCounter: customCounterReducer,
      },
    });
  });
  it("クリックごとに1ずつ増加する値を表示すること。", async () => {
    render(
      // Providerでテストしたいコンポーネントを囲む
      // 流し込むことでreduxコンポーネントでreduxを使いtestできる
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    await userEvent.click(screen.getByText("+"));
    await userEvent.click(screen.getByText("+"));
    await userEvent.click(screen.getByText("+"));
    expect(screen.getByTestId("count-value")).toHaveTextContent(3);
  });
  it("クリックするごとに1ずつ減っていく値を表示する。", async () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    await userEvent.click(screen.getByText("-"));
    await userEvent.click(screen.getByText("-"));
    expect(screen.getByTestId("count-value")).toHaveTextContent(-2);
  });
  it("incrementByAmountで値を表示する。", async () => {
    render(
      <Provider store={store}>
        <Redux />
      </Provider>
    );
    await userEvent.type(screen.getByPlaceholderText("Enter"), "30");
    await userEvent.click(screen.getByText("IncrementByAmount"));
    expect(screen.getByTestId("count-value")).toHaveTextContent(30);
  });
});
