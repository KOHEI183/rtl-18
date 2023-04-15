import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import FrameworkList from "./FrameworkList";

afterEach(() => cleanup());
describe("プロップを使ったリストのレンダリング", () => {
  it("データがないときは、No data！を表示する。", () => {
    // propsを渡さない
    render(<FrameworkList />);
    /**
     * toBeInTheDocument：HTMLの構造の中に指定した文字列があるかどうか
     * toBeの場合は
     */
    expect(screen.getByText("No data !")).toBeInTheDocument();
  });
  it("リスト項目を正しく描画する", () => {
    const dummyData = [
      { id: 1, item: "React dummy" },
      { id: 2, item: "Angular dummy" },
      { id: 3, item: "Vue dummy" },
    ];
    render(<FrameworkList frameworks={dummyData} />);
  });
});
