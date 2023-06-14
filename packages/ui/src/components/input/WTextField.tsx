'use client';
import clsx from 'clsx';
import { Input, InputProps } from './index';
import { useEffect } from 'react';

interface TextFieldMsgPrope {
  error?: string;
  helper?: string;
}
type WTextFieldProps = InputProps & TextFieldMsgPrope;

const TextFieldMsg = (props: TextFieldMsgPrope) => {
  const { error, helper } = props;
  const isMsg = typeof error === 'string' || typeof helper === 'string';
  if (!isMsg) return <></>;
  return (
    <p className="text-muted-foreground text-sm">{error ? error : helper}</p>
  );
};

const WTextField = (props: WTextFieldProps) => {
  const { error, helper } = props;
  const isError = typeof error === 'string';
  const isHelper = typeof helper === 'string';
  const twClass = clsx({
    'border-red-300	': isError,
    'border-blue-300	': isHelper,
    'border-2': true,
  });
  useEffect(() => {
    console.log(twClass);
  }, [twClass]);
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input {...props} className={twClass} />
      <TextFieldMsg {...props} />
    </div>
  );
};

export { WTextField };
