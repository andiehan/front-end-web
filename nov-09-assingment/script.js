document.getElementById("random").addEventListener("click", getRandomApis)


function getRandomApis() {
    getRicks();
}

let isCharacterAlive = "Alive";

function getRicks() {
    fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 826)}`)
        .then(response => response.json()
            .then(data => {
                document.getElementById("rickImg").src = data.image;
                console.log(data.name);
                console.log(data.status);
                isCharacterAlive = data.status;

                document.getElementById("name").innerHTML = data.name;
            }))
}


let deadButton = document.getElementById('dead');
let aliveButton = document.getElementById('alive');
let unknownButton = document.getElementById('unknown');

let score = Number(document.getElementById("score").innerHTML);
console.log(score);


aliveButton.addEventListener("click", () => {
    if (isCharacterAlive == "Alive") {
        document.body.style.backgroundColor = "green";
        score += 1;
    }
    else {
        document.body.style.backgroundColor = "red";
        score -= 1;
    }
    document.getElementById("score").innerHTML = score;
    recallChr();
})

deadButton.addEventListener("click", () => {
    if (isCharacterAlive == "Dead") {
        document.body.style.backgroundColor = "green";
        score += 1;
    }
    else {
        document.body.style.backgroundColor = "red";
        score -= 1;
    }
    document.getElementById("score").innerHTML = score;
    recallChr();
})

unknownButton.addEventListener("click", () => {
    if (isCharacterAlive == "unknown") {
        document.body.style.backgroundColor = "green";
        score += 1;
    }
    else {
        document.body.style.backgroundColor = "red";
        score -= 1;
    }
    document.getElementById("score").innerHTML = score;
    recallChr();
})


function recallChr() {
    setTimeout(() => {
        getRicks();
        document.body.style.backgroundColor = "white";
    }, 2000);


}