import { InputTextValidationParameters } from '../types/Input.type';

export class InputTextValidation {
  /**검증 케이스*/
  case: string;
  /**regExp 유저 아이디 유효성 검증 정규식 */
  regExpAccount: RegExp;
  constructor(parameters: InputTextValidationParameters) {
    this.case = parameters.case;
    this.regExpAccount = /^[a-z0-9]{0,20}$/;
  }

  private validRegExpAccount(text: string) {
    console.log(text);
  }
  public valid(text: string) {
    switch (this.case) {
      case 'account':
        this.validRegExpAccount(text);
        return;
      default:
        break;
    }
  }
}
