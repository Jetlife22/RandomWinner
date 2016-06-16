//attempting to declare the empty array first
var theMembers = [];
//declaring the event listeners 
var event1 = document.getElementById("enterMembers");
event1.addEventListener('click', enteringMembers, false);

var event2 = document.getElementById("chooseWinner");
event2.addEventListener('click', choosingWinner, false);

function enteringMembers ()
{
//declaring a variable that links with an element outside in the html page
var showMembers = document.getElementById("members");

//The push() method adds one or more elements to the end of an array and returns the new length of the array.
theMembers.push(document.getElementById("input1").value);

//the join property joins all of the elements of an array into a string going ,downwards because of the <br>.
showMembers.innerHTML = theMembers.join('<br/>');
}
//function choosingWinner linking to the "chooseWinner" button through the event2 variable inside the JS sheet
function choosingWinner () 
{
    //Declaring the variable "randomChoice" as a random picker for the "theMembers" array, no base numbers to start with, all members are viable to be picked.
    var randomChoice = theMembers[~~(Math.random() * theMembers.length)]
    //result of random pick for that button sequence is then displayed using the "getElementById" connecting to the "theWinner" box and adding text + the variable results for "randomChoice".
    document.getElementById("theWinner").innerHTML = "AAAnd the winner is ... " + randomChoice + "!!! Congrats!!";
}


