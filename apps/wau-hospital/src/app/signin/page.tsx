import { NextPage } from 'next';
import { WSigninLayout, LOGO_LIST } from 'ui';
import Image from 'next/image';
import SigninPage from '../../presentational/auth/signin/views/SigninPage';
export const metadata = {
  title: '어디아파 병원 - 로그인',
  description: '어디아파 병원 - 로그인',
};

const Signin: NextPage = () => {
  return (
    <WSigninLayout>
      <Image
        src={LOGO_LIST['signinHospitalLogo']}
        alt={'어디아파 로그인 페이지 로고'}
      />
      <SigninPage />
    </WSigninLayout>
  );
};

export default Signin;
