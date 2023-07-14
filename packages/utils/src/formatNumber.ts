/**
 * 숫자 3자리(천단위) 콤마 찍기
 */
export const numberMark = (value: string, mark?: string): string => {
  const markStr = mark ? mark : ',';
  const regExp = /\B(?=(\d{3})+(?!\d))/g;
  return value.toString().replace(regExp, markStr);
};

export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getToLocalString = (str: string) => {
  const comma = (str: string) => {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
  };
  const uncomma = (str: string) => {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
  };
  return comma(uncomma(str));
};

export const formatBirth = (value: string): string => {
  return value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
};

export const removeSpecialString = (originData: string) => {
  /* eslint-disable no-useless-escape */
  const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
  return reg.test(originData) ? originData.replace(reg, '') : originData;
};

export const formatTelNumber = (value: string): string => {
  let formatvalue = '';

  switch (value.length) {
    case 12:
      formatvalue = value.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3');
      break;
    case 11:
      formatvalue = value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
      break;
    case 8:
      formatvalue = value.replace(/(\d{4})(\d{4})/, '$1-$2');
      break;
    default:
      if (value.indexOf('02') === 0) {
        if (value.length === 9) formatvalue = value.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3');
        if (value.length === 10) formatvalue = value.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
      } else {
        formatvalue = value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
      }
      break;
  }

  return formatvalue;
};
