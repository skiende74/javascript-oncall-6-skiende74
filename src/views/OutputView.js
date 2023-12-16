import { Console } from '@woowacourse/mission-utils';
import Conditions from '../constants/Conditions.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },
  printPlan(plan, monthAndDayOfWeek) {
    const month = monthAndDayOfWeek.getMonth();
    for (let i = 0; i < monthAndDayOfWeek.getMaxDay(); i++) {
      const specialNotify = monthAndDayOfWeek.isSpecialDay(i + 1)
        ? '(휴일)'
        : '';
      const dayOfWeek = monthAndDayOfWeek.getDayOfWeek(i + 1) + specialNotify;
      OutputView.print(`${month}월 ${i + 1}일 ${dayOfWeek} ${plan[i]}`);
    }
  },
};

export default OutputView;
