### 取得関数

| 関数                     | 役割                           | 備考                                                                   |
| ------------------------ | ------------------------------ | ---------------------------------------------------------------------- |
| getByRole()              | 単一対象の存在確認             | [ロール一覧](https://github.com/A11yance/aria-query#elements-to-roles) |
| getAllByRole（）         | ページ内の HTML タグの配列取得 | [ロール一覧](https://github.com/A11yance/aria-query#elements-to-roles) |
| getByPlaceholderText（） | プレスフォルダーの確認         |                                                                        |
|                          |                                |                                                                        |
|                          |                                |                                                                        |

### 評価関数

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
