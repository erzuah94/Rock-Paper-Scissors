/* DOM Elements */
const myRules = document.querySelector("#myRules");
const xBtn = document.querySelector(".close");
const Popup = document.querySelector(".popup");


const Playagain = document.getElementById("Home");
const Playagain2 = document.getElementById("Home2");
const Playagain3 = document.getElementById("Home3");


const hAnd = document.getElementById("hand");
const hAnd2 = document.getElementById("hand2");
const rOck = document.getElementById("rock");



const result = document.getElementById("Result");
const result2 = document.getElementById("Result2");
const result3 = document.getElementById("Result3");
const Mid = document.querySelector(".mid");

const oval = document.getElementById("oval");
const oval2 = document.getElementById("oval2");
const oval3 = document.getElementById("oval3");
const oval4 = document.getElementById("oval4");
const oval5 = document.getElementById("oval5");
const oval6 = document.getElementById("oval6");

let wincount = 0;
const win = document.getElementById("num");

// first set
/* Event Listeners */
myRules.addEventListener('click', function() {
    Popup.style.display ="flex";
  
});

xBtn.addEventListener("click", function() {
    Popup.style.display = "none";
   
});


//   mobile view
if (window.innerWidth < 500) {
Playagain.addEventListener("click", function() {
    document.querySelector(".box1").style.display = "none";
    document.getElementById("tag").style.display = "block";
    document.getElementById("Bonus").style.display = "block";
    document.querySelector("#myRules").style.left="90%";

});

Playagain2.addEventListener("click", function() {
    document.querySelector(".box2").style.display = "none";
    document.getElementById("tag").style.display = "block";
    document.getElementById("Bonus").style.display = "block";
    document.querySelector("#myRules").style.left="90%";
});

Playagain3.addEventListener("click", function() {
    document.querySelector(".box3").style.display = "none";
    document.getElementById("tag").style.display = "block";
    document.getElementById("Bonus").style.display = "block";
    document.querySelector("#myRules").style.left="90%";
});

    
    hAnd.addEventListener('click', () => {
        document.querySelector(".box1").style.display = "block";
        document.getElementById("tag").style.display = "none";

    document.getElementById("Bonus").style.display="none"
    document.querySelector("#myRules").style.left="10rem";
    
    const Aichoice = document.getElementById("Aichoice1");
    let Hand = Math.ceil(Math.random()*3);

    if (Hand > 0 && Hand < 2) {
        Aichoice.src = "img/rock.svg";
        result.innerHTML = "You Win";
        wincount++;
        win.innerHTML = wincount;
        oval2.style.display = "none";

        setTimeout(function() {
            oval.style.display = "flex";
        }, 1000);
    } else if (Hand > 1 && Hand < 3) {
        Aichoice.src = "img/hand.svg";
        result.innerHTML = "Tie";
        oval.style.display = "none";
        oval2.style.display = "none";
    } else if (Hand > 2 && Hand < 4) {
        Aichoice.src = "img/hand2.svg";
        result.innerHTML = "You Lose";

        setTimeout(function() {
            oval2.style.display = "flex";
        }, 1000);
        
        oval.style.display = "none";

        if (wincount > 0) {
            wincount--;
            win.textContent = wincount;
        }
    }
});

hAnd2.addEventListener('click', () => {
    document.querySelector(".box2").style.display = "block";
    document.getElementById("tag").style.display = "none";
    document.getElementById("Bonus").style.display="none"
    document.querySelector("#myRules").style.left="50%";
    
    const Aichoice = document.getElementById("Aichoice2");
    let Hand2 = Math.ceil(Math.random()*3);

    if (Hand2 > 0 && Hand2 < 2) {
        Aichoice.src = "img/rock.svg";
        result2.innerHTML = "You Lose";
        
        setTimeout(function() {
            oval4.style.display = "flex";
        }, 1000);

        oval3.style.display = "none";

        if (wincount > 0) {
            wincount--;
            win.textContent = wincount;
        }
    } else if (Hand2 > 1 && Hand2 < 3) {
        result2.innerHTML = "You Win";
        wincount++;
        win.innerHTML = wincount;
        Aichoice.src = "img/hand.svg";
        oval4.style.display = "none";

        setTimeout(function() {
            oval3.style.display = "flex";
        }, 1000);
    } else if (Hand2 >= 2 && Hand2 < 4) {
        result2.innerHTML = "Tie";
        Aichoice.src = "img/hand2.svg";
        oval3.style.display = "none";
        oval4.style.display = "none";
    }
});

rOck.addEventListener('click', () => {
    document.querySelector(".box3").style.display = "block";
    document.getElementById("tag").style.display = "none";
    document.getElementById("Bonus").style.display="none";
    document.querySelector("#myRules").style.left="50%";

    const Aichoice = document.getElementById("Aichoice3");
    let rOck = Math.ceil(Math.random()*3);

    if (rOck > 0 && rOck < 2) {
        Aichoice.src = "img/rock.svg";
        result3.innerHTML = "Tie";
        oval5.style.display = "none";
        oval6.style.display = "none";
    } else if (rOck > 1 && rOck < 3) {
        Aichoice.src = "img/hand.svg";
        result3.innerHTML = "You Lose";

        setTimeout(function() {
            oval6.style.display = "flex";
        }, 1000);

        oval5.style.display = "none";

        if (wincount > 0) {
            wincount--;
            win.textContent = wincount;
        }
    } else if (rOck > 2 && rOck < 4) {
        Aichoice.src = "img/hand2.svg";
        result3.innerHTML = "You Win";
        oval6.style.display = "none";

        setTimeout(function() {
            oval5.style.display = "flex";
        }, 1000);
        
        wincount++;
        win.innerHTML = wincount;
    }
});
}

