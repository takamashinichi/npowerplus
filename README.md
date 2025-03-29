# Nパワープラス 公式通販サイト

このリポジトリは、土壌微生物のバランス栄養剤「Nパワープラス®」の公式通販サイトのソースコードを管理しています。

## プロジェクト概要

Nパワープラスは、土壌中の微生物群に栄養を与え、活性化させることで土壌環境を改善する革新的な栄養剤です。本サイトは、その商品を紹介し、販売するためのプラットフォームとして開発されています。

## 技術スタック

- [Next.js](https://nextjs.org/) - Reactフレームワーク
- [Tailwind CSS](https://tailwindcss.com/) - スタイリング
- [Font Awesome](https://fontawesome.com/) - アイコン

## 主な機能

- 商品紹介と販売
- 商品特徴の詳細説明
- 料金・プラン表示
- お問い合わせ機能

## 開発方法

### 前提条件

- Node.js (16.x以降)
- npm (8.x以降)

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/yourusername/npowerplus.git
cd npowerplus

# 依存関係のインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて、結果を確認してください。

### ビルド

```bash
npm run build
```

### 本番サーバーの起動

```bash
npm run start
```

## ディレクトリ構造

```
npowerplus/
├── app/               # Next.jsアプリケーションコード
│   ├── components/    # Reactコンポーネント
│   ├── page.js        # ホームページ
│   └── layout.js      # レイアウト
├── public/            # 静的ファイル
│   └── images/        # 画像ファイル
└── ...                # その他の設定ファイル
```

## ライセンス

© 2024 Nパワープラス® All Rights Reserved. 

このプロジェクトは非公開です。無断での使用、配布、改変は禁止されています。 