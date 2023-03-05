const { afterEach } = require('node:test')
const square = require('./square')


describe('anyName', () => {
  //Вызываются перед каждым тестом
  //запускается перед тестами, тут можно создать моковые данные или еще что то
  let mockValue = null
  beforeEach(() => {
    mockValue = 5
  })

  //вызывается один раз
  beforeAll(()=> {})


  test('Корректное значение square', () => {
    expect(square(mockValue)).toBe(4)
    expect(square(2)).toBeLessThan(5)
    expect(square(2)).toBeGreaterThan(3)
    expect(square(2)).not.toBeUndefined()
  })
  
  //запускаются после тестов
  //удалить что то, например очистить переменные сверху
  afterEach(() => {})
  afterAll()
  })
