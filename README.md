# DreamHouse React Native モバイルアプリケーション

DreamHouseモバイルアプリケーションのReact Native iOS 版の実装です。 DreamHouseはSalesforce PlatformでEnd-to-Endのアプリケーションを構築したデモアプリケーションです。 詳しくは [DreamHouseのサイト](http://dreamhouseappjp.io) をご覧下さい。

このバージョンのアプリケーションはReact Native 及び Salesforce Mobile SDKを使い、 [experimental features](https://github.com/ForceDotComLabs/react.force.datacontainer) によってSalesforceメタデータからUIの一部分を生成して実装しています。

experimentalプロジェクトはForceDotComLabsの配下で進められていてますが。これは以下の意味を持ちます:

1. 現在開発中です
1. 利用した際のフィードバックを求めています
1. コードのコントリビューションを歓迎しています

![iOS Screenshot](README_files/screen2.png?raw=true)  ![iOS Screenshot](README_files/screen1.png?raw=true)

## TrailheaDX プレゼンテーション

TrailheaDXカンファレンスで行われたプレゼンテーションの録画をぜひご覧ください:

[![iOS Screenshot](tutorial_video/README_files/video2.png?raw=true)](https://www.youtube.com/watch?v=RY2vn2bT6XU)

## インストール手順

1. [these instructions](http://dreamhouse-site.herokuapp.com/installation/) に従いSalesforceのバックエンドをセットアップしてください。

1. このリポジトリをCloneします:
    ```
    git clone https://github.com/dreamhouse-jp/dreamhousejp-mobile-react
    ```

1.  `dreamhousejp-mobile-react` ディレクトリへ移動します:
    ```
    cd dreamhousejp-mobile-react
    ```

1. 依存パッケージをnpmからインストールします:
    ```
    npm install
    ```

1. 依存パッケージをcocoapodsからインストールします:
    ```
    pod install
    ```

    もし `pod` コマンドが見当たらない場合は、最初に cocoapods をインストールしてください:
    ```
    sudo gem install cocoapods
    ```

    もし cocoapods のインストールが失敗する場合には、 Rubyをシステムにインストールされているバージョンからアップグレードする必要があるかもしれません。


1. システムに[rnpm](http://facebook.github.io/react-native/releases/0.24/docs/linking-libraries-ios.html#automatic-linking) がない場合は、 [rnpm](http://facebook.github.io/react-native/releases/0.24/docs/linking-libraries-ios.html#automatic-linking) をインストールします:
    ```
    npm install rnpm -g
    ```

1. 依存性を解決します:
    ```
    rnpm link
    ```

## iOS エミュレータ上で動作させる

1. 以下のコマンドをタイプしてXcodeのワークスペースを開きます:
    ```
    open dreamhouse.xcworkspace
    ```

1. 開発サーバ(React packager)をスタートします:
  ```
  npm start
  ```

1. Xcode内で、エミューれたを選択して **Run** ボタンをクリックします

## デバイス上で動作させる

1. 開発サーバをスタートさせます:
  ```
  npm start
  ```

1. Xcode上でプロジェクトナビゲーターから **dreamhouse** プロジェクトを選択し。 **dreamhouse copy** ターゲットを選択します。

    ![xcode](README_files/xcode_target.jpg)

1. **Bundle Identifier** 及び **Team** をApple Developer Potalで作成したプロビジョニングプロファイルに設定します。

1. ツールバー上のデバイスセレクターよりあなたの電話機を選択して **Run** をクリックします。

## ステップバイステップチュートリアル

 [こちらのチュートリアル](/tutorial) に、アプリケーションをスクラッチから作成する手順が記載されています。
