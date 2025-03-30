const untypedletter = "text-slate-400"
const typedeletter = "text-white"
const wrongletter = "text-red-400/80"

const renderNextWord = (d, w) => {
    d.innerHTML = `<span class="${untypedletter}">${w}</span>`
}

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

export const currentWord = {
    new(allwords, d, nwd) {
        this.allwords = allwords
        this.word =
            this.word || allwords[Math.floor(Math.random() * allwords.length)];
        this.div = d;
        this.nextWordDiv = nwd;
        this.letters = [];
        this.currentLetter = 0;
        this.finished = false;

        this.nextWord = allwords[Math.floor(Math.random() * allwords.length)];
        renderNextWord(this.nextWordDiv, this.nextWord);

        for (let i = 0; i < this.word.length; i++)
            this.letters.push(new Letter(this.word[i]));

        // Do an initial render 🔥
        this.render();
    },

    reset() {
        this.word = null;
        this.div = null;
        this.nextWordDiv = null;
        this.letters = [];
        this.currentLetter = 0;
        this.finished = false;
    },

    render() {
        if (this.div) {
            this.div.innerHTML = this.letters.map((l) => l.toString()).join("");
        }

        if (this.currentLetter === this.letters.length) {
            this.finished = true;
        }
    },

    nextLetter(key) {
        if (!this.letters[this.currentLetter]) return;

        this.letters[this.currentLetter].typed = true;
        if (key !== this.letters[this.currentLetter].letter) {
            this.letters[this.currentLetter].wrong = true;
        }

        this.currentLetter++;
        this.render();
    },

    backspace() {
        if (this.currentLetter > 0) {
            this.currentLetter--;
            this.letters[this.currentLetter].typed = false;
            this.letters[this.currentLetter].wrong = false;
            this.render();
            this.finished = false;
        }
    },

    next() {
        this.word = this.nextWord;
        this.new(this.allwords, this.div, this.nextWordDiv);
    }
}
