'use client';
import { useForm } from 'react-hook-form';
import { WTextField, WTextField2 } from 'ui';

const SigninTemplate = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <div className="flex w-full flex-col">
      <form
        onSubmit={() => handleSubmit((data) => alert(JSON.stringify(data)))}
      >
        <WTextField2 />
        <button type="submit" disabled={isSubmitting}>
          로그인
        </button>
      </form>
    </div>
  );
};

export default SigninTemplate;
