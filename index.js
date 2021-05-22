var bg = document.getElementById('particles-js');
document.addEventListener("keydown", function(event) {
    bg.style.backgroundColor = getRandomColor();
    console.log(event)
    playMusic(event.key);
});

function playMusic(key) {
    switch (key) {
        case "d":
            var audio = new Audio("kick1.wav");
            audio.play();
            break;

        case "e":
            var audio = new Audio("kick.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("kick2.mp3");
            audio.play();
            break;

        case "z":
            var audio = new Audio("clap1.wav");
            audio.play();
            break;
    }
}
// generer les couleurs de facon aleatoireS.
function getRandomColor() {
    var letters = "0123456789ABCDEF"
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color = color + letters[Math.floor(Math.random() * 16)];
    }
    return color;
}