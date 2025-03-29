export const renderWord = (d, w, i) => {
    d.innerHTML = w.map((letter, index) => {
        if (index < i) {
            return `<span class="${typedeletter}">${letter}</span>`
        }
        else
            return `<span class="${untypedletter}">${letter}</span>`
    }).join("")
}
