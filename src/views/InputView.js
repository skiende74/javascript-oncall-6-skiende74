import { Console } from '@woowacourse/mission-utils';
import OutputView from './OutputView.js';
import MonthAndDayOfWeek from '../domains/MonthAndDayOfWeek.js';
import NickNames from '../domains/NickNames.js';

const Private = {
  async readMonthAndDayOfWeek() {
    return await Console.readLineAsync(
      '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
    );
  },

  async readWorkerNickNamesForWeekday() {
    return await Console.readLineAsync(
      '평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
    );
  },

  async readWorkerNickNamesForWeekend() {
    return await Console.readLineAsync(
      '평일 비상 근무 순번대로 사원 닉네임을 입력하세요>',
    );
  },

  async readWorkerNickNamesSet() {
    return [
      await Private.readWorkerNickNamesForWeekday(),
      await Private.readWorkerNickNamesForWeekend(),
    ];
  },

  async robustInput(readline, Object) {
    while (true) {
      try {
        const input = await readline();
        return new Object(input);
      } catch (e) {
        OutputView.print(e.message);
      }
    }
  },
};

const InputView = {
  async readMonthAndDayOfWeek() {
    return Private.robustInput(
      Private.readMonthAndDayOfWeek,
      MonthAndDayOfWeek,
    );
  },
  async readNickNamesSet() {
    return Private.robustInput(Private.readWorkerNickNamesSet, NickNamesSet);
  },
};

export default InputView;
