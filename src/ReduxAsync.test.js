import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import customCounterReducer from "../src/features/customCounter/customCounterSlice";
import ReduxAsync from "./ReduxAsync";

/**
 * apiなしの非同期処理
 */
describe("ReduxAsync test", () => {
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
  it("100+ペイロードの値を表示すること", async () => {
    render(
      <Provider store={store}>
        <ReduxAsync />
      </Provider>
    );
    await userEvent.click(screen.getByText("FetchDummy"));
    expect(await screen.findByTestId("count-value")).toHaveTextContent("105");
  });
});
