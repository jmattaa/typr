import { currentWord } from "./word.js"

const currentwordDiv = document.getElementById('current-word')
const nextwordDiv = document.getElementById('next-word')

const allwords = await fetch("src/commonwords.txt")
    .then(res => res.text())
    .then(text => text.split(" "))

currentWord.new(allwords, currentwordDiv, nextwordDiv)

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "Escape":
            currentWord.reset()
            currentWord.new(allwords, currentwordDiv, nextwordDiv)
            return
        case "Backspace":
            currentWord.backspace()
            return
        case " ":
        case "Enter":
            currentWord.finished && currentWord.next()
            return
    }
    currentWord.nextLetter(e.key)
})
