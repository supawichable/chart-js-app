# dms-coding-test

## 課題概要

### 現状のアプリケーション

以下の画像のように、シリアルのデータの散布図を表示するアプリケーションとなっています。

<img width="575" alt="image" src="https://user-images.githubusercontent.com/114887965/211181757-c445fc12-3c76-4675-9c23-acc12d3f9535.png">

### 実装していただきたい内容

x軸がCalories、y軸がCarboで固定されていますが、各軸をユーザーがセレクトボックスから任意に変更できるようにしたいです。  
表示しているデータは `/src/constans/cereals.ts` にあり、次のプロパティを軸として選択できるようにしてください。

- caloreis
- protein
- fat
- sodium
- fiber
- carbo
- sugars
- potass
- vitamins
- shelf
- weight
- cups
- rating

### シリアルのデータ
このデータセットはKaggleからダウンロードしました。   
該当のページにデータの詳細が載っていますのでご参照ください。  
https://www.kaggle.com/datasets/crawford/80-cereals  
License: CC BY-SA 3.0

### 任意実装項目

この先は任意実装項目です。  
このアプリは研究者がデータを眺めて `rating` が高くなる要因の気づきを得るためのものと仮定します。  
その用途で改造していただいて良いです。  
以下の中から2〜3個選んで実装していただけると加点されます。  

- 7種類あるmfrでデータセットを分け、散布図をmfrで色分け表示する
- シリアルのデータを編集できるようにする
- シリアルのデータを読み書きする要件があると仮定し、追加するエンドポイントの設計をOpenAPI（Swagger）で定義する
- 現在は `/api/cerials` のエンドポイントから `/src/constans/cereals.ts` のファイルのデータが返ってくるが、PrismaまたはTypeORMを利用してDBコンテナ内にあるデータを読み取って返すように切り替える
  - 上記に加え、データのCRUDができるエンドポイントを追加する
- VercelやAWS AppRunnerなどでアプリケーションをホスティングする
- ESlint、Prettierを追加・設定する
- ユニットテストを加える
- エンドポイントのバックエンド側の処理にエラーハンドリングを追加する
- 良くないと感じるコードをリファクタリングする

その他、改善提案もOKです。

## アプリケーションの実行方法

VSCode の拡張機能「Dev Containers」を事前にインストールしておき、  
VSCode の Dev Containers から起動する。
※もし初回でエラーが出たら一度 `docker compose up -d` を実行してみてください。

1. VSCode の画面左下「><」みたいなボタンから「Reopen in Container」を選択
1. `npm i` を実行
1. `npm run dev` を実行
1. http://localhost:3000/ を開く

## 一部の任意実装項目用のMakeコマンド

一部の任意実装項目で、DBコンテナのデータを読み取るものがあります。  
その際は `make db-init` を実行すると、DBにシリアルのデータが入った状態になりますのでよければご使用ください。
