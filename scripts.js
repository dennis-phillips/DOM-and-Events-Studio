
window.addEventListener('load', function(){
    let takeOffButton;
    takeOffButton = document.getElementById("takeoff");
    takeOffButton.addEventListener("click", confirmReady);
    let landButton= document.getElementById("landing");
    landButton.addEventListener("click", landingActions);
    let abortMissionButton = document.getElementById("missionAbort");
    abortMissionButton.addEventListener("click", missionAbortActions);
    let leftButton = document.getElementById("left");
    leftButton.addEventListener("click", moveLeft);
    let rocket = document.getElementById("rocket");
    rocket.style.position ="absolute";
    rocket.style.left="0px";
    rocket.style.bottom="0px";
    let rightButton = document.getElementById("right");
    rightButton.addEventListener("click", moveRight);
    let upButton = document.getElementById("up");
    upButton.addEventListener("click",moveUp);
    let downButton = document.getElementById("down");
    downButton.addEventListener("click", moveDown);

    function confirmReady(){
        let confirmationPrompt = confirm("Confirm that the shuttle is ready for takeoff.");
        confirmationPrompt;
        if(confirmationPrompt === true){
            document.getElementById('flightStatus').innerHTML= "Shuttle in flight";
            document.getElementById('shuttleBackground').style.backgroundColor ="blue";
            document.getElementById('spaceShuttleHeight').innerHTML+=10000;
        }
    }
    function landingActions(){
        let alertPrompt = alert("The shuttle is landing. Landing gear engaged.");
        alertPrompt;
        document.getElementById("flightStatus").innerHTML="The shuttle has landed.";
        document.getElementById('shuttleBackground').style.backgroundColor = "green";
        document.getElementById('spaceShuttleHeight').innerHTML=0;
    }

    function missionAbortActions(){
        let confirmAbortPrompt = confirm( "Confirm that you want to abort the mission.");
        if(confirmAbortPrompt === true){
            document.getElementById("flightStatus").innerHTML="Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor="green";
            document.getElementById('spaceShuttleHeight').innerHTML=0;
        }
    }

    function moveLeft(){
        let counter = parseInt(rocket.style.left);
        counter-=10;
        rocket.style.left = counter+"px";
        
    }

    function moveRight(){
        let counter = parseInt(rocket.style.left);
        counter+=10;
        rocket.style.left = counter+"px";
    }

    function moveUp(){
        let counter = parseInt(rocket.style.bottom);
        
        let shuttleHeight = parseInt(document.getElementById('spaceShuttleHeight').innerHTML);
        shuttleHeight+=10000;
        counter+=10;
        rocket.style.bottom = counter+"px";
        document.getElementById('spaceShuttleHeight').innerHTML=shuttleHeight;
        
    }

    function moveDown(){
        let counter = parseInt(rocket.style.bottom);
        let shuttleHeight = parseInt(document.getElementById('spaceShuttleHeight').innerHTML);
        shuttleHeight-=10000;
        counter-=10;
        rocket.style.bottom = counter+"px";
        document.getElementById('spaceShuttleHeight').innerHTML = shuttleHeight;
    }
});




// Write your JavaScript code here.
// Remember to pay attention to page loading!