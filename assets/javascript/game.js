$(document).ready(function() {


// think of this? 
// set value for each player user 
// dot hide method 

// variable player selected 

var playerSelected = 0; 

// variable enemy selected 
var enemySelected = 0; 


// global variables for player health, enemy health 
var player1Health;  
var player2Health;  
var player3Health;  
var player4Health;

// reset game function 
function reset() {
    playerSelected = 0; 
    enemySelected = 0; 
}; 

// create object with all the enemies of fixed element 

var playersAttack = [
    {player1Attack: 6, player1Counter: 12}, 
    {player2Attack: 10, player2Counter: 14},
    {player3Attack: 14, player3Counter: 6}, 
    {player4Attack: 8, player4Counter: 18}
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
            enemySelected++; 
        } if (objectClicked.attr("id") == "darth2Image" && objectClicked.hasClass("enemySelect") && enemySelected ===0) {
            $("#original2").appendTo("#defenderLocation"); 
            enemySelected++; 
        } else if (objectClicked.attr("id") == "lukeImage" && objectClicked.hasClass("enemySelect") && enemySelected ===0) {
            $("#original3").appendTo("#defenderLocation"); 
            enemySelected++; 
        } else if (objectClicked.attr("id") == "obiImage" && objectClicked.hasClass("enemySelect") && enemySelected ===0) {
            $("#original4").appendTo("#defenderLocation"); 
            enemySelected++; 
        }

});

// Attack button 
$("input").on("click", function(e) {

    // fetch your character and their health 
    var selectedPlayerHealth = $(".userPlayer").text();   

    console.log(selectedPlayerHealth); 

    // then subtract your character's health by other player's counterattack
    
    // selectedPlayerHealth -=  
    // then display the difference 

    // fetch the defender and their health 
    // then subtract defender's health by your attack power and set you attack power equal 

});

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
