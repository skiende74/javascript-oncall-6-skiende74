import InputView from './views/InputView.js';
import { Console } from '@woowacourse/mission-utils';
class App {
  async run() {
    const input = await InputView.readMonthAndDayOfWeek();
    Console.print(input);
  }
}

export default App;
