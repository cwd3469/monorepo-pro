import { InputProps } from '..';

/**InputTextValidation Parameters*/
export type InputTextValidationParameters = {
  /**검증 대상 선정*/
  case: string;
};

/**InputErrorMsgValidator Parameters*/
export type InputErrorMsgValidationParameters = {
  /**Input error msg*/
  error?: string;
  /**Input helper msg*/
  helper?: string;
};

/**WTextField Component Props*/
export type WTextFieldProps = InputProps & InputErrorMsgValidationParameters;
