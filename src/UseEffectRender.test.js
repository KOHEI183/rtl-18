import React from "react";
import { render, screen } from "@testing-library/react";
import UseEffectRender from "./UseEffectRender";

describe("useEffect レンダリング", () => {
  it("非同期関数が解決した後にのみレンダリングするようにする。", async () => {
    render(<UseEffectRender />);
    // useEffectで最初値がnullで有ることを画面上でテキストを取得して確認
    expect(screen.queryByText(/I am/)).toBeNull();
    // apiを走らせる
    // findByText
    expect(await screen.findByText(/I am/)).toBeInTheDocument();
  });
});
