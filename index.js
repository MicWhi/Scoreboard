const homeScore = document.getElementById("homeScore");
const homeGoal = document.getElementById("homeGoal");
const awayScore = document.getElementById("awayScore");
const awayGoal = document.getElementById("awayGoal");

const homeYellow = document.getElementById("homeYellow");
const homeRed = document.getElementById("homeRed");
const homeYellowCount = document.getElementById("homeYellowCount");
const homeRedCount = document.getElementById("homeRedCount");

const homeYellowDisplay = document.getElementById("homeYellowDisplay");
const homeRedDisplay = document.getElementById("homeRedDisplay");
const awayYellowDisplay = document.getElementById("awayYellowDisplay");
const awayRedDisplay = document.getElementById("awayRedDisplay");

let homeScoreValue = 0;
let awayScoreValue = 0;

let homeYellowValue = 0;
let homeRedValue = 0;
let awayYellowValue = 0;
let awayRedValue = 0;

homeGoal.addEventListener("click", () => {
    homeGoalFunction();
})

awayGoal.addEventListener("click", () => {
    awayGoalFunction();
})

const homeGoalFunction = () => {
    homeScoreValue++;
    console.log(homeScoreValue);
    homeScore.textContent = homeScoreValue;
    addEvent("Hearts Goal", "test time", "home");
}

const awayGoalFunction = () => {
    awayScoreValue++;
    console.log(awayScoreValue);
    awayScore.textContent = awayScoreValue;
    addEvent("Hibs Goal", "test time", "away");
}

homeYellow.addEventListener("click", () => {
    homeYellowFunction();
})

homeRed.addEventListener("click", () => {
    homeRedFunction();
})

awayYellow.addEventListener("click", () => {
    awayYellowFunction();
})

awayRed.addEventListener("click", () => {
    awayRedFunction();
})

const homeYellowFunction = () => {
    homeYellowValue++;
    console.log(homeYellowValue);
    homeYellowDisplay.textContent = homeYellowValue;
}

const homeRedFunction = () => {
    homeRedValue++;
    console.log(homeRedValue);
    homeRedDisplay.textContent = homeRedValue;
}

const awayYellowFunction = () => {
    awayYellowValue++;
    console.log(awayYellowValue);
    awayYellowDisplay.textContent = awayYellowValue;
}

const awayRedFunction = () => {
    awayRedValue++;
    console.log(awayRedValue);
    awayRedDisplay.textContent = awayRedValue;
}

// Timer

let [seconds,minutes] = [0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,1000);
});

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [seconds,minutes] = [0,0];
    timerRef.innerHTML = '00 : 00'; // sets the HTML inside the timerRef (i.e .timerDisplay)
});


function displayTimer(){
    seconds+=1;

        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }

 let m = minutes < 10 ? "0" + minutes : minutes; // q mark works: "condition ? valIfTrue : valIfFalse"
 let s = seconds < 10 ? "0" + seconds : seconds;

 timerRef.innerHTML = `${m} : ${s}`;
}


// New List Item

function addEvent(eventName, eventTime, homeOrAway) {

    // Get a reference to the table
    let tableRef = document.getElementById("matchEvents");
  
    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);

    // Insert a cell in the row at 
    let newCell = newRow.insertCell();
    let newCell2 = newRow.insertCell();
    let newCell3 = newRow.insertCell();
 
    // Append a text node to the cell
    let eventTimeTextNode = document.createTextNode(eventTime);

    newCell2.appendChild(eventTimeTextNode);

    if (homeOrAway === "home") {
        let homeEventNameTextNode = document.createTextNode(eventName + "   ");
        newCell.appendChild(homeEventNameTextNode);
    } 
    else if (homeOrAway === "away") {
        
        let awayEventNameTextNode = document.createTextNode("   " + eventName);
        newCell3.appendChild(awayEventNameTextNode);
    }

    }