/* eslint-disable no-useless-escape */
import * as z from 'zod';

class ValidationRegExp {
  accountId: RegExp;
  accountPassword: RegExp;
  phone: RegExp;
  numberOnly: RegExp;
  regHospitalCode: RegExp;
  constructor() {
    this.accountId = new RegExp(/^[a-z0-9]{4,20}$/);
    this.accountPassword = new RegExp(
      /^((?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+;:'",<.>/?₩`~{}\[\]]))[0-9a-zA-Z!@#$%^&*()\-_=+;:'",<.>/?₩`~{}\[\]]{8,16}$/,
    );
    this.phone = new RegExp(/^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/);
    this.numberOnly = new RegExp(/[^0-9]/g);
    this.regHospitalCode = new RegExp(/^[0-9]{8}$/);
  }
}

class ValidationAuth extends ValidationRegExp {
  public authSignin() {
    const formSchema = z.object({
      hospitalCode: z
        .string()
        .regex(
          this.regHospitalCode,
          '해당 병원의 요양기관번호 8자리를 입력해 주세요.',
        ),
      username: z
        .string()
        .regex(
          this.accountId,
          '영문 소문자/숫자 조합으로 4~20자리를 입력해 주세요.',
        ),
      password: z
        .string()
        .regex(
          this.accountPassword,
          '영문 대소문자/숫자/특수문자 조합으로 8~16자리를 입력해 주세요.',
        ),
    });

    return formSchema;
  }
}
export { ValidationRegExp, ValidationAuth };