// desktop view
Playagain.addEventListener("click", function() {
    document.querySelector(".box1").style.display = "none";
    document.getElementById("tag").style.display = "block";
    document.getElementById("Bonus").style.display = "block";
    // document.querySelector("#myRules").style.left="90%";

});

Playagain2.addEventListener("click", function() {
    document.querySelector(".box2").style.display = "none";
    document.getElementById("tag").style.display = "block";
    document.getElementById("Bonus").style.display = "block";
    // document.querySelector("#myRules").style.left="90%";
});

Playagain3.addEventListener("click", function() {
    document.querySelector(".box3").style.display = "none";
    document.getElementById("tag").style.display = "block";
    document.getElementById("Bonus").style.display = "block";
    // document.querySelector("#myRules").style.left="90%";
});



hAnd.addEventListener('click', () => {
    document.querySelector(".box1").style.display = "block";
    document.getElementById("tag").style.display = "none";
    document.getElementById("Bonus").style.display="none"
    // document.querySelector("#myRules").style.left="10rem";

    const Aichoice = document.getElementById("Aichoice1");
    let Hand = Math.ceil(Math.random()*3);

    if (Hand > 0 && Hand < 2) {
        Aichoice.src = "img/rock.svg";
        result.innerHTML = "You Win";
        wincount++;
        win.innerHTML = wincount;
        oval2.style.display = "none";

        setTimeout(function() {
            oval.style.display = "flex";
        }, 1000);
    } else if (Hand > 1 && Hand < 3) {
        Aichoice.src = "img/hand.svg";
        result.innerHTML = "Tie";
        oval.style.display = "none";
        oval2.style.display = "none";
    } else if (Hand > 2 && Hand < 4) {
        Aichoice.src = "img/hand2.svg";
        result.innerHTML = "You Lose";

        setTimeout(function() {
            oval2.style.display = "flex";
        }, 1000);

        oval.style.display = "none";

        if (wincount > 0) {
            wincount--;
            win.textContent = wincount;
        }
    }
});

hAnd2.addEventListener('click', () => {
    document.querySelector(".box2").style.display = "block";
    document.getElementById("tag").style.display = "none";
    document.getElementById("Bonus").style.display="none"
    // document.querySelector("#myRules").style.left="50%";

    const Aichoice = document.getElementById("Aichoice2");
    let Hand2 = Math.ceil(Math.random()*3);

    if (Hand2 > 0 && Hand2 < 2) {
        Aichoice.src = "img/rock.svg";
        result2.innerHTML = "You Lose";

        setTimeout(function() {
            oval4.style.display = "flex";
        }, 1000);

        oval3.style.display = "none";

        if (wincount > 0) {
            wincount--;
            win.textContent = wincount;
        }
    } else if (Hand2 > 1 && Hand2 < 3) {
        result2.innerHTML = "You Win";
        wincount++;
        win.innerHTML = wincount;
        Aichoice.src = "img/hand.svg";
        oval4.style.display = "none";

        setTimeout(function() {
            oval3.style.display = "flex";
        }, 1000);
    } else if (Hand2 >= 2 && Hand2 < 4) {
        result2.innerHTML = "Tie";
        Aichoice.src = "img/hand2.svg";
        oval3.style.display = "none";
        oval4.style.display = "none";
    }
});

rOck.addEventListener('click', () => {
    document.querySelector(".box3").style.display = "block";
    document.getElementById("tag").style.display = "none";
    document.getElementById("Bonus").style.display="none";
    // document.querySelector("#myRules").style.left="50%";

    const Aichoice = document.getElementById("Aichoice3");
    let rOck = Math.ceil(Math.random()*3);

    if (rOck > 0 && rOck < 2) {
        Aichoice.src = "img/rock.svg";
        result3.innerHTML = "Tie";
        oval5.style.display = "none";
        oval6.style.display = "none";
    } else if (rOck > 1 && rOck < 3) {
        Aichoice.src = "img/hand.svg";
        result3.innerHTML = "You Lose";

        setTimeout(function() {
            oval6.style.display = "flex";
        }, 1000);

        oval5.style.display = "none";

        if (wincount > 0) {
            wincount--;
            win.textContent = wincount;
        }
    } else if (rOck > 2 && rOck < 4) {
        Aichoice.src = "img/hand2.svg";
        result3.innerHTML = "You Win";
        oval6.style.display = "none";

        setTimeout(function() {
            oval5.style.display = "flex";
        }, 1000);

        wincount++;
        win.innerHTML = wincount;
    }
});





















































