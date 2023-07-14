export type SEX_TYPE = 'FEMALE' | 'MALE';
import { isEmpty } from 'lodash';
import { removeSpecialString } from './formatNumber';

import { regExpReplaceAll } from './utils';

/**
 *
 * @param birthDate 19900210
 * @returns number
 */
export const getOriginalAge = (birthDate: string): number => {
  const today = new Date();
  const birth = regExpReplaceAll(birthDate, '-');
  let age = today.getFullYear() - Number(birth.slice(0, 4));
  const mon = today.getMonth() + 1 - Number(birth.slice(4, 6));
  if (mon < 0 || (mon === 0 && today.getDate() < Number(birth.slice(6, 8)))) {
    return (age = age - 1);
  }
  return age;
};

export const getBirthDayFormat = (birthDate: string, type: string) => {
  const birthDateValue = removeSpecialString(birthDate);
  return isEmpty(birthDateValue)
    ? ''
    : birthDateValue.replace(/(\d{4})(\d{2})(\d{2})/g, `$1${type}$2${type}$3`);
};

export const getTelFormat = (tel: string, type: string) => {
  return isEmpty(tel) ? '' : tel.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1${type}$2${type}$3`);
};

export const getJuminBirthDayChange = (jumin: string) => {
  if (isEmpty(jumin)) return '';

  const splitStr = jumin.split('-');
  const fristNum = splitStr[0];
  const lastNum = splitStr[1];
  const divisionCode = Number(lastNum.substring(0, 1));
  let dateOfBirth = null;
  if (divisionCode === 1 || divisionCode === 2 || divisionCode === 5 || divisionCode === 6) {
    // 한국인 1900~, 외국인 1900~
    dateOfBirth = `19${fristNum}`;
  } else if (divisionCode === 3 || divisionCode === 4 || divisionCode === 7 || divisionCode === 8) {
    // 한국인 2000~, 외국인 2000~
    dateOfBirth = `20${fristNum}`;
  } else if (divisionCode === 9 || divisionCode === 0) {
    // 한국인 1800~
    dateOfBirth = `18${fristNum}`;
  }
  return dateOfBirth;
};

export const getMemberSexTypeName = (type: SEX_TYPE) => {
  return type === 'MALE' ? '남' : '여';
};

/* =========== 브라우저의 탭에서 다른 아이디로 로그인 한 경우 체크 =========
 * instance : api(), routeManager : useEffect([pathname]) 에서 사용 중 */
let loginUserId = '';
let useMsg = false;
export const sameUserCheck = (): boolean => {
  const userStorage = localStorage.getItem('user');
  if (userStorage) {
    const users = JSON.parse(userStorage);
    if (isEmpty(loginUserId)) {
      loginUserId = users.id;
    } else {
      if (loginUserId !== users.id) {
        if (useMsg === false) {
          alert('로그인 아이디가 변경되었습니다.');
          window.location.reload();
          useMsg = true;
        }
        return false;
      }
    }
  }
  return true;
};
/* /. ======================================================= */
