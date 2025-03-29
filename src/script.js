import { renderWord } from "./utils.js"

const currentwordDiv = document.getElementById('current-word')

const allwords = await fetch("src/commonwords.txt")
    .then(res => res.text())
    .then(text => text.split(" "))

let currentWord =
    allwords[Math.floor(Math.random() * allwords.length)].split("")
let currentLetter = 0

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case currentWord[currentLetter]:
            nextLetter()
            break

        case "Escape":
            currentLetter = 0
            currentWord =
                allwords[Math.floor(Math.random() * allwords.length)].split("")
            renderWord(currentwordDiv, currentWord, currentLetter)
            break
    }
})

const nextLetter = () => {
    currentLetter++
    renderWord(currentwordDiv, currentWord, currentLetter)
}

renderWord(currentwordDiv, currentWord, currentLetter)
