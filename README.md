# RunGenie 🧞‍♂️🏃‍♂️

マラソンを趣味とするランナー向けに、指定した目標距離に基づいて自動的にランニングコースを生成するスマートフォンアプリです。

## 🌟 アプリ概要

「今日は5km走りたい」「週末はハーフマラソンの距離を走りたい」
RunGenieは、ユーザーの現在地や指定した出発地点をベースに、希望する距離に沿った周回コースや折り返しコースをパッと魔法のように自動生成してくれます。

### 主な機能
- 🗺 **コース自動生成**: 指定距離に基づくルート探索とマップ上への描画
- 📈 **高低差表示**: 生成されたルートの標高データ（アップダウン）の可視化
- 📍 **現在地トラッキング**: ユーザーの位置情報を取得し、マップ上に表示

## 🛠 技術スタック

RunGenieは、モバイルアプリ（フロントエンド）とAPIサーバー（バックエンド）の独立した構成で構築されています。

### フロントエンド (Mobile App)
- **フレームワーク**: React Native (Expo)
- **言語**: TypeScript
- **マップ機能**: `react-native-maps`
- **UIライブラリ**: React Native Paper

### バックエンド (API Server)
- **フレームワーク**: Node.js (NestJS または Express)
- **言語**: TypeScript
- **外部API**: Google Maps API または Mapbox API (Directions, Elevation等を利用)

## 📁 ディレクトリ構成

- `frontend/` - モバイルアプリのソースコード（Expo）
- `backend/` - APIサーバーのソースコード
- `.antigravity/docs/` - プロジェクトの設計書や実装指示書

## 🚀 開発の進め方

開発タスクはGitHubのIssueにて「バックエンド」と「フロントエンド」に分けて管理されています。
最新の設計詳細については `.antigravity/docs/blueprint.md` をご参照ください。

---
*Created by Product Architect.*
