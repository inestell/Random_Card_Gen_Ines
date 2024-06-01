function randomNumberGenerator () {
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let index = Math.floor(Math.random() * numbers.length);
    return numbers[index]
}

function randomSuitGenerator () {
    let suits = ["♦", "♥", "♠", "♣"];
    let index = Math.floor(Math.random() * suits.length);
    return suits[index];
}

setInterval(() => {
    let suit = randomSuitGenerator();
    if(suit === "♦" || suit === "♥") {
        document.querySelector("#top-suit").classList.add("red-suits");
        document.querySelector("#bottom-suit").classList.add("red-suits")
    } else {
        document.querySelector("#top-suit").classList.remove("red-suits");
        document.querySelector("#bottom-suit").classList.remove("red-suits");
    }
    document.querySelector("#top-suit").innerHTML = suit;
    document.querySelector("#bottom-suit").innerHTML = suit;
    document.querySelector("h1").innerHTML = randomNumberGenerator();
}, 1000)