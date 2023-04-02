import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./render";

// describe=title
describe("レンダリング", () => {
  it("すべての要素がレンダリングされていること", () => {
    /**
     * Renderコンポーネントをrender関数を用いて取得する
     */
    render(<Render />);

    /**
     * 現在取得しているものをターミナルで確認する
     * screen.debug(引数を設定することで対象を絞ることもできる)
     * screen.debug(screen.getByRole("heading"));
     * <h1>
     *   react testing library lesson
     * </h1>
     * getAllByRoleで取得できる一覧：https://github.com/A11yance/aria-query#elements-to-roles
     *
     */
    // screen.debug()

    /**
     * getByRole：対象の存在確認
     * getByRoleが存在する場合はtrueになりテストがpassする
     */
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();

    /**
     * getAllByRole：配列取得
     * renderしているモジュールの中にあるものすべてを取得
     */
    // screen.debug(screen.getAllByRole("button"));
    expect(screen.getAllByRole("button")[0]).toBeTruthy();
    expect(screen.getAllByRole("button")[1]).toBeTruthy();

    /**
     * getByText：テキストを取得する
     */
    // screen.debug(screen.getByText("Udemy"));
    expect(screen.getByText("Udemy")).toBeTruthy();

    /**
     * queryByText：テキストが存在しないことを確認するときに使う。ない場合はnullを返す
     * getByTextを使って確認すると無いことを確認できないのでエラーになる
     */
    expect(screen.queryByText("Udemyeeee")).toBeNull();

    /**
     * getByTestId：data-testidに該当するものがあるのか
     */
    expect(screen.getByTestId("copyright")).toBeTruthy();
  });
});
