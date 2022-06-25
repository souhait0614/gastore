# Gastore

SolidJS と Reactive State に触発された軽量な状態管理ライブラリ

## 必要要件

- Node.js Version Manager ([fnm](https://fnm.vercel.app/)を推奨)
- [Node.js](https://nodejs.org/) v18.4.0
- [pnpm](https://pnpm.io/)

## 使い方

```js
const str = createStore<string>()

str.subscribe((value) => {
  console.log(value) // ->テスト
})

name.set("テスト")
```
