'use client';
import { Input } from './index';
import { InputErrorMsgValidation } from './validation/InputErrorMsg.validation';
import { WTextFieldProps } from './types/Input.type';
import { InputTextValidation } from './validation/inputText.validation';
import React, { useEffect } from 'react';

const WTextField = (props: WTextFieldProps) => {
  const { error, helper } = props;
  const inputMsg = new InputErrorMsgValidation({ error, helper });
  const { inputActive, inputMsgActive } = inputMsg.classNameFn();
  const defaultClass = 'border-2';
  const msg = inputMsg.msgFn();

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

const WTextField2 = React.forwardRef<HTMLDivElement, WTextFieldProps>(
  (props, ref) => {
    const { error, helper } = props;
    const inputMsg = new InputErrorMsgValidation({ error, helper });
    const { inputActive, inputMsgActive } = inputMsg.classNameFn();
    const defaultClass = 'border-2';
    const msg = inputMsg.msgFn();

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
  },
);

WTextField2.displayName = 'WTextField2';

export { WTextField, WTextField2 };
