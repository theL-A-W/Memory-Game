

// // const imageToDisplay = document.querySelector('#imageToDisplay')
// const button = document.querySelector('#getImagesButton')


// axios.get('https://api.unsplash.com/search/photos?query=animals&client_id=FRXSsWanrUHj9B2wvq288OTm2XYEMDHPUuHIuN1mkQI')

// .then(response => {
//     console.log(response)
// })


// button.addEventListener('click', async () => {

// let imageToDisplay = response.data.results[0].links.download
// let img1 = document.createElement('img')
// img1.setAttribute('class', 'imageToDisplay')
// img1.textContent  = 'First Image:' + imageToDisplay
// document.body.append(img1)
// }
// )
// //////////
// const img = $('#card1')
// const imageToDisplay = document.querySelector('.imageToDisplay')
// imageToDisplay.style.backgroundImage = `url(${img.src})`
// ////////





    const imageArray = [
        `https://media.istockphoto.com/id/1392163011/photo/cute-female-kitten-walking-towards-and-looking-in-the-camera-on-a-pink-background.webp?b=1&s=170667a&w=0&k=20&c=YA2ZIsdH9Qpah-nmbhOvsz9DP8pLJIJ19FUaYAPolM0=`,
        `https://media.istockphoto.com/id/1392163011/photo/cute-female-kitten-walking-towards-and-looking-in-the-camera-on-a-pink-background.webp?b=1&s=170667a&w=0&k=20&c=YA2ZIsdH9Qpah-nmbhOvsz9DP8pLJIJ19FUaYAPolM0=`,
        `https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB1cHB5fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60`,
        `https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB1cHB5fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60`,
        `https://media.istockphoto.com/id/184154297/photo/small-yellow-chickens-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=c_BLTOZ00XZ_XSK5SABhcUKmZ0lEimw8-rX7OsX-S8M=`,
        `https://media.istockphoto.com/id/184154297/photo/small-yellow-chickens-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=c_BLTOZ00XZ_XSK5SABhcUKmZ0lEimw8-rX7OsX-S8M=`,
        `https://images.unsplash.com/photo-1515536765-9b2a70c4b333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60`,
        `https://images.unsplash.com/photo-1515536765-9b2a70c4b333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60`,
        `https://media.istockphoto.com/id/1330878548/photo/cute-calf-with-red-and-white-coat-large-big-eyes-and-pink-nose-lovely-and-innocent.webp?b=1&s=170667a&w=0&k=20&c=NkOzLjkV6ntL9aiFPLSSRWx9n5F5ku3IPCEtTLgUPWs=`,
        `https://media.istockphoto.com/id/1330878548/photo/cute-calf-with-red-and-white-coat-large-big-eyes-and-pink-nose-lovely-and-innocent.webp?b=1&s=170667a&w=0&k=20&c=NkOzLjkV6ntL9aiFPLSSRWx9n5F5ku3IPCEtTLgUPWs=`,
        `https://images.unsplash.com/photo-1501706362039-c06b2d715385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8emVicmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60`, 
        `https://images.unsplash.com/photo-1501706362039-c06b2d715385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8emVicmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60`,
        `https://images.unsplash.com/photo-1548506446-86bfddac5620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmFmZmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60`,
        `https://images.unsplash.com/photo-1548506446-86bfddac5620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmFmZmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60`,
        `https://media.istockphoto.com/id/165847424/photo/goat.webp?b=1&s=170667a&w=0&k=20&c=AJqrrmwgsCp03Iq5upV5hIpQv3krJjpF9ygeRcMgwp0=`,
        `https://media.istockphoto.com/id/165847424/photo/goat.webp?b=1&s=170667a&w=0&k=20&c=AJqrrmwgsCp03Iq5upV5hIpQv3krJjpF9ygeRcMgwp0=`,
        `https://images.unsplash.com/photo-1602847213180-50e43a80bef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNoZWVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60`,
        `https://images.unsplash.com/photo-1602847213180-50e43a80bef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNoZWVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60`,
        `https://images.unsplash.com/photo-1579822269843-3769559ce9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHVja2xpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60`,
        `https://images.unsplash.com/photo-1579822269843-3769559ce9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHVja2xpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60`,
        `https://images.unsplash.com/photo-1555010133-d883506aedee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3F1aXJyZWwlMjBmdW5ueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60`,
        `https://images.unsplash.com/photo-1555010133-d883506aedee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3F1aXJyZWwlMjBmdW5ueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60`,
        `https://media.istockphoto.com/id/162136091/photo/kangaroo-posing-very-much-like-a-human.webp?b=1&s=170667a&w=0&k=20&c=UXGdXCFcNXlWhHppK6gxNvZC6oPehfrUn4CZrpUyywg=`,
        `https://media.istockphoto.com/id/162136091/photo/kangaroo-posing-very-much-like-a-human.webp?b=1&s=170667a&w=0&k=20&c=UXGdXCFcNXlWhHppK6gxNvZC6oPehfrUn4CZrpUyywg=`
    ]
    const cards = document.querySelectorAll('.card')
