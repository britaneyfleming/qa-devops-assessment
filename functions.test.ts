const {shuffleArray} = require('./utils')
let testData = {
    id: 0,
    name: 'The Hammer', 
    imgAddress: 'https://robohash.org/hammer',
    health: 100, 
    attacks: [
        {
            id: 0, 
            damage: 25
        }, 
        {
            id: 1, 
            damage: 30
        }
    ]
  } 
describe('shuffleArray should return', () => {

    test('shuffleArray should return an array',() => {
    let shuffledArray = shuffleArray(testData.attacks)
    expect(typeof shuffledArray).toBe([])
})

test('shuffleArray should return an array of the same length as the argument sent in',() => {
    let shuffledArray = shuffleArray(testData.attacks)
    expect(shuffledArray).toBe(testData.attacks)
  }) 

})