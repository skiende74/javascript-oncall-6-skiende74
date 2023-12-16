import { Console } from '@woowacourse/mission-utils';
import Conditions from '../constants/Conditions.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },
  printPlan(plan, monthAndDayOfWeek) {
    const month = monthAndDayOfWeek.getMonth();
    for (let i = 0; i < monthAndDayOfWeek.getMaxDay(); i++) {
      OutputView.print(
        `${month}월 ${i + 1}일 ${monthAndDayOfWeek.getDayOfWeek(i + 1)} ${
          plan[i]
        }`,
      );
    }
  },
};

export default OutputView;
