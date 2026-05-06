import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * アプリケーションのルートパスに対するリクエストを受け付けるコントローラー。
 * クライアントからのHTTPリクエストを処理し、適切なサービスを呼び出してレスポンスを返します。
 */
@Controller()
export class AppController {
  // 依存性の注入（DI）により、AppServiceのインスタンスを受け取ります
  constructor(private readonly appService: AppService) {}

  /**
   * GET / リクエストに対する処理。
   * 動作確認用の挨拶メッセージを返します。
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
