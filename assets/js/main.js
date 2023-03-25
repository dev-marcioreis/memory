const section = document.querySelector('section')
const playerCount = document.querySelector('span')
const playerLives = 6

playerCount.textContent = playerLives

const getData = () => [
    {
        imgSrc: '../images/apple.webp',
        name: 'maçâ'
    },
    {
        imgSrc: '../images/banana.webp',
        name: 'banana'
    },
    {
        imgSrc: '../images/kiwi.webp',
        name: 'kiwi'
    },
    {
        imgSrc: '../images/mango.webp',
        name: 'mango'
    },
    {
        imgSrc: '../images/orange.webp',
        name: 'orange'
    },
    {
        imgSrc: '../images/pear.webp',
        name: 'pear'
    },
    {
        imgSrc: '../images/pineapple.webp',
        name: 'pineapple'
    },
    {
        imgSrc: '../images/strawberry.webp',
        name: 'strawberry'
    },
    {
        imgSrc: '../images/watermelon.webp',
        name: 'watermelon'
    },
]

const data = getData()