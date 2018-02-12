// GAME
//Global variables
// $(document).ready(function() {


// Object of Characters
var characterArray = ["frodo","smeagol","gandalf","sauron"];
var characters = {
    frodo : {
        name: 'frodo',
        health: 120,
        attack: 12,
        imgURL: "https://cdn.costumewall.com/wp-content/uploads/2017/06/frodo-baggins.jpg",
        enemyAttack: 20
    },
    "smeagol" : {
        name: 'smeagol',
        health: 130,
        attack: 12,
        imgURL: "https://cdna.artstation.com/p/assets/images/images/004/532/170/large/eduardo-ruiz-urrejola-gollum-pose09.jpg?1484348343",
        enemyAttack: 20
    },
    "gandalf" : {
        name: 'gandalf',
        health: 160,
        attack: 20,
        imgURL: "https://vignette.wikia.nocookie.net/lotr/images/8/8d/Gandalf-2.jpg/revision/latest?cb=20130209172436",
        enemyAttack: 22
    },
    "sauron" : {
        name: 'sauron',
        health: 180,
        attack: 25,
        imgURL: "https://wordsonfilmsdotcom.files.wordpress.com/2014/06/sauron2.png?w=600&h=330",
        enemyAttack: 20
    }
}


var charFrodo = $('#char-frodo')
var charSmeagol = $('#char-smeagol')
var charGandalf = $('#char-gandalf')
var charSauron = $('#char-sauron')



// 1. Have four different sections. 1 for charactesr. One for your characters. One for enemies. One for the fight  button. One for defender section.

// generate a div for each character with a name, image, and health value.


// Place them all in first character section.
// Click on one character it moves to your character section. The others omve to the enemies available to attack.
// User needs to choose one to fight and on click of it, it moves to defender section.
// When hitting the attack button, your character and the defender character attack eatother with points. You cannot get out of the battle.
// who ever ends up with 0 or less health first dies and a restart button comes up to completely reset the game if your character dies.
// If the other character is defeated, then they are removed from the game and you can choose another character to fight.
// IF attack button is clicked, then the bottom displays "no enemy here"
// Your attack power increases with every blow and continues to stay higher when you defeat a character. 
// If you beat all the enemies, you win and there is a restart button to restart. 

// Attack Button Click
// $("#attack-btn").click(function(){
//     $(".your-character").text("Hello world!");
// });

// });
