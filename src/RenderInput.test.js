import React from "react";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RenderInput from "./RenderInput";

/**
 * afterEach：各itのあとに実行する関数
 * cleanup：各itのたびにブラウザにコンポーネントがレンダリングされるので毎回unmountする。現在は明示的に記載しなくてもバックサイド実行してくれるらしい
 */
afterEach(() => cleanup());

describe("RenderInputのコンポーネント確認", () => {
  it("すべての要素がレンダリングされていること", () => {
    render(<RenderInput />);
    expect(screen.getByRole("button")).toBeTruthy();
    /**
     * getByPlaceholderText：プレスフォルダーの確認
     */
    expect(screen.getByPlaceholderText("Enter")).toBeTruthy();
  });
});

describe("inputのonChangeイベント", () => {
  it("input要素がレンダリングされていること", async () => {
    render(<RenderInput />);
    // Placeholderがエンターの要素を取得する
    const inputValue = screen.getByPlaceholderText("Enter");
    await userEvent.type(inputValue, "test");
    /**
     * waitFor：引数に渡したコールバックが期待する結果になるまで何度も実行
     */
    await waitFor(() => expect(inputValue.value).toBe("test"));
  });
});

describe("consoleボタン", () => {
  it("input要素の値がない場合outputConsoleは呼び出されないこと", async () => {
    /**
     * mock関数の定義。何かをする処理は記載していないが関数を定義しておく、関数として呼び出されるか呼び出されないか
     */
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    await userEvent.click(screen.getByRole("button"));

    /**
     * toHaveBeenCalled：propsで渡される関数が呼び出されるかのcheck
     * not.toHaveBeenCalled()propsで渡される関数が呼び出されないかのcheck
     */
    expect(outputConsole).not.toHaveBeenCalled();
  });
  it("input要素の値がある場合outputConsoleは呼び出されること", async () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    const inputValue = screen.getByPlaceholderText("Enter");
    await userEvent.type(inputValue, "test");
    await userEvent.click(screen.getByRole("button"));

    /**
     * toHaveBeenCalledTimes(回数):(回数)だけ呼ばれること
     */
    expect(outputConsole).toHaveBeenCalledTimes(1);
  });
});
