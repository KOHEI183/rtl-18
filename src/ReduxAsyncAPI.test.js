import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import customCounterReducer from "../src/features/customCounter/customCounterSlice";

import ReduxAsync from "./ReduxAsync";

/**
 * 成功版のmockSeverの定義
 * mockSeverにアクセスし擬似的にAPIを再現
 */
const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: "Bred dummy" }));
  })
);

// beforeAll:ファイルの最初に一回実行される
// listen:mockServerの起動
beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
// afterAll:ファイルの最後に実行したいとき
// close:サーバーを閉じる
afterAll(() => server.close());

describe("Reduxの非同期APIモッキング", () => {
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
  it("[Fetch sucess]  h3タグにユーザー名を表示する", async () => {
    render(
      <Provider store={store}>
        <ReduxAsync />
      </Provider>
    );
    expect(screen.queryByRole("heading")).toBeNull();
    // サーバーを建てないと（setupServer）FetchJSONがたたけない
    await userEvent.click(screen.getByText("FetchJSON"));
    expect(await screen.findByText("Bred dummy")).toBeInTheDocument();
  });
  it("[Fetch failed] h3タグに匿名を表示する", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users/1",
        (req, res, ctx) => {
          return res(ctx.status(404));
        }
      )
    );
    render(
      <Provider store={store}>
        <ReduxAsync />
      </Provider>
    );
    expect(screen.queryByRole("heading")).toBeNull();
    await userEvent.click(screen.getByText("FetchJSON"));
    expect(await screen.findByText("anonymous")).toBeInTheDocument();
  });
});
