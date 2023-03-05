const validateValue = require('./validateValue')


test('Валидация значения', () => {
  expect(validateValue(50)).toBe(true)
});

describe('validateValue', () => {
  test('Корректное значение', () => {
    expect(validateValue(50)).toBe(true)
  })
    test('Меньше корректного', () => {
    expect(validateValue(50)).toBe(true)
    })
    test('Больше корректного', () => {
    expect(validateValue(510)).toBe(false)
  })

  })
