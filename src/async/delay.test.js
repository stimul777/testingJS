const delay = require('./delay')


//тестирование асинхронной функции
describe('delay async', () => {
  test('async тестирование', async () => {
    const sum = await delay(()=> 5+5, 1000)
    expect(sum).toBe(10)
  })
  })
