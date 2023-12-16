import MonthAndDayOfWeek from '../domains/MonthAndDayOfWeek.js';
import Conditions from '../constants/Conditions.js';
class WorkerPlanner {
  #MonthAndDayOfWeek;

  #NickNamesForWeekday;

  #NickNamesForWeekend;

  #plan = [];

  constructor(monthAndDayOfWeek, nickNamesSet) {
    this.#MonthAndDayOfWeek = monthAndDayOfWeek;
    this.#NickNamesForWeekday = nickNamesSet[0];
    this.#NickNamesForWeekend = nickNamesSet[1];
  }

  create() {
    this.#createRawPlan();
    this.#preventContinuousWork();
    return this.#plan;
  }

  #createRawPlan() {
    const month = this.#MonthAndDayOfWeek.getMonth();
    for (let i = 0; i < Conditions.MAX_DAYS[month]; i++) {
      this.#plan[i] = this.#MonthAndDayOfWeek.isWeekday(i + 1)
        ? this.#NickNamesForWeekday.getNext()
        : this.#NickNamesForWeekend.getNext();
    }
  }

  #preventContinuousWork() {
    const month = this.#MonthAndDayOfWeek.getMonth();
    for (let i = 1; i < Conditions.MAX_DAYS[month]; i++) {
      if (this.#plan[i] === this.#plan[i - 1]) {
        this.#swapWithNextWorker(i);
      }
    }
  }

  #swapWithNextWorker(i) {
    const month = this.#MonthAndDayOfWeek.getMonth();
    for (let j = i + 1; j <= Conditions.MAX_DAYS[month]; j++) {
      if (
        this.#MonthAndDayOfWeek.isWeekday(i + 1) ===
        this.#MonthAndDayOfWeek.isWeekday(j + 1)
      ) {
        [this.#plan[i], this.#plan[j]] = [this.#plan[j], this.#plan[i]];
        return;
      }
    }
  }
}
export default WorkerPlanner;
