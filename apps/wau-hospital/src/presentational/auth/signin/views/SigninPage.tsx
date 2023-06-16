'use client';
import { useForm } from 'react-hook-form';
import { WTextField } from 'ui';

const SigninPage = () => {
  const form = useForm();
  return (
    <div className="flex w-full flex-col">
      <WTextField />
      <WTextField />
      <WTextField />
    </div>
  );
};

export default SigninPage;
