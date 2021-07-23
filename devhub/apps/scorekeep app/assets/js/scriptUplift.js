//Function to contain Score Keeper App
function SKApp() {
    //Define Variables:
    var sKApp = document.getElementById("SKapp");
    var startG = document.getElementById("startGame");
    var startGcon = document.getElementById("myContainer");
    var resetScor = document.getElementById("reset");
    var resetG = document.getElementById("gameReset");
    var gameOver = false;
    var gameStart = false;

    //Functiont to hide all HTML Elements on Page Load
    function elusion() {
        //Hides main game HTML Elements, 
        sKApp.hidden = true;
        resetG.hidden = true;
        resetScor.hidden = true;
    };
    //Call elusion function to hide all HTML elements On-Page Load
    elusion();

    //Function to load StartGame! Animated Btn ON-Page Load
    function startGameBTN() {
        //defines variables and assigns a position and setinterval for the start Game Button
        var pos = -10;
        var id = setInterval(frame, 5);
        //Function to define two positions for the button to move to
        function frame() {
            //If the targeted div has reached position "25" relative to the Viewing Window,
            if (pos == 25) {
                //Clears the interval, and the function will no longer run
                clearInterval(id);
            } else {
                //Otherwise if the targeted div has not reached position "25" relative to the Viewing Window,
                //Add 1 to the position var, and moving the targeted div's postion to the right,
                pos++;
                startG.style.right = pos + 'px';
                startG.style.left = pos + 'px';
            };
        };
    };
    startGameBTN();
    //Event  Listener to trigger "StartGame" anon Function once clicked
    startG.addEventListener("click", function () {
        gameStart = true;
        gameBegin();
    });


    //Function to initiate the game and ask the required questions.  
    function gameBegin() {
     //Changes the previously hidden main game HTML elements to be visible, 
        sKApp.hidden = false;
        resetG.hidden = false;
        resetScor.hidden = false;
        //then hides the prior-game elements.
        startG.hidden = true;
        startGcon.hidden = true;
    //to obtain the winning number and the target round
         //by calling both the TargetRound and Target Number Func
        targetNum();
        targRoundFunc();

        if (gameStart) {
            //Sets Target Round to 1 if less than 0
            if (targRound <= 0) {
                targRound = 1;
                //displays feedback in the console of current round number
                console.log("Up to Round " + targRound);
                //alters the HTML Document to display current round out of the target round
                gRound.textContent = round + "/" + targRound;
            } else {
                //otherwise, alters the HTML Document to display current round out-of the target round
                gRound.textContent = round + "/" + targRound;
                //then, displays feedback in the console of current round number and target round
                console.log("The target round is: " + targRound);
                console.log("Up to Round " + round);
            }
            gameStart = false;
        };
    };
    //Function to 
    function targetNum() {
        if (!gameOver) {
            var tar = Number(prompt(" Enter Winning Number "));
            if (winWinChickenDinR <= 0) {
                alert("NUMBER CANNOT BE LESS OR EQUAL TO 0");
                targetNum();
                return false;
            } else if (isNaN(winWinChickenDinR)) {
                alert("HAS TO BE A NUMBER STUPID!!");
                targetNum();
                return false;
            } else if (winWinChickenDinR > 9999) {
                alert("NUMBER MUST BE LESS THAN 10000");
                targetNum();
                return false;
            } else {
                goals.textContent = tar;
                winWinChickenDinR = tar;
                bulk1.setAttribute("max", Number(tar));
                bulk2.setAttribute("max", Number(tar));
                p1Score = 0;
                p2Score = 0;
                gRound.textContent = round + "/" + targRound;
                console.log("The target number is: " + tar);
            };
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

};

//call SKApp On-Page Load
SKApp();