const hand3 = document.getElementById("hand3");
const hand4 = document.getElementById("hand4");
const lizard = document.getElementById("lizard");
const cross = document.getElementById("cross");
const rock = document.getElementById("rock1");

const result = document.getElementById("Result");

const result2 = document.getElementById("Result2");

const resul3t = document.getElementById("Result3");






const Playagain4 = document.getElementById("Home");
const Playagain5 = document.getElementById("Home2");

const myRules = document.querySelector("#myRules");
const xBtn = document.querySelector(".close");
const Popup = document.querySelector(".popup");


myRules.addEventListener('click', function() {
    Popup.style.display ="flex";
});

xBtn.addEventListener("click", function() {
    Popup.style.display = "none";
});


let wincount = 0;
const win = document.getElementById("num");

Playagain4.addEventListener("click", function() {
    document.querySelector(".box4").style.display = "none";
    document.getElementById("tag").style.display = "block";
});

Playagain5.addEventListener("click", function() {
    document.querySelector(".box5").style.display = "none";
    document.getElementById("tag").style.display = "block";
});

hand3.addEventListener('click', () => {

    document.querySelector(".box4").style.display = "block";
    document.getElementById("tag").style.display = "none";

    const Aichoice = document.getElementById("Aichoice1");
    let Hand = Math.ceil(Math.random()*5);

    if (Hand > 0 && Hand < 2) {
        Aichoice.src = "img/rock.svg";
        result.innerHTML = "You Win";
        wincount++;
        win.innerHTML = wincount;
       
        setTimeout(function() {
            oval.style.display = "flex";
        }, 1000);
        oval2.style.display = "none";
    }
 else if (Hand > 1 && Hand < 3) {
    Aichoice.src = "img/hand.svg";
    result.innerHTML = "Tie";
    oval.style.display = "none";
    oval2.style.display = "none";}

    else if (Hand > 2 && Hand < 4) {
        Aichoice.src = "cross.svg";
        result.innerHTML = "You Win";

        setTimeout(function() {
            oval.style.display = "flex";
        }, 1000);
        oval2.style.display = "none";
    
            wincount++;
            win.textContent = wincount;
        
    }

    else if (Hand > 3 && Hand < 5) {
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
    else if (Hand > 4 && Hand < 6) {
        Aichoice.src = "lizard.svg";
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

hand4.addEventListener('click', () => {
    document.querySelector(".box5").style.display = "block";
    document.getElementById("tag").style.display = "none";
    
    const Aichoice = document.getElementById("Aichoice2");
    let Hand = Math.ceil(Math.random()*5);

    if (Hand > 0 && Hand < 2) {
        Aichoice.src = "img/rock.svg";
        result2.innerHTML = "You Lose";
       
        if (wincount > 0) {
            wincount--;
            win.textContent = wincount;
        }
        oval3.style.display = "none";

        setTimeout(function() {
            oval4.style.display = "flex";
        }, 1000);
    }
    else if (Hand > 1 && Hand < 3) {
        Aichoice.src = "img/hand.svg";
        result2.innerHTML = "You Win";
    
            wincount++;
            win.textContent = wincount;
        
       setTimeout(function() {
            oval3.style.display = "flex";
        }, 1000);
        oval4.style.display = "none";
    }

        else if (Hand > 2 && Hand < 4) {
            Aichoice.src = "cross.svg";
            result2.innerHTML = "You Lose";
    
            oval3.style.display = "none";
            setTimeout(function() {
                oval4.style.display = "flex";
            }, 1000);
    
            if (wincount > 0) {
                wincount--;
                win.textContent = wincount;
            }
        }

  else if (Hand > 3 && Hand < 5) {
        Aichoice.src = "img/hand2.svg";
        result2.innerHTML = "Tie"
    
    oval3.style.display = "none";
    oval4.style.display = "none";}


    
    else if (Hand > 4 && Hand < 6) {
        Aichoice.src = "lizard.svg";
        result2.innerHTML = "You Win";

        setTimeout(function() {
            oval3.style.display = "flex";
        }, 1000);
        oval4.style.display = "none";

            wincount++;
            win.textContent = wincount;
        
        }
        

})







