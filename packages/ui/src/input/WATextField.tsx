import { TextFieldProps } from './type';

export const WATextField = (props: TextFieldProps) => {
  return (
    <input
      {...props}
      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
    />
  );
};
