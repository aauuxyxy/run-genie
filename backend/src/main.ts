import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * アプリケーションのブートストラップ（起動）処理を行う関数。
 * NestJSアプリケーションのインスタンスを生成し、指定されたポートでリクエストの待受を開始します。
 */
async function bootstrap() {
  // ルートモジュールであるAppModuleを元にアプリケーションを作成
  const app = await NestFactory.create(AppModule);
  // 環境変数PORTが指定されていればそのポートを、なければデフォルトの3000番ポートを使用
  await app.listen(process.env.PORT ?? 3000);
}

// 起動処理を実行し、Promiseの拒否（エラー）が発生した場合はキャッチしてログに出力する
bootstrap().catch((err) => {
  console.error('Error starting server', err);
});
