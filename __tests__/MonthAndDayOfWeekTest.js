import MonthAndDayOfWeek from '../src/domains/MonthAndDayOfWeek';

describe('월, 시작요일 입력', () => {
  test.each(['5,금', '4,일'])('올바른 입력', (string) => {
    expect(() => new MonthAndDayOfWeek(string)).not.toThrow();
  });

  test.each([',', '5/금', '5,금,'])('잘못된 형식', (string) => {
    expect(() => new MonthAndDayOfWeek(string)).toThrow('[ERROR]');
  });

  test.each(['3.3,금', '-1.1,금,'])('월은 정수로 입력', (string) => {
    expect(() => new MonthAndDayOfWeek(string)).toThrow('[ERROR]');
  });

  test.each(['13,금', '-1,금', '0,금'])('월의 범위는 1~12', (string) => {
    expect(() => new MonthAndDayOfWeek(string)).toThrow('[ERROR]');
  });
});
