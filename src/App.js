import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import { Console } from '@woowacourse/mission-utils';
import WorkerPlanner from './services/WorkerPlanner.js';
class App {
  async run() {
    const monthAndDayOfWeek = await InputView.readMonthAndDayOfWeek();
    OutputView.print(monthAndDayOfWeek.get());
    const nickNamesSet = (await InputView.readNickNamesSet()).get();
    OutputView.print([nickNamesSet[0].get(), nickNamesSet[1].get()]);
    const workerPlanner = new WorkerPlanner(monthAndDayOfWeek, nickNamesSet);
    const plan = workerPlanner.create();
    OutputView.print(plan);
    OutputView.printPlan(plan, monthAndDayOfWeek);
  }
}

export default App;
