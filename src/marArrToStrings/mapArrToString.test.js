const mapArrToStrings = require('./mapArrToStrings')



describe('mapArrToStrings', () => {
  test('Корректное значение arr', () => {
    //метод toEqual потому-что массивы нельхя сравнить через Be, они ссылочные
    expect(mapArrToStrings([1,2,3])).toEqual(['1','2', '3'])
  })

  test('Разные значения', () => {
    //метод toEqual потому-что массивы нельхя сравнить через Be, они ссылочные
    expect(mapArrToStrings([1, null, 3, undefined])).toEqual(['1','2', '3'])
  })

    test('Пустой массив', () => {
    //приставка not это отрицание(не равен 1234)
    expect(mapArrToStrings([])).not.toEqual(['1','2', '3', '4'])
  })



  })
