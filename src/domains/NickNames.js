import ERROR from '../constants/Error.js';
class NickNames {
  #nickNames;

  #counter = 0;

  constructor(nickNameStrs) {
    this.#validate(nickNameStrs);
    this.#nickNames = nickNameStrs.split(',');
  }
  get() {
    return this.#nickNames;
  }

  getNext() {
    this.#counter += 1;
    return this.#nickNames[(this.#counter - 1) % this.#nickNames.length];
  }

  #validate(strs) {
    strs = strs.split(',');
    this.#validateNicknameLength(strs);
    this.#validateNoDuplicateNickname(strs);
    this.#validateMinMaxWorkers(strs);
  }

  #validateNicknameLength(strs) {
    if (!strs.every((nickname) => nickname.length <= 5 && nickname.length >= 1))
      throw new Error(ERROR.message);
  }

  #validateNoDuplicateNickname(strs) {
    if (strs.length !== new Set(strs).size) throw new Error(ERROR.message);
  }

  #validateMinMaxWorkers(strs) {
    if (!(strs.length >= 5 && strs.length <= 35))
      throw new Error(ERROR.message);
  }
}
export default NickNames;
