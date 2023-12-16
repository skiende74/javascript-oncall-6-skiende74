import InputView from './views/InputView.js';
import { Console } from '@woowacourse/mission-utils';
class App {
  async run() {
    const input = await InputView.readMonthAndDayOfWeek();
    Console.print(input.get());
    const input2 = await InputView.readNickNamesSet();
    Console.print(input2.get());
  }
}

export default App;
