import MonthAndDayOfWeek from '../domains/MonthAndDayOfWeek';

class WorkerPlanner {
  #MonthAndDayOfWeek;

  #NickNamesForWeekday;

  #NickNamesForWeekend;

  constructor(monthAndDayOfWeek, nickNamesSet) {
    this.#MonthAndDayOfWeek = monthAndDayOfWeek;
    [this.#NickNamesForWeekday, this.#NickNamesForWeekend] = nickNamesSet;
  }

  create() {
    const result = [];
    const month = this.#MonthAndDayOfWeek.getMonth();

    for (i = 0; i < Conditions.MAX_DAYS[month]; i++) {
      result[i] = MonthAndDayOfWeek.isWeekday(i)
        ? this.#NickNamesForWeekday.getNext()
        : this.#NickNamesForWeekend.getNext();
    }
  }
}
export default WorkerPlanner;
