'use client';

import {
  Form,
  FormButton,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from 'ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ValidationAuth, ValidationRegExp } from 'utils';

const SigninTemplate = () => {
  const valid = new ValidationAuth();
  const regexp = new ValidationRegExp();
  const formSchema = valid.authSignin();
  type LoginType = z.infer<typeof formSchema>;
  const form: any = useForm<LoginType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hospitalCode: '',
      username: '',
      password: '',
    },
  });

  function onSubmit(values: LoginType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="hospitalCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>요양기관번호</FormLabel>
              <FormControl>
                <Input
                  placeholder="숫자 8자리 입력해 주세요."
                  {...field}
                  pattern={`^[0-9]+$`}
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>아이디</FormLabel>
              <FormControl>
                <Input
                  placeholder="4자 이상의 영문 소문자 또는 숫자를 입력해 주세요."
                  {...field}
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input
                  placeholder="영문 대소문자,숫자,특수문자 중 3종류 이상 포함해 주세요."
                  type="password"
                  {...field}
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="h-4" />
        <FormButton type="submit" variant="default">
          로그인
        </FormButton>
      </form>
    </Form>
  );
};

export default SigninTemplate;
