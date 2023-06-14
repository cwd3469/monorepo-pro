import { NextPage } from 'next';
import { WSigninContainer, LOGO_LIST, WTextField } from 'ui';
import Image from 'next/image';
export const metadata = {
  title: '어디아파 병원 - 로그인',
  description: '어디아파 병원 - 로그인',
};

const SigninPage: NextPage = () => {
  return (
    <WSigninContainer>
      <Image
        src={LOGO_LIST['signinHospitalLogo']}
        alt={'어디아파 로그인 페이지 로고'}
      />
      <WTextField error="error" />
      <div>SigninPage</div>
      <div>SigninPage</div>
    </WSigninContainer>
  );
};

export default SigninPage;
