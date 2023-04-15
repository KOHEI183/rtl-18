import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { rest } from "msw";
import { setupServer } from "msw/node";
import MockServer from "./MockServer";

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
// resetHandlers:
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
// afterAll:ファイルの最後に実行したいとき
// close:サーバーを閉じる
afterAll(() => server.close());

describe("Mocking API", () => {
  it("[フェッチ成功]フェッチされたデータを正しく表示し、ボタンを無効化する。", async () => {
    render(<MockServer />);
    // ボタンの取得してクリック
    await userEvent.click(screen.getByRole("button"));
    // 取得結果がブラウザに表示されるまでfindで待つその結果Bred dummyと一致するのか
    expect(await screen.findByRole("heading")).toHaveTextContent("Bred dummy");
    // toHaveAttribute:属性検知　disabledの属性がある場合pass
    expect(screen.getByRole("button")).toHaveAttribute("disabled");
  });
  it("[フェッチ失敗]エラーメッセージが表示され、レンダリングヘッドとボタンが表示されない。", async () => {
    // server.use：severの内容を書き換える。itの中だけで有効になる
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users/1",
        (req, res, ctx) => {
          return res(ctx.status(404));
        }
      )
    );
    render(<MockServer />);
    await userEvent.click(screen.getByRole("button"));
    expect(await screen.findByTestId("error")).toHaveTextContent(
      "Fetching Failed !"
    );
    expect(screen.queryByRole("heading")).toBeNull();
    expect(screen.getByRole("button")).not.toHaveAttribute("disabled");
  });
});
