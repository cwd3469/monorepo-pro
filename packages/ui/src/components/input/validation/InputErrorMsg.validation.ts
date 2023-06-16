import clsx from 'clsx';
import { InputErrorMsgValidationParameters } from '../types/Input.type';

export class InputErrorMsgValidation {
  /**error text 값 검증 */
  error?: string;
  /**helper text 값 검증 */
  helper?: string;
  /**error text 값 검증 */
  isError?: boolean;
  /**helper text 값 검증 */
  isHelper?: boolean;
  /**text 값 검증 */
  isMsg?: boolean;
  constructor(parameters: InputErrorMsgValidationParameters) {
    const { error, helper } = parameters;
    const errorToString = typeof error === 'string';
    const helperToString = typeof helper === 'string';
    this.error = error;
    this.helper = helper;
    this.isError = errorToString;
    this.isHelper = helperToString
      ? errorToString
        ? errorToString
        : true
      : false;
    this.isMsg = errorToString || helperToString;
  }
  public classNameFn() {
    const inputActive = clsx({
      'border-red-300	': this.isError,
      'border-blue-300	': this.isHelper,
    });

    const inputMsgActive = clsx({
      'text-red-300	': this.isError,
      'text-blue-300	': this.isHelper,
    });
    return { inputActive, inputMsgActive };
  }
  public msgFn() {
    return this.isMsg
      ? this.isError
        ? this.error
        : this.isHelper
        ? this.helper
        : ''
      : '';
  }
}
