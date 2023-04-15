### 検索バリエーション

| 関数                                                   | 役割                                                                            | 備考                                                                   |
| ------------------------------------------------------ | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 非同期系は get を find に変更                          | 4 秒待っても非同期の結果が反映されるまで待ってくれる                            | testingLibrary の timeout が 4 秒くらい                                |
| getByRole(“ロール名”)                                  | 単一対象の存在確認                                                              | [ロール一覧](https://github.com/A11yance/aria-query#elements-to-roles) |
| getAllByRole(“ロール名”)                               | 全ての要素を配列で返してくれます。具体的な要素を取得したい場合は[0]等により参照 | [ロール一覧](https://github.com/A11yance/aria-query#elements-to-roles) |
| getByPlaceholderText(“プレースホルダーで設定した名前”) | プレースホルダーで設定した名前の検証                                            |                                                                        |
| getByText(“テキスト名”)                                | HTML 要素内のテキスト内容を探索。戻り値としては、該当する文字列とタグ           |
| queryByText(“テキスト名”)                              |                                                                                 | getByText と違い、該当しない場合は null を返してくれます               |
|                                                        |                                                                                 |                                                                        |
|                                                        |                                                                                 |                                                                        |
|                                                        |                                                                                 |                                                                        |

### マッチャー

| 関数                                | 役割                                                                 | 備考                            |
| ----------------------------------- | -------------------------------------------------------------------- | ------------------------------- |
| expect(A).toBeTruthy()              | A が ture（真）であること                                            |                                 |
| expect(A).toBeFalsy()               | A が false（偽）であること                                           |                                 |
| expect(A).toBe(B)                   | A が B と===（厳密等価）であること                                   | number, string の比較に向いてる |
| expect(A).toEqual(B)                | A が B と同値比較で等しいこと                                        | object を比較に向いてる         |
| expect(A).toBeNull()                | A が Null であること                                                 |                                 |
| expect(A).toHaveBeenCalled()        | 関数が呼び出されていること                                           |                                 |
| expect(A).toHaveBeenCalledBefore(B) | A が B より先に呼び出されていること                                  |                                 |
| expect(A).toHaveBeenCalledTimes(B)  | A が B 回数だけ呼ばれること                                          |                                 |
| expect(A).toHaveBeenCalledWith(B)   | A が B に指定した引数で少なくとも 1 回呼び出されていること           |                                 |
| expect(A).toBeCloseTo(B, C)         | A が B と与えられた少数桁数（C）まで一致していること                 |                                 |
| expect(A).toBeGreaterThan(B)        | A が B より大きいこと                                                |                                 |
| expect(A).toBeGreaterThanOrEqual(B) | A が B より大きいか、または等しいこと                                |                                 |
| expect(A).toBeLessThan(B)           | A が B より小さいこと                                                |                                 |
| expect(A).toBeLessThanOrEqual(B)    | A が B より小さいか、または等しいこと                                |                                 |
| expect(A).toBeNaN()                 | A が NaN であること（非数）                                          |                                 |
| expect(A).toBeDefined()             | A が定義されていること                                               |                                 |
| expect(A).toBeUndefined()           | A が undefined であること                                            |                                 |
| expect(A).toContain(B)              | A が B を含んでいること                                              |                                 |
| expect(A).toMatch(B)                | A が B の正規表現にマッチしているこ                                  |                                 |
| expect(A).toThrow(B)                | A が（B という）例外を投げること                                     |                                 |
| expect(A).toThrowError(B, C)        | A が（B というエラー名で）（C というメッセージ）のエラーを投げること |                                 |
| expect(A).toBeInTheDocument(B)      | A が document 内に存在するのか                                       |

## Redux Tool Kit

<img width="1421" alt="スクリーンショット 2023-04-15 15 24 17" src="https://user-images.githubusercontent.com/55649762/232190498-92c82b66-f3e2-460d-bf58-024f289a1cea.png">
