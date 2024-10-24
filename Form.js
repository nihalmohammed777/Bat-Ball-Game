// let bat=document.querySelector("#bat")
// let ball=document.querySelector("#ball")
// let stump=document.querySelector("#stump")
// let reset=document.querySelector("#reset")

// let scorevalue=localStorage.getItem('score')
// let score;

// function resetscore(scorevalue){
//     score=scorevalue ? JSON.parse(scorevalue) :{
//         win:0,
//         lost:0,
//         tie:0  
//     }

//     score.displayscore=function(){
//         return `score: won: ${score.win} , lost : ${score.lost}, tie : ${score.tie}`
//     }

//     showresult()
// }

// function generatecomputerchoice(){
//     let randomnumber=Math.random()*3;
//     if(randomnumber>0 && randomnumber<=1){
//         return "bat"
//     }else if(randomnumber >1 && randomnumber<=2){
//         return 'ball'
//     }else{
//         return 'stump'
//     }
// }

// function getresult(usermove,computermove){
//     if(usermove === 'bat'){
//         if(computermove === 'ball'){
//             score.win++;
//             return 'userwon'
//         }else if(computermove === 'bat'){
//             score.tie++;
//             return 'its a tie'
//         }else if(computermove === 'stump'){
//             score.lost++;
//             return'computer won'
//         }
//     }
    
//     else if(usermove === "ball"){
//         if(computermove === 'ball'){
//             score.tie++;
//             return 'its a tie'
//         }else if(computermove === 'bat'){
//             score.lost++;
//             return 'computer has won'
//         }else if(computermove === 'stump'){
//             score.win++;
//             return 'user won'
//         }
//     }
    
//     else{
//         if(computermove === 'ball'){
//             score.lost++;
//             return 'computer won'
//         }else if(computermove === 'bat'){
//             score.win++;
//             return 'user won'
//         }else if(computermove === 'stump'){
//             score.tie++;
//             return'its a tie'
//         }
//     }
// }


// function showresult(usermove,computermove,result){
//     localStorage.setItem('score',JSON.stringify(score))
//     document.querySelector('#user-move').innerText=`you have choosen ${usermove}`
//     document.querySelector('#computer-move').innerText=`computer have choosen ${computermove}`
//     document.querySelector('#result'). innerText=result
//     document.querySelector('#score').innerText=score.displayscore()
// }


// bat.addEventListener("click",function(){
//     let computerchoice= generatecomputerchoice();
//     let resultmsg = getresult('bat',computerchoice)
//     showresult('bat',computerchoice,resultmsg)
// })

// ball.addEventListener("click",function(){
//     let computerchoice= generatecomputerchoice();
//     let resultmsg = getresult('ball',computerchoice)
//     showresult('ball',computerchoice,resultmsg)
// })

// stump.addEventListener("click",function(){
//     let computerchoice= generatecomputerchoice();
//     let resultmsg = getresult('stump',computerchoice)
//     showresult('stump',computerchoice,resultmsg)
// })

// reset.addEventListener("click",function(){
//     localStorage.clear()
//     resetscore()
// })

let bat = document.querySelector("#bat");
let ball = document.querySelector("#ball");
let stump = document.querySelector("#stump");
let reset = document.querySelector("#reset");

let scorevalue = localStorage.getItem('score');
let score;

// Initialize score when page loads
resetscore(scorevalue);

function resetscore(scorevalue) {
    score = scorevalue ? JSON.parse(scorevalue) : {
        win: 0,
        lost: 0,
        tie: 0
    };

    score.displayscore = function () {
        return `score: won: ${score.win} , lost: ${score.lost}, tie: ${score.tie}`;
    };

    showresult(); // Display initial score
}

function generatecomputerchoice() {
    let randomnumber = Math.random() * 3;
    if (randomnumber > 0 && randomnumber <= 1) {
        return "bat";
    } else if (randomnumber > 1 && randomnumber <= 2) {
        return 'ball';
    } else {
        return 'stump';
    }
}

function getresult(usermove, computermove) {
    if (usermove === 'bat') {
        if (computermove === 'ball') {
            score.win++;
            return 'userwon';
        } else if (computermove === 'bat') {
            score.tie++;
            return 'its a tie';
        } else if (computermove === 'stump') {
            score.lost++;
            return 'computer won';
        }
    } else if (usermove === "ball") {
        if (computermove === 'ball') {
            score.tie++;
            return 'its a tie';
        } else if (computermove === 'bat') {
            score.lost++;
            return 'computer has won';
        } else if (computermove === 'stump') {
            score.win++;
            return 'user won';
        }
    } else {
        if (computermove === 'ball') {
            score.lost++;
            return 'computer won';
        } else if (computermove === 'bat') {
            score.win++;
            return 'user won';
        } else if (computermove === 'stump') {
            score.tie++;
            return 'its a tie';
        }
    }
}

function showresult(usermove = '', computermove = '', result = '') {
    localStorage.setItem('score', JSON.stringify(score));

    if (usermove && computermove && result) {
        document.querySelector('#user-move').innerText = `You have chosen ${usermove}`;
        document.querySelector('#computer-move').innerText = `Computer has chosen ${computermove}`;
        document.querySelector('#result').innerText = result;
    }
    
    document.querySelector('#score').innerText = score.displayscore();
}

bat.addEventListener("click", function () {
    let computerchoice = generatecomputerchoice();
    let resultmsg = getresult('bat', computerchoice);
    showresult('bat', computerchoice, resultmsg);
});

ball.addEventListener("click", function () {
    let computerchoice = generatecomputerchoice();
    let resultmsg = getresult('ball', computerchoice);
    showresult('ball', computerchoice, resultmsg);
});

stump.addEventListener("click", function () {
    let computerchoice = generatecomputerchoice();
    let resultmsg = getresult('stump', computerchoice);
    showresult('stump', computerchoice, resultmsg);
});

reset.addEventListener("click", function () {
    localStorage.clear();
    resetscore();
});
