const main = document.querySelector("main#main")
main.remove()

let element = document.createElement("h1")
element.id = "victory"
document.body.appendChild(element)

const newHeader = document.querySelector("h1#victory")
newHeader.innerHTML = "Caleb is the champion"