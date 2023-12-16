import ERROR from '../constants/Error.js';
import NickNames from './NickNames.js';
class NickNamesSet {
  #nickNamesForWeekday;

  #nickNamesForWeekend;

  constructor(strings) {
    this.#nickNamesForWeekday = new NickNames(strings[0]);
    this.#nickNamesForWeekend = new NickNames(strings[1]);
  }

  get() {
    return [this.#nickNamesForWeekday, this.#nickNamesForWeekend];
  }
}

export default NickNamesSet;
