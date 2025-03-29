import { Word } from "./letter.js"

const currentwordDiv = document.getElementById('current-word')

const allwords = await fetch("src/commonwords.txt")
    .then(res => res.text())
    .then(text => text.split(" "))

let currentWord = new Word(
    allwords[Math.floor(Math.random() * allwords.length)],
    currentwordDiv
)

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "Escape":
            currentWord.newWord(
                allwords[Math.floor(Math.random() * allwords.length)]
            )
            return
        case "Backspace":
            currentWord.backspace()
            return
        case " ":
        case "Enter":
            currentWord.finished && currentWord.newWord(
                allwords[Math.floor(Math.random() * allwords.length)]
            )
            return
    }
    currentWord.nextLetter(e.key)
})
