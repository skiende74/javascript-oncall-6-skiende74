import ERROR from '../constants/Error.js';
import Conditions from '../constants/Conditions.js';

class MonthAndDayOfWeek {
  #month;

  #dayOfWeek;

  #POSSIBLE_DAY_OF_WEEKS = ['월', '화', '수', '목', '금', '토', '일'];

  constructor(MonthAndDayOfWeekStr) {
    this.#validate(MonthAndDayOfWeekStr);
    [this.#month, this.#dayOfWeek] =
      MonthAndDayOfWeek.parse(MonthAndDayOfWeekStr);
  }

  #validate(string) {
    this.#validateFormat(string);
    this.#validateDayOfWeek(string);
    this.#validateIntegerMonth(string);
    this.#validateMonthRange(string);
  }

  #validateFormat(string) {
    if (string.split(',').length !== 2) throw new Error(ERROR.message + '1');
  }

  #validateDayOfWeek(string) {
    if (!this.#POSSIBLE_DAY_OF_WEEKS.includes(string.split(',')[1]))
      throw new Error(ERROR.message + '2');
  }

  #validateIntegerMonth(string) {
    if (!Number.isInteger(Number(string.split(',')[0])))
      throw new Error(ERROR.message + '3');
  }

  #validateMonthRange(string) {
    const month = string.split(',')[0];
    if (!(date >= 1 && date <= 12)) throw new Error(ERROR.message + '4' + date);
  }

  static parse(string) {
    const result = string.split(',');
    result[0] = Number(result[0]);
    return result;
  }
}
export default MonthAndDayOfWeek;
