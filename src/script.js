const currentwordDiv = document.getElementById('current-word')

const commonwords = await fetch("src/commonwords.txt")
    .then(res => res.text())
    .then(text => text.split(" "))

let currentword = commonwords[Math.floor(Math.random() * commonwords.length)]
currentwordDiv.innerHTML = currentword

const keyevts = {
    r: () => {
        currentword = commonwords[Math.floor(Math.random() * commonwords.length)]
        currentwordDiv.innerHTML = currentword
    }
}

document.addEventListener('keydown', (e) => {
    if (keyevts[e.key]) {
        keyevts[e.key]()
    }
})
