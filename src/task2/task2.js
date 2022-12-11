//Напишите функцию countDown(n), которая получает число {n} в качестве аргумента и печатает в консоль обратный отсчет, начиная с этого числа.//
// Например, countDown(3) напечатает: 3 2 1.//
const countDown = s => {
    const result = []
    for (let i = s; i > 0; i--) result.push(i)
    return result
  }
  
  module.exports = countDown
  
  if (require.main === module) {
    console.log('index started')
    console.log('result=', countDown(3))
  }
