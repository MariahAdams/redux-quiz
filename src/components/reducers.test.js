import { greeting, GREETING_CHANGE, name } from './reducers';

describe('reducers', () => {

  it('defaults to hello', () => {
    const state = greeting('Hello', {});
    expect(state).toBe('Hello');
  });

  it('returns new greeting', () => {
    const data = { greeting: 'Guten Morgen' };
    const state = greeting('', {
      type: GREETING_CHANGE,
      payload: data
    });
    expect(state).toBe(data);
  });

  it('defaults to empty string', () => {
    const state = name('', {});
    expect(state).toBe('');
  });
});