"use strict";
//가위바위보
var imgCoords = "0";
var rsp = {
    ROCK: "0",
    SCISSORS: "-142px",
    PAPER: "-284px"
};
var score = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1
};
function computerChoice(imgCoords) {
    return Object.keys(rsp).find(function (k) { return rsp[k] === imgCoords; });
}
var interval;
document.querySelectorAll(".btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        clearInterval(interval);
        setTimeout(intervalMaker, 2000);
        var myChoice = this.textContent;
        var myScore = score[myChoice];
        var computerScore = score[computerChoice(imgCoords)];
        var diff = myScore - computerScore;
        if (diff === 0) {
            console.log("비겼습니다.");
        }
        else if ([-1, 2].includes(diff)) {
            console.log("이겼습니다!!");
        }
        else {
            console.log("졌습니다.");
        }
    });
});
function intervalMaker() {
    interval = setInterval(function () {
        if (imgCoords === rsp.ROCK) {
            imgCoords = rsp.SCISSORS;
        }
        else if (imgCoords === rsp.SCISSORS) {
            imgCoords = rsp.PAPER;
        }
        else {
            imgCoords = rsp.ROCK;
        }
        if (document.querySelector("#computer")) {
            document.querySelector("#computer").style.background = "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " + imgCoords + " 0";
        }
    }, 100);
}
intervalMaker();
