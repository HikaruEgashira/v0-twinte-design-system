# Twin:te Design System — v0 Registry

Twin:te エコシステムで共有されるニューモーフィックデザインシステムを、Vercel v0 Registry 形式で提供するコンポーネントレジストリです。

## 概要

[Twin:te](https://app.twinte.net) は筑波大学の時間割管理アプリです。本レジストリは、以下の3リポジトリ間で共有されるデザインシステムを React (TSX) + Tailwind CSS 4 + shadcn/ui パターンに変換したものです。

- [twinte-front](https://github.com/twin-te/twinte-front) — メインアプリ
- [twinte-landing-page](https://github.com/twin-te/twinte-landing-page) — LP
- [neumorphic-components-set](https://github.com/KanadeNishizawa/neumorphic-components-set) — コンポーネントセット

## コンポーネント一覧 (40個)

### Core UI (21個)

| カテゴリ | コンポーネント |
|---------|-------------|
| 基盤 | `button`, `icon-button`, `tertiary-button`, `card`, `tag`, `label`, `loader`, `error-display`, `gray-filter`, `decorated-icon` |
| フォーム | `text-field`, `textarea`, `labeled-text-field`, `checkbox`, `toggle-switch`, `toggle-button`, `input-button-file` |
| オーバーレイ | `modal`, `dropdown`, `popup`, `toast` |

### Composite (12個)

`card-add`, `card-course`, `course-tile`, `course-detail`, `check-content`, `news-box`, `tag-editor`, `room-editor`, `schedule-editor`, `multi-text-field-editor`, `page-header`, `sidebar-content`

### Landing Page ブロック (7個)

`header-menu`, `hero-section`, `feature-section`, `faq-section`, `team-member`, `cta-section`, `footer`

## デザイントークン

### カラー

| 変数 | Light | Dark |
|------|-------|------|
| `--primary` | `#00c0c0` | `#19c6c6` |
| `--background` | `#eff1f6` | `#1c222d` |
| `--foreground` | `#626a76` | `#d4dae3` |
| `--destructive` | `#ed7f93` | `#cf4861` |

### ニューモーフィックシャドウ

```css
shadow-neu-base      /* カード基本シャドウ */
shadow-neu-convex    /* 浮き出しシャドウ */
shadow-neu-concave   /* 凹みシャドウ */
shadow-neu-input     /* 入力フィールド */
shadow-neu-icon      /* アイコンシャドウ */
shadow-neu-primary-concave  /* プライマリ凹み */
shadow-neu-danger-concave   /* デンジャー凹み */
```

## 使い方

### v0.dev で使う

デプロイ後、各コンポーネントの「Open in v0」ボタンからv0.devで利用できます。

### CLI でインストール

```bash
npx shadcn@latest add https://v0-twinte-design-system.vercel.app/r/twinte-button.json
```

### MCP で使う

`registry.json` を MCP サーバーとして Cursor / Windsurf で利用可能です。

## ローカル開発

```bash
pnpm install
pnpm dev
```

http://localhost:3000 でレジストリが起動します。

### コマンド

| コマンド | 説明 |
|---------|------|
| `pnpm dev` | 開発サーバー起動 |
| `pnpm build` | プロダクションビルド |
| `pnpm lint` | Biome lint |
| `pnpm registry:build` | レジストリJSON生成 |

## 技術スタック

- **React 19** + **Next.js 16** + **TypeScript 5**
- **Tailwind CSS 4** + CSS Variables (OKLCH)
- **Radix UI** + **shadcn/ui** + **sonner** + **lucide-react**
- **class-variance-authority** (cva) でバリアント管理
- **Biome** for lint/format

## ファイル構造

```
src/components/twinte/   Twin:te コンポーネント (40個)
src/components/ui/       shadcn/ui プリミティブ
registry/common/         テーマ・共通設定
registry.json            レジストリ定義
public/r/                生成済みJSONエンドポイント
```

## ライセンス

Based on [vercel/registry-starter](https://github.com/vercel/registry-starter).
