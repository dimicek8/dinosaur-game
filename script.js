let dino = document.getElementById("dino");
let cactus = document.getElementById("cactus");

document.addEventListener("keypress", function(event) {
    if (event.key === " ") {
        jump();
    }
})

function jump() {
    dino.classList.add("jump");
    if (dino.classList != "jump") {
        dino.classList.add("jump");
    } else {
        setTimeout (function() {
            dino.classList.remove("jump")
        }, 500)
    }
}


let isAlive = setInterval (function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 400 && cactusLeft > 300 && dinoTop >= 300) {
        alert("GAME OVER");
    }
}, 10)