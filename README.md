# Gastore

SolidJS の Signal と Svelte の Store に触発された軽量な状態管理ライブラリ

## 使い方

npm などで`gastore`をインストールしてください。

### 使用例

```ts
import { createStore } from 'gastore'

const str = createStore<string>('hoge')

str.subscribe((value) => {
  console.log(value) // ->テスト
})

name.set('テスト')
```

### createStore()

Store を作成します。引数には保存する値の初期値を指定します。返り値の`Store`を変数や定数に代入してください。

```ts
createStore<T>(value: T): Store<T>
```

### Store.set()

Store に値を保存します。引数には保存する値を指定します。

```ts
set(value: T): T
```

### Store.update()

Store に値を保存します。引数には関数を指定し、指定する関数の引数から Store に保存した値を受け取ることが出来ます。

```ts
update(updateFunc: (prev: T) => T): T
```

### Store.subscribe()

`Store.set()`や`Store.update()`で保存された値が更新された際に実行する関数を設定します。引数には関数を指定し、指定する関数の引数から Store に保存した値を受け取ることが出来ます。

```ts
subscribe(execFunc: (value: T) => void, options?: SubscribeOptions): void
```

### Store.get()

保存された値を返します。

```ts
get(): T
```

## 開発

### 必要要件

- Node.js Version Manager ([fnm](https://fnm.vercel.app/)を推奨)
- [Node.js](https://nodejs.org/) v18.4.0
- [pnpm](https://pnpm.io/)

### インストール

```sh
git clone https://github.com/souhait0614/gastore.git
cd gastore
pnpm i
```
