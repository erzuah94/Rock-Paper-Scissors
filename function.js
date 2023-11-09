
/*Rules*/
const myRules = document.getElementById("myRules");
const xBtn = document.querySelector(".close");
const Popup = document.querySelector(".popup");
/*play again btn*/
const Playagain = document.getElementById("Home");
const Playagain2 = document.getElementById("Home2");
const Playagain3 = document.getElementById("Home3");
/*choosing*/
const hAnd =   document.getElementById("hand");
const hAnd2 = document.getElementById("hand2");
const rOck =  document.getElementById("rock");
/*RESULT*/
const result = document.getElementById("Result");
const result2 = document.getElementById("Result2");
const result3 = document.getElementById("Result3");
const Mid = document.querySelector(".mid");
/*display*/

const oval = document.getElementById("oval");
const oval2 = document.getElementById("oval2");
const oval3 = document.getElementById("oval3");
const oval4 = document.getElementById("oval4");
const oval5 = document.getElementById("oval5");
const oval6 = document.getElementById("oval6");
/*Popup*/
// let winCount = 0;
let wincount = 0; 
 const win = document.getElementById("num");

myRules.addEventListener('click', function()
{
       Popup.style.display ="flex";
       
})
xBtn.addEventListener("click", function(){
   Popup.style.display = "none";
})   

/*play again funtion*/
  
Playagain.addEventListener("click",function() 
{

    document.querySelector(".box1").style.display = "none";
    document.getElementById("tag").style.display = "block";
})
Playagain2.addEventListener("click",function() 
{
    document.querySelector(".box2").style.display = "none";
    document.getElementById("tag").style.display = "block";
})
Playagain3.addEventListener("click",function() 
{

    document.querySelector(".box3").style.display = "none";
    document.getElementById("tag").style.display = "block";
    // document.querySelector(".Home3").style.display = "none";

})
/*first Btn*/
// let Wincount= 0;
hAnd.addEventListener('click', () =>{
    
    document.querySelector(".box1").style.display = "block";
    document.getElementById("tag").style.display = "none";
    
    
    const Aichoice = document.getElementById("Aichoice1");  
    
    let Hand = Math.ceil(Math.random()*3);
    
    if (Hand > 0 && Hand < 2){
        Aichoice.src = "img/rock.svg";
        result.innerHTML ="You Win";
        wincount++; // Increment the win count when the player wins
        win.innerHTML = wincount;
        oval2.style.display="none";

        setTimeout(function(){
       oval.style.display= "flex";
        },1000);
        // console.log('hand')
        //  console.log(' You Win');;
    }
 else if(Hand > 1 && Hand < 3){
  
    Aichoice.src="img/hand.svg";
    result.innerHTML ="Tie";
    oval.style.display= "none";
    oval2.style.display="none";
}
  else if(Hand > 2 && Hand < 4){
 
    Aichoice.src="img/hand2.svg";
    result.innerHTML ="You Lose";

    setTimeout(function(){
    oval2.style.display="flex";
    },1000)
    oval.style.display="none";
   
    if(wincount > 0){

        wincount--; // Increment the loss count when the player loses
        win.textContent = wincount;
    }
    }

  
      
 });

 
 
 /*Second Btn*/
 hAnd2.addEventListener('click', () =>{
     // const win = document.getElementById("num");
    //  const oval = document.getElementById("oval");
    //  const oval2 = document.getElementById("oval2");
     document.querySelector(".box2").style.display = "block";
    document.getElementById("tag").style.display = "none";
    
    const Aichoice = document.getElementById("Aichoice2"); 
    
    let Hand2 = Math.ceil(Math.random()*3);
    //  let ai = '';
    if (Hand2 > 0 && Hand2 < 2){
        Aichoice.src="img/rock.svg";
        //   ai = 'Rock';
        result2.innerHTML ="You Lose";

        setTimeout(function(){
            oval4.style.display="flex";
        },1000)
        oval3.style.display="none";
        if(wincount > 0){
            wincount--; // Increment the loss count when the player loses
            win.textContent = wincount;
        }
    }
    else if(Hand2 > 1 && Hand2 <3){
        result2.innerHTML ="You Win";
        wincount++; // Increment the win count when the player wins
        win.innerHTML = wincount;
        Aichoice.src="img/hand.svg";
        oval4.style.display="none";
        
        setTimeout(function(){
            oval3.style.display= "flex";
        },1000);
        // ai = 'Paper';
    }
    else if(Hand2 >= 2 && Hand2 < 4){
        result2.innerHTML ="Tie";
        Aichoice.src="img/hand2.svg";
        oval3.style.display= "none";
        oval4.style.display="none";
        // ai = 'Scissors';
    }
})


