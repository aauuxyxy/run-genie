import { Injectable } from '@nestjs/common';

/**
 * アプリケーションのビジネスロジックを担うサービス。
 * データベースへのアクセスや外部APIの呼び出しなどの具体的な処理はここに記述します。
 */
@Injectable()
export class AppService {
  /**
   * 動作確認用の文字列を返すメソッド。
   */
  getHello(): string {
    return 'Hello World!';
  }
}
