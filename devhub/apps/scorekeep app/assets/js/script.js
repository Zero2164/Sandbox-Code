//Score Keeper App
function theScoreKeeper() {
    var sKApp = document.getElementById("SKapp");
    var startG = document.getElementById("startGame");
    var startGcon = document.getElementById("myContainer");
    var resetScor = document.getElementById("reset");
    var resetG = document.getElementById("gameReset");
    var p1butt = document.getElementById("p1Plus");
    var p2butt = document.getElementById("p2Plus");
    var pOnebutt = document.getElementById("p1Min");
    var pTwobutt = document.getElementById("p2Min");
    var p1Num = document.getElementById("p1ScoreNum");
    var p2Num = document.getElementById("p2ScoreNum");
    var pName1 = document.getElementById("pOneName");
    var pName2 = document.getElementById("pTwoName");
    var pName1Style = document.getElementById("pOneNameStyle");
    var pName2Style = document.getElementById("pTwoNameStyle");
    var pName1Img = document.getElementById("pName1Img");
    var pName2Img = document.getElementById("pName2Img");
    var goals = document.getElementById("goal");
    var goalImg = document.getElementById("goalImg");
    var goalWord = document.getElementById("goalWord");
    var gRound = document.getElementById("round");
    var roundImg = document.getElementById("roundImg");
    var roundWord = document.getElementById("roundWord");
    var playOne = document.getElementById("pOne");
    var playTwo = document.getElementById("pTwo");
    var bulk1 = document.getElementById("incra1");
    var bulk2 = document.getElementById("incra2");
    var question = document.getElementsByClassName("fa-question-circle");
    var p1Score = 0;
    var p2Score = 0;
    var p1Point = 0;
    var p2Point = 0;
    var targRound = 0;
    var gameOver = false;
    var gameStart = false;
    var round = 1;
    var winWinChickenDinR = 0; //Adjust me to change winning numerical value!!

    function startGameBTN() {
        var pos = -10;
        var id = setInterval(frame, 5);
        function frame() {
            if (pos == 25) {
                clearInterval(id);
            } else {
                pos++;
                startG.style.right = pos + 'px';
                startG.style.left = pos + 'px';
            };
        };
    };
    startGameBTN();

    startG.addEventListener("click", function () {
        gameStart = true;
        document.getElementById("skAppMainTitle").classList.add("mobileview");
        gameBegin();

    });

    function elusion() {
        // startG.hidden = false;
        // startGcon.hidden = false;
        sKApp.hidden = true;
        resetG.hidden = true;
        resetScor.hidden = true;
    };

    function targetNum() {
        if (!gameOver) {
            var tar = Number(prompt(" Enter Winning Number "));
            goals.textContent = tar;
            winWinChickenDinR = tar;
            bulk1.setAttribute("max", Number(tar));
            bulk2.setAttribute("max", Number(tar));
            p1Score = 0;
            p2Score = 0;
            gRound.textContent = round + "/" + targRound;
            console.log("The target number is: " + tar);
            if (winWinChickenDinR <= 0) {
                alert("NUMBER CANNOT BE LESS OR EQUAL TO 0");
                bulk1.value = "";
                bulk2.value = "";
                targetNum();
                return false;
            };
            if (isNaN(winWinChickenDinR)) {
                alert("HAS TO BE A NUMBER STUPID!!");
                bulk1.value = "";
                bulk2.value = "";
                targetNum();
                return false;
            };
            if (winWinChickenDinR > 9999) {
                alert("NUMBER MUST BE LESS THAN 10000");
                bulk1.value = "";
                bulk2.value = "";
                targetNum();
                return false;
            };
        };
    };

    function gameBegin() {
        sKApp.hidden = false;
        resetG.hidden = false;
        resetScor.hidden = false;
        startG.hidden = true;
        startGcon.hidden = true;
        targetNum();
        targRoundFunc();
        if (gameStart) {
            if (targRound <= 0) {
                targRound = 1;
                console.log("Up to Round " + targRound);
                gRound.textContent = round + "/" + targRound;
            } else {
                gRound.textContent = round + "/" + targRound;
                console.log("The target round is: " + targRound);
                console.log("Up to Round " + round);
            }
            gameStart = false;
        };
    };

    function targRoundFunc() {
        if (!gameOver) {
            targRound = Number(prompt(" Enter How Many Rounds "));
            if (targRound < 1) {
                alert("NUMBER CANNOT BE LESS THAN 1!!");
                targRoundFunc();
                return false;
            } else if (isNaN(targRound)) {
                alert("HAS TO BE A NUMBER STUPID!!");
                targRoundFunc();
                return false;
            } else if (targRound > 9999) {
                alert("NUMBER MUST BE LESS THAN 10000");
                targRoundFunc();
                return false;
            } else if (targRound < round) {
                alert("ROUND NUMBER MUST BE EQUAL TO OR MORE THAN CURRENT ROUND!!");
                targRoundFunc();
                return false;
            } else {
                gRound.textContent = round + "/" + targRound;
                console.log("The target round is: " + targRound);
                console.log("Up to Round " + round);
                roundIsSelected = false;
                return false;
            };
        };

    };

    function targRoundAdd() {
        var yeye = confirm("Want to alter round number ?");
        if (yeye) {
            targRoundFunc();
        };
    };

    function targetRound() {
        if (!gameOver) {
            if (round === targRound) {
                gameOver = true;
                pageStart = false;
                console.log("Game Over!");
                alert(" ALL ROUNDS COMPLETE! ");
                if (p1Point > p2Point) {
                    p1Num.style.color = "chartreuse";
                    playOne.style.color = "chartreuse";
                    p2Num.style.color = "red";
                    playTwo.style.color = "red";
                    console.log("The Winner of the Game is " + pName1.textContent + " !");
                    alert("The Winner of the Game is " + pName1.textContent + " !");
                    return true;
                }
                if (p1Point < p2Point) {
                    p1Num.style.color = "red";
                    playOne.style.color = "red";
                    p2Num.style.color = "chartreuse";
                    playTwo.style.color = "chartreuse";
                    console.log("The Winner of the Game is " + pName2.textContent + " !");
                    alert("The Winner of the Game is " + pName2.textContent + " !");
                    return true;
                }
                if (p1Point === p2Point) {
                    console.log("There is no winner, it was a tie!");
                    alert("There is no winner, it was a tie!");
                    return true;
                }
            } else {
                round++;
                gRound.textContent = round + "/" + targRound;
                wipeScores();
                console.log("Up to Round " + round);
            };
        };
    };

    function wipeScores() {
        p1Score = 0;
        p2Score = 0;
        p1Num.textContent = 0;
        p2Num.textContent = 0;
        p1Num.style.color = "white";
        playOne.style.color = "white";
        p2Num.style.color = "white";
        playTwo.style.color = "white";
        bulk1.value = "";
        bulk2.value = "";
        p1butt.disabled = false;
        p2butt.disabled = false;
        pOnebutt.disabled = false;
        pTwobutt.disabled = false;
        pName1.disabled = false;
        pName2.disabled = false;
        resetScor.disabled = false;
        pName1.disabled = false;
        pName2.disabled = false;
        gRound.disabled = false;
        roundWord.disabled = false;
        goals.disabled = false;
        goalWord.disabled = false;
        pName1Img.classList.add("overlay");
        question[0].style.color = "white";
        question[1].style.color = "white";
        question[2].style.color = "white";
        question[3].style.color = "white";
        pName2Img.classList.add("overlay");
        pName1Style.classList.add("olHarryGitty");
        pName2Style.classList.add("olHarryGitty");
        roundImg.classList.add("overlay");
        goalImg.classList.add("overlay");
        gRound.classList.add("olHarryGitty")
        goals.classList.add("olHarryGitty")
        resetScor.classList.add("larry2");
        pOnebutt.classList.add("activeMin");
        p1butt.classList.add("activePlus");
        pTwobutt.classList.add("activeMin");
        p2butt.classList.add("activePlus");
        resetScor.classList.add("actvBtn");
        pOnebutt.classList.add("actvBtn");
        p1butt.classList.add("actvBtn");
        pTwobutt.classList.add("actvBtn");
        p2butt.classList.add("actvBtn");
        bulk1.disabled = false;
        bulk2.disabled = false;
    };

    function nameChange1() {
        var name1 = prompt("Enter Name for Player 1");
        if (name1 === "") {
            alert("Name field cannot be left blank!");
            nameChange1();
            return false;
        } else if (name1.length > 12) {
            alert("Name must be less than 12 Characters!");
            nameChange1();
            return false;
        } else {
            pName1.textContent = name1;
        };
    };

    function nameChange2() {
        var name2 = prompt("Enter Name for Player 2");
        if (name2 === "") {
            alert("Name field cannot be left blank!");
            nameChange2();
            return false;
        } else if (name2.length > 12) {
            alert("Name must be less than 12 Characters!");
            nameChange2();
            return false;
        } else {
            pName2.textContent = name2;
        };
    };

    function winnerWinnerChickenDinnerP1() {
        p1Num.style.color = "chartreuse";
        playOne.style.color = "chartreuse";
        p2Num.style.color = "red";
        playTwo.style.color = "red";
        p1Num.textContent = p1Score;
        p1butt.disabled = true;
        p2butt.disabled = true;
        pOnebutt.disabled = true;
        pTwobutt.disabled = true;
        pName1.disabled = true;
        pName2.disabled = true;
        resetScor.disabled = true;
        gRound.disabled = true;
        roundWord.disabled = true;
        goals.disabled = true;
        goalWord.disabled = true;
        pName1Img.classList.remove("overlay");
        question[0].style.color = "transparent";
        question[1].style.color = "transparent";
        question[2].style.color = "transparent";
        question[3].style.color = "transparent";
        pName2Img.classList.remove("overlay");
        pName1Style.classList.remove("olHarryGitty");
        pName2Style.classList.remove("olHarryGitty");
        roundImg.classList.remove("overlay");
        goalImg.classList.remove("overlay");
        gRound.classList.remove("olHarryGitty");
        goals.classList.remove("olHarryGitty");
        resetScor.classList.remove("larry2");
        pOnebutt.classList.remove("activeMin");
        p1butt.classList.remove("activePlus");
        pTwobutt.classList.remove("activeMin");
        p2butt.classList.remove("activePlus");
        resetScor.classList.remove("actvBtn");
        pOnebutt.classList.remove("actvBtn");
        p1butt.classList.remove("actvBtn");
        pTwobutt.classList.remove("actvBtn");
        p2butt.classList.remove("actvBtn");
        pName1.disabled = true;
        pName2.disabled = true;
        bulk1.disabled = true;
        bulk2.disabled = true;
        p1Point++;
        console.log(pName1.textContent + " Wins Round " + round);
        alert(pName1.textContent + " Wins ! ");
        targetRound();
        return true;
    };

    function winnerWinnerChickenDinnerP2() {
        p2Num.style.color = "chartreuse";
        playTwo.style.color = "chartreuse";
        p1Num.style.color = "red";
        playOne.style.color = "red";
        p2Num.textContent = p2Score;
        p1butt.disabled = true;
        p2butt.disabled = true;
        pOnebutt.disabled = true;
        pTwobutt.disabled = true;
        pName1.disabled = true;
        pName2.disabled = true;
        resetScor.disabled = true;
        pName1.disabled = true;
        pName2.disabled = true;
        gRound.disabled = true;
        roundWord.disabled = true;
        goals.disabled = true;
        goalWord.disabled = true;
        pName1Img.classList.remove("overlay");
        question[0].style.color = "transparent";
        question[1].style.color = "transparent";
        question[2].style.color = "transparent";
        question[3].style.color = "transparent";
        pName2Img.classList.remove("overlay");
        pName1Style.classList.remove("olHarryGitty");
        pName2Style.classList.remove("olHarryGitty");
        roundImg.classList.remove("overlay");
        goalImg.classList.remove("overlay");
        gRound.classList.remove("olHarryGitty");
        goals.classList.remove("olHarryGitty");
        resetScor.classList.remove("larry2");
        pOnebutt.classList.remove("activeMin");
        p1butt.classList.remove("activePlus");
        pTwobutt.classList.remove("activeMin");
        p2butt.classList.remove("activePlus");
        resetScor.classList.remove("actvBtn");
        pOnebutt.classList.remove("actvBtn");
        p1butt.classList.remove("actvBtn");
        pTwobutt.classList.remove("actvBtn");
        p2butt.classList.remove("actvBtn");
        bulk1.disabled = true;
        bulk2.disabled = true;
        p2Point++;
        console.log(pName2.textContent + " Wins Round " + round);
        alert(pName2.textContent + " Wins ! ");
        targetRound();
        return true;
    };

    pName1.addEventListener("click", function () {
        if (!gameOver) {
            var yes = confirm(" Wanna change name ? ");
            if (yes) {
                nameChange1();
            };
        };
    });

    pName2.addEventListener("click", function () {
        if (!gameOver) {
            var yes = confirm(" Wanna change name ? ");
            if (yes) {
                nameChange2();
            };
        };
    });

    goals.addEventListener("click", function () {
        if (!gameOver) {
            var yes = confirm(" Want to change the target number ? ");
            if (yes) {
                targetNum();
            };
        };
    });

    goalImg.addEventListener("click", function () {
        if (!gameOver) {
            var yes = confirm(" Want to change the target number ? ");
            if (yes) {
                targetNum();
            };
        };
    });

    gRound.addEventListener("click", function () {
        if (!gameOver) {
            targRoundAdd();
        };
        return false;
    });

    roundImg.addEventListener("click", function () {
        if (!gameOver) {
            targRoundAdd();
        };
        return false;
    });

    p1butt.addEventListener("click", function () {
        if (!gameOver) {
            p1Score++;
            pOnebutt.disabled = false;
            pOnebutt.classList.add("activeMin");
            pOnebutt.classList.add("actvBtn");
            console.log(pName1.textContent + "'s" + " Score is: " + p1Score);
            p1Num.textContent = p1Score;
            if (p1Score >= winWinChickenDinR) {
                winnerWinnerChickenDinnerP1();
            };
        };
    });

    pOnebutt.addEventListener("click", function () {
        if (!gameOver) {
            if (p1Score === 0) {
                pOnebutt.disabled = true;
                pOnebutt.classList.remove("activeMin");
                pOnebutt.classList.remove("actvBtn");
            } else {
                pOnebutt.classList.add("activeMin");
                pOnebutt.classList.add("actvBtn");
                pOnebutt.disabled = false;
                p1Score--;
                console.log(pName1.textContent + "'s" + " Score is: " + p1Score);
                p1Num.textContent = p1Score;
            };
            if (p1Score >= winWinChickenDinR) {
                winnerWinnerChickenDinnerP1();
            };
        };
    });

    p2butt.addEventListener("click", function () {
        if (!gameOver) {
            p2Score++;
            pTwobutt.disabled = false;
            pTwobutt.classList.add("activeMin");
            pTwobutt.classList.add("actvBtn");
            console.log(pName2.textContent + "'s" + " Score is: " + p2Score);
            p2Num.textContent = p2Score;
            if (p2Score >= winWinChickenDinR) {
                winnerWinnerChickenDinnerP2();
            };
        };
    });

    pTwobutt.addEventListener("click", function () {
        if (!gameOver) {
            if (p2Score === 0) {
                pTwobutt.disabled = true;
                pTwobutt.classList.remove("activeMin");
                pTwobutt.classList.remove("actvBtn");
            } else {
                pTwobutt.disabled = false;
                pTwobutt.classList.add("activeMin");
                pTwobutt.classList.add("actvBtn");
                p2Score--;
                console.log(pName2.textContent + "'s" + " Score is: " + p2Score);
                p2Num.textContent = p2Score;
            };
            if (p2Score >= winWinChickenDinR) {
                winnerWinnerChickenDinnerP2();
            };
        };
    });

    bulk1.addEventListener("keypress", function () {
        if (!gameOver) {
            if (event.key === "Enter" && bulk1.value <= winWinChickenDinR) {
                if (bulk1.value > winWinChickenDinR) {
                    bulk1.value = "";
                    alert("Must be less than or equal to the target fool!");
                    return false;
                }
                if (bulk1.value < 0) {
                    bulk1.value = "";
                    alert("Cannot be less than 0 !");
                    return false;
                } else {
                    var addNum1 = bulk1.value;
                    p1Score = parseInt(Number(p1Score)) + parseInt(Number(addNum1));
                    p1Num.textContent = p1Score;
                    console.log(pName1.textContent + "'s" + " Score is: " + p1Score);
                    bulk1.value = "";
                    if (p1Score >= winWinChickenDinR) {
                        winnerWinnerChickenDinnerP1();
                    };
                };
            };
        };
    });

    bulk2.addEventListener("keypress", function () {
        if (!gameOver) {
            if (event.key === "Enter" && bulk2.value <= winWinChickenDinR) {
                if (bulk2.value > winWinChickenDinR) {
                    bulk2.value = "";
                    alert("Must be less than or equal to the target fool!");
                    return false;
                }
                if (bulk2.value < 0) {
                    bulk2.value = "";
                    alert("Cannot be less than 0 !");
                    return false;
                } else {
                    var addNum2 = bulk2.value;
                    p2Score = parseInt(Number(p2Score)) + parseInt(Number(addNum2));
                    p2Num.textContent = p2Score;
                    console.log(pName2.textContent + "'s" + " Score is: " + p2Score);
                    bulk2.value = "";
                    if (p2Score >= winWinChickenDinR) {
                        winnerWinnerChickenDinnerP2();
                    };
                };
            };
        };
    });

    resetG.addEventListener("click", function () {
        var yeye = confirm("Want to Reset?");
        if (yeye) {
            var yes = confirm(" Do you want to keep the same settings ? ");
            if (yes) {
                wipeScores();
                round = 1;
                gRound.textContent = round + "/" + targRound;
                p1Point = 0;
                p2Point = 0;
                gameOver = false;
                console.clear();
            } else {
                location.reload();
            };
        };
    });

    resetScor.addEventListener("click", function () {
        if (!gameOver) {
            alert("Scores have been cleared!");
            console.log("Scores have been cleared!");
            wipeScores();
        } else {
            resetScor.disabled = true;
        }
    });

    elusion();
};

theScoreKeeper();
//Score Keeper App

//Menu Btns
function MenuBtns() {
    function settings() {
        $('.settingz').on('click', function () {
            //show/hide menu bar
            $('#menNav').slideToggle(300, function () {
                $('#menNav').toggleClass('activateAllMenu');
            });
        });
    };

    settings();
};


function exitApp() {
    $('.exitAppBtn').on('click', function () {
        var yes = confirm('Close ScoreKeeper App?');
        if (yes) {
            location.href='../app-Index.html';
        } else {
            return false;
        };
    });
};
exitApp();
MenuBtns();








