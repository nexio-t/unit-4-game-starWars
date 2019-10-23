$(document).ready(function() {


// think of this? 
// set value for each player user 
// dot hide method 

// variable player selected 

var playerSelected = 0; 

// variable enemy selected 
var enemySelected = 0; 

// user click count 
var userClick = 1; 

// global variables for player health, enemy health 
var player1Health;  
var player2Health;  
var player3Health;  
var player4Health;

// reset game function 
function reset() {
    enemySelected = 0; 
}; 

// object with attack and counterattack values: note that each index value corresponds to the HTML order of players, e.g., 0 is Darth Vader

var playersAttack = [
    {attackPower: 6, counterAttack: 12}, 
    {attackPower: 10, counterAttack: 14},
    {attackPower: 14, counterAttack: 6}, 
    {attackPower: 8, counterAttack: 18}
];

// on click 

// To select 
if (playerSelected == 0 && enemySelected == 0) {
$(document).on( "click", function(e) {
    
    var objectClicked = $(e.target); 
    console.log(objectClicked.attr("id")); 
    

    if (playerSelected == 0)   {
        if (objectClicked.attr("id") == "darthImage") {
            $("#original1").appendTo("#yourCharacterLoc"); 
            $("#dvHealth").addClass("userPlayer");
            playerSelected++; 
            console.log(playerSelected);

            $("#original2").appendTo("#enemyLocation"); 
            $("#darth2Image").addClass("enemySelect"); 

            $("#original3").appendTo("#enemyLocation"); 
            $("#lukeImage").addClass("enemySelect");

            $("#original4").appendTo("#enemyLocation"); 
            $("#obiImage").addClass("enemySelect");
            

        } if (objectClicked.attr("id") == "darth2Image") {
            $("#original2").appendTo("#yourCharacterLoc"); 
            $("#dsHealth").addClass("userPlayer");
            playerSelected++; 
            console.log(playerSelected);

            $("#original1").appendTo("#enemyLocation"); 
            $("#darthImage").addClass("enemySelect"); 

            $("#original3").appendTo("#enemyLocation"); 
            $("#lukeImage").addClass("enemySelect");

            $("#original4").appendTo("#enemyLocation"); 
            $("#obiImage").addClass("enemySelect");

        } if (objectClicked.attr("id") == "lukeImage") {
            $("#original3").appendTo("#yourCharacterLoc");
            $("#lukeHealth").addClass("userPlayer"); 
            playerSelected++; 
            console.log(playerSelected);

            $("#original1").appendTo("#enemyLocation"); 
            $("#darthImage").addClass("enemySelect"); 

            $("#original2").appendTo("#enemyLocation"); 
            $("#darth2Image").addClass("enemySelect"); 

            $("#original4").appendTo("#enemyLocation"); 
            $("#obiImage").addClass("enemySelect");

        } if (objectClicked.attr("id") == "obiImage") {
            $("#original4").appendTo("#yourCharacterLoc");
            $("#obiHealth").addClass("userPlayer"); 
            playerSelected++; 
            console.log(playerSelected);

            $("#original1").appendTo("#enemyLocation"); 
            $("#darthImage").addClass("enemySelect"); 

            $("#original2").appendTo("#enemyLocation"); 
            $("#darth2Image").addClass("enemySelect"); 

            $("#original3").appendTo("#enemyLocation"); 
            $("#lukeImage").addClass("enemySelect");
        }
    }

    }); // corresponds to on click above 

}
console.log(playerSelected); 

// To select first enemy 
$(document).on( "click", function(e) {

    var objectClicked = $(e.target); 
    console.log(objectClicked.attr("id"));
    console.log(objectClicked.hasClass("enemySelect"));


        if (objectClicked.attr("id") == "darthImage" && objectClicked.hasClass("enemySelect") && enemySelected === 0) {
            $("#original1").appendTo("#defenderLocation"); 
            $("#dvHealth").addClass("defenderPlayer");
            enemySelected++; 
        } if (objectClicked.attr("id") == "darth2Image" && objectClicked.hasClass("enemySelect") && enemySelected ===0) {
            $("#original2").appendTo("#defenderLocation"); 
            $("#dsHealth").addClass("defenderPlayer");
            enemySelected++; 
        } else if (objectClicked.attr("id") == "lukeImage" && objectClicked.hasClass("enemySelect") && enemySelected ===0) {
            $("#original3").appendTo("#defenderLocation"); 
            $("#lukeHealth").addClass("defenderPlayer");
            enemySelected++; 
        } else if (objectClicked.attr("id") == "obiImage" && objectClicked.hasClass("enemySelect") && enemySelected ===0) {
            $("#original4").appendTo("#defenderLocation"); 
            $("#obiHealth").addClass("defenderPlayer");
            enemySelected++; 
        }

});

// move the variables below here to make them global, then move that local

// Attack button 
$("input.attackButton").on("click", function(e) {

    // fetch your character and their health 
    var selectedPlayerHealth = $(".userPlayer").text();   

    console.log(selectedPlayerHealth); 

    // index value of selected enemy then subtract your character's health by other player's counterattack
    var objectIndex = $("#defenderLocation").children(".original").attr("value"); 
    console.log(objectIndex); 

    console.log(playersAttack[objectIndex].counterAttack); 

    var defAttackValue = playersAttack[objectIndex].counterAttack;

    var newUserHealth = selectedPlayerHealth -= defAttackValue; 

    console.log("new health is:" + newUserHealth); 

    $(".userPlayer").text(newUserHealth); 

    var defenderHealth = $(".defenderPlayer").text(); 

    console.log(defenderHealth); 

    var userIndex = $("#yourCharacterLoc").children(".original").attr("value"); 
    console.log(userIndex);

    var playerAttackValue = playersAttack[userIndex].attackPower;

    playerAttackValue *= userClick; 

    console.log("player attack value is: " + playerAttackValue);

    var newDefHealth = defenderHealth -= playerAttackValue; 

    console.log("defender health is: " + newDefHealth);

    $(".defenderPlayer").text(newDefHealth); 

    userClick++; 

    console.log("user click is: " + userClick); 

    // conditional to check if the user's health points are below zero 

    if (newUserHealth <= 0) {
        // insert html that you have lost 
        $("#lostMessage").append("<p>Oh no, you've lost!</p>");
        // insert button to restart game 
        $("#restartButton").append("<input id='restart' type='button' value='Restart Game' class='restart'/>");


        $("#restart").on("click", function() { 
 
            console.log("Clicked");
            // window.location.href = window.location.href;
            location.reload(); 
        });

    }

    // If defender health is zero or lower, then remove the class defenderPlayer and hide that element, and reset enemy selected to zero -- stylize and clean up your games
    if (newDefHealth <= 0) {
        $("#defenderLocation").children().hide(); 
        $("span").removeClass("defenderPlayer"); 
        $("#winMessage").text("Nice! You slayed your enemy! Choose another if you'd like to continue playing.");
        reset(); 
    }

});


// Reload function if you've lost game after click "restart"
function reloadFunc() {
    document.location.reload(); 
};

// $("input.restart").on("click", function() { 
 
//     window.location.href = window.location.href;
//     // location.reload(); 
// });

});





    // once player selects image 
        // move image to your character section 
        // hide remaining three images
        // then, display remaining three images under enemies available to attack 
        // increment player selected variable 

    // once player selected equals one and enemy is clicked (enemy is zero)
        // move image to defender 
        // then increment enemy player variable 
    
    // if player selected && enemy selected && user clicks attack 
        // then reduce player health by enemy counter attack 
        // then reduce enemy health by player attack power 

        // If player health equals zero 
            // then game loss 
            // reset game 
        // if enemy health equals zero 
            // hide enemy permanently 
