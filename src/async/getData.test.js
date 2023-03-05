const getData = require('./getData')
const axios = require('axios')

// Мокаем тут аксиос, чтоб можно было с ним работать
jest.mock('axios')



//тестирование асинхронной функции
describe('getData async', () => {
  let response;
  beforeEach(() => {
    response = {
    data: [  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },]
    }
  })




  test('async тестирование getData', async () => {
    axios.get.mockReturnValue(response)
    const data = await getData()
    //ожидаю: метод вызовется хотя бы один раз
    expect(axios.get).toBeCalledTimes(1);
    //еще ожидаю: вернутся айдишники приведенные к строке
    //Успешный тест
    expect(data).toEqual(['1', '2']);
    //Тест упадет
    expect(data).toEqual(['1', '2', 3]);

    //снепшоты делают снимок и сохраняют в папку __snapshots для сравнений значений  в будущем.
    //например, если функция начнет возвращать не строки, а number
    expect(data).toMatchSnapshot()
    })
  })



