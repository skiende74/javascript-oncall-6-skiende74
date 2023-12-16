import ERROR from '../constants/Error.js';
import OutputView from '../views/OutputView.js';
import NickNames from './NickNames.js';
class NickNamesSet {
  #nickNamesForWeekday;

  #nickNamesForWeekend;

  constructor(strings) {
    OutputView.print(strings);
    this.#nickNamesForWeekday = new NickNames(strings[0]);
    this.#nickNamesForWeekend = new NickNames(strings[1]);
  }

  get() {
    return [this.#nickNamesForWeekday, this.#nickNamesForWeekend];
  }
}

export default NickNamesSet;
