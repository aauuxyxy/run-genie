import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * アプリケーションのルートモジュール。
 * ここでコントローラーやサービスなどの各コンポーネントをNestJSに登録・統合します。
 */
@Module({
  imports: [], // 他のモジュール（DB接続や外部API連携など）を利用する場合はここに追加します
  controllers: [AppController], // エンドポイントのルーティングを担うコントローラーの登録
  providers: [AppService], // ビジネスロジックを提供するサービスの登録
})
export class AppModule {}
