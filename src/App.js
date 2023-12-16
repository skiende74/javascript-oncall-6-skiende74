import InputView from './views/InputView.js';
import { Console } from '@woowacourse/mission-utils';
class App {
  async run() {
    const input = await InputView.readMonthAndDayOfWeek();
    Console.print(input);
    const input2 = await InputView.readNickNames();
  }
}

export default App;
