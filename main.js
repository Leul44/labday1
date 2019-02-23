let name = prompt("whats your name")
let classs = prompt("whats your class level")
let movie = prompt("whats your favorate movie")

let para =document.getElementById('para')

para.innerText = `${name} your class level ${classs} your movie type is ${movie}`

confirm(`${name} your class level ${classs} your movie type is ${movie}`)