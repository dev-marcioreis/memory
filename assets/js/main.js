const section = document.querySelector('section')
const playerCount = document.querySelector('span')
const playerLives = 0

playerCount.textContent = playerLives

const getData = () => [
    {
        imgSrc: "./assets/images/apple.webp",
        name: 'maçâ'
    },
    {
        imgSrc: './assets/images/banana.webp',
        name: 'banana'
    },
    {
        imgSrc: './assets/images/kiwi.webp',
        name: 'kiwi'
    },
    {
        imgSrc: './assets/images/mango.webp',
        name: 'manga'
    },
    {
        imgSrc: './assets/images/orange.webp',
        name: 'laranja'
    },
    {
        imgSrc: './assets/images/pear.webp',
        name: 'pera'
    },
    {
        imgSrc: './assets/images/pineapple.webp',
        name: 'abacaxi'
    },
    {
        imgSrc: './assets/images/strawberry.webp',
        name: 'morango'
    },
    {
        imgSrc: './assets/images/watermelon.webp',
        name: 'melância'
    },
    {
        imgSrc: './assets/images/grape.webp',
        name: 'uva'
    },
    {
        imgSrc: './assets/images/peach.webp',
        name: 'pessêgo'
    },
    {
        imgSrc: './assets/images/tangerine.webp',
        name: 'tagerina'
    },
    {
        imgSrc: './assets/images/lemon.webp',
        name: 'limão'
    },
    {
        imgSrc: './assets/images/pomegranate.webp',
        name: 'romã'
    },
    {
        imgSrc: './assets/images/fig.webp',
        name: 'figo'
    },
    {
        imgSrc: './assets/images/plum.webp',
        name: 'ameixa'
    },
    {
        imgSrc: './assets/images/apple.webp',
        name: 'maçâ'
    },
    {
        imgSrc: './assets/images/banana.webp',
        name: 'banana'
    },
    {
        imgSrc: './assets/images/kiwi.webp',
        name: 'kiwi'
    },
    {
        imgSrc: './assets/images/mango.webp',
        name: 'manga'
    },
    {
        imgSrc: './assets/images/orange.webp',
        name: 'laranja'
    },
    {
        imgSrc: './assets/images/pear.webp',
        name: 'pera'
    },
    {
        imgSrc: './assets/images/pineapple.webp',
        name: 'abacaxi'
    },
    {
        imgSrc: './assets/images/strawberry.webp',
        name: 'morango'
    },
    {
        imgSrc: './assets/images/watermelon.webp',
        name: 'melância'
    },
    {
        imgSrc: './assets/images/grape.webp',
        name: 'uva'
    },
    {
        imgSrc: './assets/images/peach.webp',
        name: 'pessêgo'
    },
    {
        imgSrc: './assets/images/tangerine.webp',
        name: 'tagerina'
    },
    {
        imgSrc: './assets/images/lemon.webp',
        name: 'limão'
    },
    {
        imgSrc: './assets/images/pomegranate.webp',
        name: 'romã'
    },
    {
        imgSrc: './assets/images/fig.webp',
        name: 'figo'
    },
    {
        imgSrc: './assets/images/plum.webp',
        name: 'ameixa'
    },
];

const randomize = () => {

    const cardData = getData()
    cardData.sort(() => Math.random() - 0.5)

    return cardData
}

const cardGenerator = () => {

    const cardData = randomize()

    cardData.forEach(item => {
        
        const card = document.createElement('div')
        const face = document.createElement('img')
        const back = document.createElement('div')

        card.classList = 'card'
        face.classList = 'face'
        back.classList = 'back'

        face.src = item.imgSrc

        section.appendChild(card)
        card.appendChild(face)
        card.appendChild(back)

    })

}

cardGenerator()