/*third Btn*/

rOck.addEventListener('click', () =>{
    
    document.querySelector(".box3").style.display = "block";
    document.getElementById("tag").style.display = "none";
    
    
    
    
    const Aichoice = document.getElementById("Aichoice3"); 

    let rOck = Math.ceil(Math.random()*3);
    // let ai = ''
    
    if (rOck > 0 && rOck < 2)
    {
        Aichoice.src="img/rock.svg";
        result3.innerHTML ="Tie";
        oval5.style.display= "none";
        oval6.style.display="none";
        // Playagain3.style.display="block";
    }
    else if(rOck > 1 && rOck <3){
        Aichoice.src="img/hand.svg";
        result3.innerHTML ="You Lose";

        setTimeout(function(){
            oval6.style.display="flex";
        },1000)
        oval5.style.display="none";
        // Playagain3.style.display="block";
        if(wincount > 0){
            wincount--; // Increment the loss count when the player loses
            win.textContent = wincount;
        }
    }
    else if(rOck > 2 && rOck < 4){
        
        Aichoice.src="img/hand2.svg";
        result3.innerHTML ="You Win";
        oval6.style.display="none";
        
        setTimeout(function(){
            oval5.style.display= "flex";
        },1000);

        wincount++; // Increment the win count when the player wins
        win.innerHTML = wincount;

        
    }
    // console.log(ai);
})




















































// result.innerHTML = "You Win!" ;
// }
// else if(Aichoice.src === "img/hand1.svg")
// {
//     console.log('Draw ');
// }
// else if(Aichoice ===  "img/hand2.svg")
// {
//     console.log('Lose');
//     }







        // function Home(){
        //     window.open(" index.html")
        // }

      
     



        // function createNewDivs(data) {
        //     const DivsContainer = document. getElementById("box1");
        
        //     data. forEach ((item) => {
        //     const newDiv = document.createElement("div");
        //     newDiv.classList.add("newDiv");
        //     newDiv.innerHTML =`
        //     ‹div class="logo">
        //     <img src="img/hand.svg">
         
        //     </div> 
        
        //     </div>`
        //     ;
        //     DivsContainer.appendChild(newDiv);
        //     });
        // }




        // hAnd2.addEventListener('click', () =>{

        //     document.querySelector(".box2").style.display = "block";
        //     document.getElementById("tag").style.display = "none";
        
        //     let Hand2 = Math.ceil(Math.random()*3);
        //     let ai = '';
        //     if (Hand2 > 0 && Hand2 < 2){
        //       ai = 'Rock';
        //     }
        //  else if(Hand2 > 1 && Hand2 <3){
        //     ai = 'Paper';
        // }
        //     else if(Hand2 >= 2 && Hand2 < 4){
        //         ai = 'Scissors';
            
        //     }
        //     console.log(ai)
        //     if (ai === 'Rock')
        //     {
        //         console.log('Lose');
        //     }
        //     else if(ai === 'Paper')
        //     {
        //         console.log('Win! ');
        //     }
        //     else if(ai === 'Scissors')
        //     {
        //         console.log('Draw');
        //         }
        //     })
        // if (ai === 'Rock')
        // {
        //     console.log('Draw');
        // }
        // else if(ai === 'Paper')
        // {
        //         console.log('You Lose! ');

        // }
        // else if(ai === 'Scissors')
        // {
        //     console.log('You Win!');
        //     }
