const hand3 = document.getElementById("hand3");
const hand4 = document.getElementById("hand4");
const lizard = document.getElementById("lizard");
const cross = document.getElementById("cross");
const rock = document.getElementById("rock1");


const result = document.getElementById("Result");
const result2 = document.getElementById("Result2");
const result3 = document.getElementById("Result3");
const result4 = document.getElementById("Result4");
const result5 = document.getElementById("Result5");


const Playagain4 = document.getElementById("Home");
const Playagain5 = document.getElementById("Home2");
const Playagain6 = document.getElementById("Home3");
const Playagain7 = document.getElementById("Home4");
const Playagain8 = document.getElementById("Home5");


const myRules = document.querySelector("#myRules");
const OR = document.querySelector("#OR");
const Rule = document.querySelector(".myRules1");
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

if (window.innerWidth < 500) {
Playagain4.addEventListener("click", function() {
    document.querySelector(".box4").style.display = "none";
    document.getElementById("tag").style.display = "block";
    document.querySelector("#myRules").style.left="75%";
    OR.style.display = "block";

});

Playagain5.addEventListener("click", function() {
    document.querySelector(".box5").style.display = "none";
    document.getElementById("tag").style.display = "block";
    document.querySelector("#myRules").style.left="75%";
    OR.style.display = "block";

});

Playagain6.addEventListener("click", function() {
    document.querySelector(".box6").style.display = "none";
    document.getElementById("tag").style.display = "block";
    document.querySelector("#myRules").style.left="75%";
    OR.style.display = "block";

});

Playagain7.addEventListener("click", function() {
    document.querySelector(".box7").style.display = "none";
    document.getElementById("tag").style.display = "block";
    document.querySelector("#myRules").style.left="75%";
    OR.style.display = "block";
   
});

Playagain8.addEventListener("click", function() {
    document.querySelector(".box8").style.display = "none";
    document.getElementById("tag").style.display = "block";
    document.querySelector("#myRules").style.left="75%";
    OR.style.display = "block";

});


hand3.addEventListener('click', () => {

        document.querySelector(".box4").style.display = "block";
        document.getElementById("tag").style.display = "none";
        document.querySelector("#myRules").style.left="50%";
        OR.style.display = "none";
        Rule.style.left="57%";
        Rule.style.top="90%";

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
    document.querySelector("#myRules").style.left="50%";
    OR.style.display = "none";
    Rule.style.left="57%";
    Rule.style.top="90%";
    // 
    
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

rock.addEventListener('click' ,() =>{
    
        document.querySelector(".box6").style.display = "block";
        document.getElementById("tag").style.display = "none";
        document.querySelector("#myRules").style.left="50%";
        OR.style.display = "none";
        Rule.style.left="57%";
        Rule.style.top="90%";

        const Aichoice = document.getElementById("Aichoice3");
        let Hand = Math.ceil(Math.random()*5);
    
        if (Hand > 0 && Hand < 2) {
                Aichoice.src = "img/rock.svg";
        result3.innerHTML = "Tie";
    oval5.style.display = "none";
    oval6.style.display = "none";
    }
    else if (Hand > 1 && Hand < 3) {
        Aichoice.src = "img/hand.svg";
        result3.innerHTML = "You Lose";
        oval5.style.display = "none";
        setTimeout(function() {
        oval6.style.display = "flex";
    }, 1000);
     if (wincount > 0) {
            wincount--;
            win.textContent = wincount;
        }
        }
    
        else if (Hand > 2 && Hand < 4) {
                Aichoice.src = "cross.svg";
        result3.innerHTML = "You Lose";
        setTimeout(function() {
            oval6.style.display = "flex";
        }, 1000);
        oval5.style.display = "none";
    

        if (wincount > 0) {
            wincount--;
            win.textContent = wincount;
        }
        }

    else if (Hand > 3 && Hand < 5) {
        Aichoice.src = "img/hand2.svg";
        result3.innerHTML = "You Win";

        setTimeout(function() {
                oval5.style.display = "flex";
        }, 1000);
       oval6.style.display = "none";
        wincount++;
            win.textContent = wincount; 
        }
        else if (Hand > 4 && Hand < 6) {
            Aichoice.src = "lizard.svg";
            result3.innerHTML = "You Win";
    
            setTimeout(function() {
                oval5.style.display = "flex";
            }, 1000);
    
            oval6.style.display = "none";
                wincount++;
                win.textContent = wincount;

        }

})

lizard.addEventListener('click', () => {
    document.querySelector(".box7").style.display = "block";
    document.getElementById("tag").style.display = "none";
    document.querySelector("#myRules").style.left="50%";
    OR.style.display = "none";
    Rule.style.left="57%";
    Rule.style.top="90%";

    const Aichoice = document.getElementById("Aichoice4");
    let Hand = Math.ceil(Math.random()*5);

    if (Hand > 0 && Hand < 2) {
        Aichoice.src = "img/rock.svg";
        result4.innerHTML = "You Lose";
    oval7.style.display = "none";

    oval8.style.display = "flex";
    if (wincount > 0) {
        wincount--;
        win.textContent = wincount;
    }

    }
    else if (Hand > 1 && Hand < 3) {
        Aichoice.src = "img/hand.svg";
        result4.innerHTML = "You Win";
        oval8.style.display = "none";
        setTimeout(function() {
            oval7.style.display = "flex";
    }, 1000);
        wincount++;
        win.textContent = wincount;
     }

    else if (Hand > 2 && Hand < 4) {
        Aichoice.src = "cross.svg";
        result4.innerHTML = "You Win";
        setTimeout(function() {
                oval7.style.display = "flex";
            }, 1000);
            oval8.style.display = "none";
               wincount++;
                win.textContent = wincount;
     }  
     else if (Hand > 3 && Hand < 5) {
            Aichoice.src = "img/hand2.svg";
            result4.innerHTML = "You Lose";
    
            setTimeout(function() {
                    oval8.style.display = "flex";
        }, 1000);
       oval7.style.display = "none";

        if (wincount > 0) {
                wincount--;
            win.textContent = wincount;
        }
    }
    else if (Hand > 4 && Hand < 6) {
        Aichoice.src = "lizard.svg";
        result4.innerHTML = "Tie";
            oval7.style.display = "none";
            oval8.style.display = "none";
     }
});

cross.addEventListener('click', () => {
    document.querySelector(".box8").style.display = "block";
    document.getElementById("tag").style.display = "none";
    document.querySelector("#myRules").style.left="50%";
    OR.style.display = "none";
    Rule.style.left="57%";
    Rule.style.top="90%";

    const Aichoice = document.getElementById("Aichoice5");
    let Hand = Math.ceil(Math.random()*5);

    if (Hand > 0 && Hand < 2) {
        Aichoice.src = "img/rock.svg";
        result5.innerHTML = "You Win";
    oval9.style.display = "none";
    setTimeout(function() {
        oval10.style.display = "flex";
}, 1000);
       wincount++;
        win.textContent = wincount;
 }

 else if (Hand > 1 && Hand < 3) {
    Aichoice.src = "img/hand.svg";
    result5.innerHTML = "You Lose";
    oval9.style.display = "none";
    setTimeout(function() {
    oval10.style.display = "flex";
}, 1000);

if (wincount > 0) {
    wincount--;
    win.textContent = wincount;
}
 }
 else if (Hand > 2 && Hand < 4) {
            Aichoice.src = "cross.svg";
        result5.innerHTML = "Tie";
 
            oval9.style.display = "none";
            oval10.style.display = "none";
     }  
     else if (Hand > 3 && Hand < 5) {
            Aichoice.src = "img/hand2.svg";
        result5.innerHTML = "You Win";

        setTimeout(function() {
            oval9.style.display = "flex";
        }, 1000);
       oval10.style.display = "none";
            wincount++;
            win.textContent = wincount;
         }
         else if (Hand > 4 && Hand < 6) {
            Aichoice.src = "lizard.svg";
            
            result5.innerHTML = "You Lose";
                oval9.style.display = "none";

                setTimeout(function() {
                oval10.style.display = "flex";
                }, 1000);

                if (wincount > 0) {
                    wincount--;
                    win.textContent = wincount;
                  }
         }

});
}

Playagain4.addEventListener("click", function() {
    document.querySelector(".box4").style.display = "none";
    document.getElementById("tag").style.display = "block";
    // document.querySelector("#myRules").style.left="75%";
    OR.style.display = "block";

});

Playagain5.addEventListener("click", function() {
    document.querySelector(".box5").style.display = "none";
    document.getElementById("tag").style.display = "block";
    // document.querySelector("#myRules").style.left="75%";
    OR.style.display = "block";

});

Playagain6.addEventListener("click", function() {
    document.querySelector(".box6").style.display = "none";
    document.getElementById("tag").style.display = "block";
    // document.querySelector("#myRules").style.left="75%";
    OR.style.display = "block";

});

Playagain7.addEventListener("click", function() {
    document.querySelector(".box7").style.display = "none";
    document.getElementById("tag").style.display = "block";
    // document.querySelector("#myRules").style.left="75%";
    OR.style.display = "block";
   
});

Playagain8.addEventListener("click", function() {
    document.querySelector(".box8").style.display = "none";
    document.getElementById("tag").style.display = "block";
    // document.querySelector("#myRules").style.left="75%";
    OR.style.display = "block";

});


hand3.addEventListener('click', () => {

        document.querySelector(".box4").style.display = "block";
        document.getElementById("tag").style.display = "none";
      
        OR.style.display = "none";
      
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
    OR.style.display = "none";
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

rock.addEventListener('click' ,() =>{
    
        document.querySelector(".box6").style.display = "block";
        document.getElementById("tag").style.display = "none";
       OR.style.display = "none";
       const Aichoice = document.getElementById("Aichoice3");
        let Hand = Math.ceil(Math.random()*5);
    
        if (Hand > 0 && Hand < 2) {
                Aichoice.src = "img/rock.svg";
        result3.innerHTML = "Tie";
    oval5.style.display = "none";
    oval6.style.display = "none";
    }
    else if (Hand > 1 && Hand < 3) {
        Aichoice.src = "img/hand.svg";
        result3.innerHTML = "You Lose";
        oval5.style.display = "none";
        setTimeout(function() {
        oval6.style.display = "flex";
    }, 1000);
     if (wincount > 0) {
            wincount--;
            win.textContent = wincount;
        }
        }
    
        else if (Hand > 2 && Hand < 4) {
                Aichoice.src = "cross.svg";
        result3.innerHTML = "You Lose";
        setTimeout(function() {
            oval6.style.display = "flex";
        }, 1000);
        oval5.style.display = "none";
    

        if (wincount > 0) {
            wincount--;
            win.textContent = wincount;
        }
        }

    else if (Hand > 3 && Hand < 5) {
        Aichoice.src = "img/hand2.svg";
        result3.innerHTML = "You Win";

        setTimeout(function() {
                oval5.style.display = "flex";
        }, 1000);
       oval6.style.display = "none";
        wincount++;
            win.textContent = wincount; 
        }
        else if (Hand > 4 && Hand < 6) {
            Aichoice.src = "lizard.svg";
            result3.innerHTML = "You Win";
    
            setTimeout(function() {
                oval5.style.display = "flex";
            }, 1000);
    
            oval6.style.display = "none";
                wincount++;
                win.textContent = wincount;

        }

})

lizard.addEventListener('click', () => {
    document.querySelector(".box7").style.display = "block";
    document.getElementById("tag").style.display = "none";
   
    OR.style.display = "none";
    // Rule.style.left="57%";
    // Rule.style.top="90%";

    const Aichoice = document.getElementById("Aichoice4");
    let Hand = Math.ceil(Math.random()*5);

    if (Hand > 0 && Hand < 2) {
        Aichoice.src = "img/rock.svg";
        result4.innerHTML = "You Lose";
    oval7.style.display = "none";

    oval8.style.display = "flex";
    if (wincount > 0) {
        wincount--;
        win.textContent = wincount;
    }

    }
    else if (Hand > 1 && Hand < 3) {
        Aichoice.src = "img/hand.svg";
        result4.innerHTML = "You Win";
        oval8.style.display = "none";
        setTimeout(function() {
            oval7.style.display = "flex";
    }, 1000);
        wincount++;
        win.textContent = wincount;
     }

    else if (Hand > 2 && Hand < 4) {
        Aichoice.src = "cross.svg";
        result4.innerHTML = "You Win";
        setTimeout(function() {
                oval7.style.display = "flex";
            }, 1000);
            oval8.style.display = "none";
               wincount++;
                win.textContent = wincount;
     }  
     else if (Hand > 3 && Hand < 5) {
            Aichoice.src = "img/hand2.svg";
            result4.innerHTML = "You Lose";
    
            setTimeout(function() {
                    oval8.style.display = "flex";
        }, 1000);
       oval7.style.display = "none";

        if (wincount > 0) {
                wincount--;
            win.textContent = wincount;
        }
    }
    else if (Hand > 4 && Hand < 6) {
        Aichoice.src = "lizard.svg";
        result4.innerHTML = "Tie";
            oval7.style.display = "none";
            oval8.style.display = "none";
     }
});

cross.addEventListener('click', () => {
    document.querySelector(".box8").style.display = "block";
    document.getElementById("tag").style.display = "none";
    // document.querySelector("#myRules").style.left="50%";
    OR.style.display = "none";
    // Rule.style.left="57%";
    // Rule.style.top="90%";

    const Aichoice = document.getElementById("Aichoice5");
    let Hand = Math.ceil(Math.random()*5);

    if (Hand > 0 && Hand < 2) {
        Aichoice.src = "img/rock.svg";
        result5.innerHTML = "You Win";
    oval9.style.display = "none";
    setTimeout(function() {
        oval10.style.display = "flex";
}, 1000);
       wincount++;
        win.textContent = wincount;
 }

 else if (Hand > 1 && Hand < 3) {
    Aichoice.src = "img/hand.svg";
    result5.innerHTML = "You Lose";
    oval9.style.display = "none";
    setTimeout(function() {
    oval10.style.display = "flex";
}, 1000);

if (wincount > 0) {
    wincount--;
    win.textContent = wincount;
}
 }
 else if (Hand > 2 && Hand < 4) {
            Aichoice.src = "cross.svg";
        result5.innerHTML = "Tie";
 
            oval9.style.display = "none";
            oval10.style.display = "none";
     }  
     else if (Hand > 3 && Hand < 5) {
            Aichoice.src = "img/hand2.svg";
        result5.innerHTML = "You Win";

        setTimeout(function() {
            oval9.style.display = "flex";
        }, 1000);
       oval10.style.display = "none";
            wincount++;
            win.textContent = wincount;
         }
         else if (Hand > 4 && Hand < 6) {
            Aichoice.src = "lizard.svg";
            
            result5.innerHTML = "You Lose";
                oval9.style.display = "none";

                setTimeout(function() {
                oval10.style.display = "flex";
                }, 1000);

                if (wincount > 0) {
                    wincount--;
                    win.textContent = wincount;
                  }
         }

});
















































// // Element Variables
// const hand3 = document.getElementById("hand3");
// const hand4 = document.getElementById("hand4");
// const lizard = document.getElementById("lizard");
// const cross = document.getElementById("cross");
// const rock = document.getElementById("rock1");

// const result = document.getElementById("Result");
// const result2 = document.getElementById("Result2");
// const result3 = document.getElementById("Result3");
// const result4 = document.getElementById("Result4");
// const result5 = document.getElementById("Result5");

// const PlayagainButtons = [
//     document.getElementById("Home"),
//     document.getElementById("Home2"),
//     document.getElementById("Home3"),
//     document.getElementById("Home4"),
//     document.getElementById("Home5"),
// ];

// const myRules = document.querySelector("#myRules");
// const xBtn = document.querySelector(".close");
// const Popup = document.querySelector(".popup");

// const win = document.getElementById("num");
// let wincount = 0;

// // Event Listeners
// myRules.addEventListener('click', function () {
//     Popup.style.display = "flex";
// });

// xBtn.addEventListener("click", function () {
//     Popup.style.display = "none";
// });

// PlayagainButtons.forEach((button, index) => {
//     button.addEventListener("click", function () {
//         document.querySelector(`.box${index + 4}`).style.display = "none";
//         document.getElementById("tag").style.display = "block";
//     });
// });

// // Game Logic
// function playGame(playerChoice, AichoiceElement, resultElement) {
//     document.querySelector(`.box${playerChoice}`).style.display = "block";
//     document.getElementById("tag").style.display = "none";

//     const Aichoice = document.getElementById(AichoiceElement);
//     let Hand = Math.ceil(Math.random() * 5);

//     if (Hand > 0 && Hand < 2) {
//         Aichoice.src = "img/rock.svg";
//         resultElement.innerHTML = "You Win";
//         wincount++;
//         win.innerHTML = wincount;
//         setTimeout(function () {
//             oval.style.display = "flex";
//         }, 1000);
//         oval2.style.display = "none";
//     } else if (Hand > 1 && Hand < 3) {
//         Aichoice.src = "img/hand.svg";
//         resultElement.innerHTML = "Tie";
//         oval.style.display = "none";
//         oval2.style.display = "none";
//     } else if (Hand > 2 && Hand < 4) {
//         Aichoice.src = "cross.svg";
//         resultElement.innerHTML = "You Win";
//         setTimeout(function () {
//             oval.style.display = "flex";
//         }, 1000);
//         oval2.style.display = "none";
//         wincount++;
//         win.textContent = wincount;
//     } else if (Hand > 3 && Hand < 5) {
//         Aichoice.src = "img/hand2.svg";
//         resultElement.innerHTML = "You Lose";
//         setTimeout(function () {
//             oval2.style.display = "flex";
//         }, 1000);
//         oval.style.display = "none";
//         if (wincount > 0) {
//             wincount--;
//             win.textContent = wincount;
//         }
//     } else if (Hand > 4 && Hand < 6) {
//         Aichoice.src = "lizard.svg";
//         resultElement.innerHTML = "You Lose";
//         setTimeout(function () {
//             oval2.style.display = "flex";
//         }, 1000);
//         oval.style.display = "none";
//         if (wincount > 0) {
//             wincount--;
//             win.textContent = wincount;
//         }
//     }
// }

// hand3.addEventListener('click', () => {
//     playGame(4, "Aichoice1", result);
// });

// hand4.addEventListener('click', () => {
//     playGame(5, "Aichoice2", result2);
// });

// rock.addEventListener('click', () => {
//     playGame(6, "Aichoice3", result3);
// });

// lizard.addEventListener('click', () => {
//     playGame(7, "Aichoice4", result4);
// });

// cross.addEventListener('click', () => {
//     playGame(8, "Aichoice5", result5);
// });




