import NickNames from '../src/domains/NickNames';

describe('닉네임들', () => {
  test.each(['감자,버터,고구마,김치,포도'])('올바른 입력', (nicknames) => {
    expect(() => new NickNames(nicknames)).not.toThrow();
  });

  test.each(['감자,버터,고구마,김치,포도김치감자'])(
    '닉네임 길이초과',
    (nicknames) => {
      expect(() => new NickNames(nicknames)).toThrow('[ERROR]');
    },
  );

  test.each(['감자,버터,고구마,김치,포도,버터'])('중복', (nicknames) => {
    expect(() => new NickNames(nicknames)).toThrow('[ERROR]');
  });

  const LONG_INPUT =
    '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36';
  test.each(['감자,사과', LONG_INPUT])('닉네임 갯수는 5~35', (nicknames) => {
    expect(() => new NickNames(nicknames)).toThrow('[ERROR]');
  });
});
