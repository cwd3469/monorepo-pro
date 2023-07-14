/* eslint-disable no-useless-escape */

export class Validation {
  [key: string]: RegExp | undefined;
  constructor() {
    this.regAccountId = /^[a-z0-9]{0,20}$/;
  }
}

export default Validation;
