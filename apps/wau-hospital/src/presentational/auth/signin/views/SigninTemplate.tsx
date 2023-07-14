'use client';

import {
  Form,
  FormButton,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from 'ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  hospitalCode: z.string().max(8, {
    message: '해당 병원의 요양기관번호 8자리를 입력해 주세요.',
  }),
  username: z.string().min(1, { message: 'This field has to be filled' }),
  password: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

const SigninTemplate = () => {
  const form: any = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hospitalCode: '',
      username: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
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
                <Input placeholder="숫자 8자리 입력해 주세요." {...field} />
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
