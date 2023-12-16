import MonthAndDayOfWeek from '../domains/MonthAndDayOfWeek.js';
import Conditions from '../constants/Conditions.js';
class WorkerPlanner {
  #MonthAndDayOfWeek;

  #NickNamesForWeekday;

  #NickNamesForWeekend;

  constructor(monthAndDayOfWeek, nickNamesSet) {
    this.#MonthAndDayOfWeek = monthAndDayOfWeek;
    this.#NickNamesForWeekday = nickNamesSet[0];
    this.#NickNamesForWeekend = nickNamesSet[1];
  }

  create() {
    const result = [];
    const month = this.#MonthAndDayOfWeek.getMonth();

    for (let i = 1; i <= Conditions.MAX_DAYS[month]; i++) {
      result[i - 1] = this.#MonthAndDayOfWeek.isWeekday(i)
        ? this.#NickNamesForWeekday.getNext()
        : this.#NickNamesForWeekend.getNext();
    }
    return result;
  }
}
export default WorkerPlanner;
