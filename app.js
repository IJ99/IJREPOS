const ComputerchoiceDisplay = document.getElementById('computer-choice')
const UserchoiceDisplay = document.getElementById('User-choice')
const resultDisplay = document.getElementById('result')
const possiblechoices =document.querySelectorAll('button')

let Userchoice

possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) => {
    Userchoice = e.target.id 
    UserchoiceDisplay.innerHTML = Userchoice
    generatecomputerchoice()
}))
