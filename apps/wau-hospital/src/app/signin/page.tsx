import { NextPage } from 'next';
import { WSigninLayout, LOGO_LIST } from 'ui';
import Image from 'next/image';
import SigninTemplate from '../../presentational/auth/signin/views/SigninTemplate';

export const metadata = {
  title: '어디아파 병원 - 로그인',
  description: '어디아파 병원 - 로그인',
};

const SigninPage: NextPage = () => {
  return (
    <WSigninLayout>
      <Image
        src={LOGO_LIST['signinHospitalLogo']}
        alt={'어디아파 로그인 페이지 로고'}
      />
      <SigninTemplate />
    </WSigninLayout>
  );
};

export default SigninPage;
