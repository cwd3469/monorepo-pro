'use client';
import { Input } from './index';
import { InputErrorMsgValidation } from './validation/InputErrorMsg.validation';
import { WTextFieldProps } from './types/Input.type';
import { InputTextValidation } from './validation/inputText.validation';

const WTextField = (props: WTextFieldProps) => {
  const { error, helper } = props;
  const inputMsg = new InputErrorMsgValidation({ error, helper });
  const { inputActive, inputMsgActive } = inputMsg.classNameFn();
  const msg = inputMsg.msgFn();
  const defaultClass = 'border-2';

  const valid = new InputTextValidation({ case: 'account' });

  return (
    <div className="grid w-full max-w-sm items-center">
      <Input {...props} className={inputActive + defaultClass} />
      <p
        className={`wa-input-msg text-muted-foreground text-sm ${inputMsgActive} h-6`}
      >
        {msg}
      </p>
    </div>
  );
};

export { WTextField };
