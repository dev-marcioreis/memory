const section = document.querySelector('section')
const playerCount = document.querySelector('span')
let playerLives = 20

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

    cardData.forEach( item => {
        
        const card = document.createElement('div')
        const face = document.createElement('img')
        const back = document.createElement('div')

        card.classList = 'card'
        face.classList = 'face'
        back.classList = 'back'

        face.src = item.imgSrc
        card.setAttribute('name', item.name)

        section.appendChild(card)
        card.appendChild(face)
        card.appendChild(back)

        card.addEventListener('click', e => {
            card.classList.toggle('active')
            checkCards(e)
        })

    })

}

const checkCards = e => {

    console.log(e)
    const clickedCard = e.target
    clickedCard.classList.add('flip')
    const flippedCards = document.querySelectorAll('.flip')
    const toggleCard = document.querySelectorAll('.active')

    if(flippedCards.length === 2) {
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            flippedCards.forEach(card => {
                card.classList.remove('flip')
                card.style.pointerEvents = 'none'
            })
        } else {
            flippedCards.forEach(card => {
                card.classList.remove('flip')
                setTimeout( () => card.classList.remove('active'), 1000)
            })

            playerLives--;
            playerCount.textContent = playerLives;

            if(playerLives === 0) {
                restart('Não foi dessa vez, tente novamente.')
            }
        }
    }

    if(toggleCard.length === 32) {
        restart('Parabéns, você acertou todos.')
    }
}

const restart = (text) => {

    let cardData = randomize()
    let faces = document.querySelectorAll('.face')
    let cards = document.querySelectorAll('.card')

    section.style.pointerEvents = 'none'

    cardData.forEach((item, index) => {
        cards[index].classList.remove('active')
        
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all'
            faces[index].src = item.imgSrc
            cards[index].setAttribute('name', item.name)
            section.style.pointerEvents = 'all'
        }, 1000)
    })

    playerLives = 20
    playerCount.textContent = playerLives

    setTimeout(() => window.alert(text), 100)

}

cardGenerator()