let isFlipped = Array(cards.length).fill(false)
let firstCard, secondCard
let lockBoard = false

function match(){
    const  firstCardURL = imageArray[firstCard]
    const secondCardURL = imageArray[secondCard]

    if (firstCardURL === secondCardURL)
    firstCard = null
    secondCard = null
}

function flipCard(index) {
  if (lockBoard) return
  if (isFlipped[index]) return

  cards[index].style.backgroundImage = `url(${imageArray[index]})`
  isFlipped[index] = true

  if (!firstCard) {
    firstCard = index
    return
  }

  secondCard = index
  checkForMatch()
}


//shuffles the array so the images are in a different order each time, ie. on different cards
    function shuffleArray(array)  {
        for  (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp  = array[i]
            array[i] = array[j]
            array[j]= temp

        }
    }
    shuffleArray(imageArray)












//Timer functionality
    function startTimer(duration, display) {
        let timer = duration, minutes, seconds
        setInterval(function () {
            minutes = parseInt(timer/60,  10)
            seconds = parseInt(timer % 60, 10)

            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0"  + seconds : seconds

//displaying how the time will be shown
            display.textContent = minutes +  ":" + seconds

// itinializing a stop of the timer once it reaches 0
    if (timer <= 0) {
        clearInterval(intervalId)
        }
        if (--timer < 0) {
            timer = 0
        }

        }, 1000)
    }

    function stopTimer () {
        clearInterval(intervalId)
    }
//this starts a 1 minute(60 seconds) timer when the window loads aka when you press refresh
//hardButton = document.getElementById('hard')
//hard.onload = function (){...
// ^^ above 2 lines start the timer when "hard button is pressed, but the seconds don't count down properly"
        window.onload = function () {
            // const twoMinutes = 120, 
            const oneMinute = 60,
            display = document.getElementById('timer')
            startTimer(oneMinute, display)
        }

// ^^ I want to add an "if" statement to this to start the timer only when the "hard" button is pressed






































    
// //shuffles the array so the images are in a different order each time, ie. on different cards
//     function shuffleArray(array)  {
//         for  (let i = array.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1))
//             const temp  = array[i]
//             array[i] = array[j]
//             array[j]= temp

//         }
//     }
//     shuffleArray(imageArray)

//     let flippedCards  =  []
//     let cardLocked  = false
//     let score  =  0
//     let clicks =  0



// // puts images on cards
// for (let i = 0; i < imageArray.length; i++) {
//     const cardClass = "card" + (i +1)
//     const card= document.getElementById(cardClass)
//     card.style.backgroundImage = `url(${imageArray[i]})`
//     card.style.backgroundRepeat = "no-repeat"
//     card.style.backgroundSize = "cover"
// }






// const carrds = document.querySelectorAll('.card')
//     card.forEach((card, index) => {
//         card.addEventListener('click', () => {
//             if (cardLocked) return
          

//             if (flippedCards.includes(card) || card.style.backgroundImage !== 'none') return
           
//             card.style.backgroundImage = `url(${imageArray[index]})`
//                 flippedCards.push(card)

//                 clicks += 1
//                 document.querySelector('.clickBoard').textContent = clicks

//             if (flippedCards.length === 2) {
//                 cardLocked = true

//             if  (flippedCards[0].style.backgroundImage === flippedCards[1].style.backgroundImage){
//                     flippedCards = []
//                     cardLocked  = false
//                     score +=1
//                     document.querySelector('.scoreBoard').textContent = score
//             } else{
//                 setTimeout(() => {
//                     flippedCards.forEach(card => {
//                         card.style.backgroundImage = ''
//                 })
//                     flippedCards =  []
//                     cardLocked  =  false
//                 }, 1000)
//             }
//         }
//     })








//     let intervalId

// //Timer functionality
//     function startTimer(duration, display) {
//         let timer = duration, minutes, seconds
//         setInterval(function () {
//             minutes = parseInt(timer/60,  10)
//             seconds = parseInt(timer % 60, 10)

//             minutes = minutes < 10 ? "0" + minutes : minutes
//             seconds = seconds < 10 ? "0"  + seconds : seconds

// //displaying how the time will be shown
//             display.textContent = minutes +  ":" + seconds

// // itinializing a stop of the timer once it reaches 0
//     if (timer <= 0) {
//         clearInterval(intervalId)
//         }
//         if (--timer < 0) {
//             timer = 0
//         }

//         }, 1000)
//     }

//     function stopTimer () {
//         clearInterval(intervalId)
//     }
// //this starts a 1 minute(60 seconds) timer when the window loads aka when you press refresh
// //hardButton = document.getElementById('hard')
// //hard.onload = function (){...
// // ^^ above 2 lines start the timer when "hard button is pressed, but the seconds don't count down properly"
//         window.onload = function () {
//             // const twoMinutes = 120, 
//             const oneMinute = 60,
//             display = document.getElementById('timer')
//             startTimer(oneMinute, display)
//         }

//     })
// })
// ^^ I want to add an "if" statement to this to start the timer only when the "hard" button is pressed
