
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
        document.getElementById("rocket").style+="relative-right";
    }
});




// Write your JavaScript code here.
// Remember to pay attention to page loading!