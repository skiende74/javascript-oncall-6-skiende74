import ERROR from '../constants/Error.js';
import Conditions from '../constants/Conditions.js';

class MonthAndDayOfWeek {
  #month;

  #dayOfWeekIndex;

  #POSSIBLE_DAY_OF_WEEKS = ['월', '화', '수', '목', '금', '토', '일'];

  constructor(MonthAndDayOfWeekStr) {
    this.#validate(MonthAndDayOfWeekStr);
    this.#parse(MonthAndDayOfWeekStr);
  }

  get() {
    return [this.#month, this.#dayOfWeekIndex];
  }
  getMonth() {
    return this.#month;
  }
  getMaxDay() {
    return Conditions.MAX_DAYS[this.#month];
  }

  isWeekday(day) {
    return (this.#dayOfWeekIndex + day - 1) % 7 <= 4 && !this.isSpecialDay(day);
  }

  isSpecialDay(day) {
    return Conditions.SPECIAL_DAYS[this.#month].includes(day);
  }

  getDayOfWeek(day) {
    return this.#POSSIBLE_DAY_OF_WEEKS[(this.#dayOfWeekIndex + day - 1) % 7];
  }

  #validate(string) {
    this.#validateFormat(string);
    this.#validateDayOfWeek(string);
    this.#validateIntegerMonth(string);
    this.#validateMonthRange(string);
  }

  #validateFormat(string) {
    if (string.split(',').length !== 2) throw new Error(ERROR.message);
  }

  #validateDayOfWeek(string) {
    if (!this.#POSSIBLE_DAY_OF_WEEKS.includes(string.split(',')[1]))
      throw new Error(ERROR.message);
  }

  #validateIntegerMonth(string) {
    if (!Number.isInteger(Number(string.split(',')[0])))
      throw new Error(ERROR.message);
  }

  #validateMonthRange(string) {
    const month = Number(string.split(',')[0]);
    if (!(month >= 1 && month <= 12)) throw new Error(ERROR.message);
  }

  #parse(string) {
    const result = string.split(',');
    this.#month = result[0];
    this.#dayOfWeekIndex = this.#POSSIBLE_DAY_OF_WEEKS.indexOf(result[1]);
  }
}
export default MonthAndDayOfWeek;
