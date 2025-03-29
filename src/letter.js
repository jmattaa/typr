const untypedletter = "text-slate-400"
const typedeletter = "text-white"
const wrongletter = "text-red-400/80"

class Letter {
    constructor(letter, typed = false) {
        this.letter = letter
        this.typed = typed
        this.wrong = false
    }

    toString() {
        if (this.wrong)
            return `<span class="${wrongletter}">${this.letter}</span>`
        else if (this.typed)
            return `<span class="${typedeletter}">${this.letter}</span>`
        else
            return `<span class="${untypedletter}">${this.letter}</span>`
    }
}

export class Word {
    constructor(word, d) {
        this.word = word
        this.div = d
        this.letters = []
        this.currentLetter = 0
        for (let i in word) this.letters.push(new Letter(word[i]))

        // do an initial render 🔥
        this.render(this.div)

        this.finished = false
    }

    render() {
        this.div.innerHTML = this.letters.map((l) => l.toString()).join("")

        if (this.currentLetter === this.letters.length) this.finished = true
    }

    nextLetter(key) {
        if (!this.letters[this.currentLetter]) return

        this.letters[this.currentLetter].typed = true
        if (key !== this.letters[this.currentLetter].letter)
            this.letters[this.currentLetter].wrong = true

        this.currentLetter++

        this.render(this.div)
    }

    backspace() {
        if (this.currentLetter > 0) {
            this.currentLetter--
            this.letters[this.currentLetter].typed = false
            this.letters[this.currentLetter].wrong = false
            this.render(this.div)
            this.finished = false
        }
    }

    newWord(word) {
        this.word = word
        this.currentLetter = 0
        this.letters = []
        this.finished = false
        for (let i in this.word) this.letters.push(new Letter(this.word[i]))
        this.render(this.div)
    }
}
