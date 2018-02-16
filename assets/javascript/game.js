// GAME=======================================

// Game Object
var game = {
    characters : {
        balrog : {
            name: 'balrog',
            health: 150,
            attack: 16,
            imgURL: "http://eskipaper.com/images/scary-monster-wallpaper-1.jpg",
        },
        smeagol : {
            name: 'smeagol',
            health: 130,
            attack: 14,
            imgURL: "https://cdna.artstation.com/p/assets/images/images/004/532/170/large/eduardo-ruiz-urrejola-gollum-pose09.jpg?1484348343",  
        },
        gandalf : {
            name: 'gandalf',
            health: 160,
            attack: 18,
            imgURL: "https://vignette.wikia.nocookie.net/lotr/images/8/8d/Gandalf-2.jpg/revision/latest?cb=20130209172436",
            // createDiv: initCharacter()
        },
        sauron : {
            name: 'sauron',
            health: 180,
            attack: 20,
            imgURL: "https://wordsonfilmsdotcom.files.wordpress.com/2014/06/sauron2.png?w=600&h=330",
        }
    },
    variables : {
        yourCharacter : "",
        yourHealth : 0,
        yourAttack : 0,
        yourEnemies : "",
        yourOpponent : "",
        charactersLeft : 0,
    },
    functions : {
        initCharacter : function(name,value,attack) {
            var wrapDiv = $("<div></div>").addClass(`char-div col-xs-3 choice enemy char-${name}`)
            var nameDiv = $("<h4></h4>").text(name);
            var health = $("<p class = 'health-display'></p>").text(value);
            wrapDiv.append(nameDiv, health);
            wrapDiv.attr("health",value);
            wrapDiv.attr("attack",attack);
            $(".character-choose").append(wrapDiv);
        },
        initGame : function() {
            yourCharacter : "";
            yourHealth : 0;
            yourAttack : 0;
            yourEnemies : "";
            yourOpponent : "";
            charactersLeft = 4;
            $('.char-div').remove();
            this.initCharacter(game.characters.gandalf.name, game.characters.gandalf.health,game.characters.gandalf.attack);
            this.initCharacter(game.characters.smeagol.name, game.characters.smeagol.health,game.characters.smeagol.attack);
            this.initCharacter(game.characters.balrog.name, game.characters.balrog.health,game.characters.balrog.attack);
            this.initCharacter(game.characters.sauron.name, game.characters.sauron.health,game.characters.sauron.attack);
            game.functions.pickCharacter();
            $('.your-character').removeClass('col-xs-offset-3');
            $('.titles').show();
            $('.storyline').show();
            $('.character-choose').show();
            $('.your-character').hide();
            $('.fight-button').hide();
            $('.result-note').hide();
            $('.opponent').hide();
            $('.enemies').hide();
            $('.your-death-note').hide();
            $('.opponent-death-note').hide();            
        },
        pickCharacter : function() {
            $('.choice').on("click",function(event){
                $('.your-character').show()
                $('.button-text').text('Attack!')
                $('.fight-button').show()
                $('.opponent').show()
                $('.enemies').show()
                $(this).removeClass('enemy');
                yourCharacter = $(this);
                yourHealth = $(this).attr('health');
                // $(this).children().text(yourHealth);
                yourAttack = $(this).attr('attack');
                yourHealth = parseInt(yourHealth);
                yourAttack = parseInt(yourAttack);
                $('.your-character').append(yourCharacter);
                yourEnemies = $('.enemy');
                yourEnemies.removeClass('choice');
                $('.enemies').append(yourEnemies);
                console.log('character chosen');
                $('div').off("click");
                $('.character-choose').hide();
                $('.storyline').hide();
                game.functions.pickEnemyToFight();  
            });
        },
        pickEnemyToFight : function() {
            $('.enemy').on("click",function(event){
                $('.enemy-text').show();                
                $('.enemies').show();                
                $('.opponent-death-note').hide()
                $(this).addClass('yourOpponent');
                yourOpponent = $(this);
                opponentHealth = $(this).attr('health');
                opponentAttack = $(this).attr('attack');
                opponentHealth = parseInt(opponentHealth);
                opponentAttack = parseInt(opponentAttack);
                $('.opponent').append(yourOpponent);
                $('div').off("click");
                console.log("enemy chosen");
                game.functions.attack();
                if (charactersLeft <= 2){
                    $('.enemies').hide();
                }
            });
        },
        attack : function(){
            $('.fight-button').on("click",function(event){
                yourHealth = yourHealth - opponentAttack;
                opponentHealth = opponentHealth - yourAttack;
                yourAttack = yourAttack + Math.floor(yourAttack * 0.25);
                yourCharacter.children('.health-display').text(yourHealth);
                yourOpponent.children('.health-display').text(opponentHealth);
                console.log(`Your Character's Health: ${yourHealth}`);
                console.log(`Your Opponent's Health: ${opponentHealth}`);
                if (opponentHealth <= 0 && yourHealth <= 0){
                    yourCharacter.remove();
                    yourOpponent.remove();                             
                    $('.button-text').text("Restart!");
                    $('.fight-button').off("click");
                    $('.titles').hide();
                    $('.result-note').show();
                    $('.result-note').text("Drats! Dying sucks doesn't it? Click the sheild to restart and redeem yourself...");
                    $('.char-div').remove()
                    $('.fight-button').on("click",function(event){
                        game.functions.initGame();
                    });                
                } else if (yourHealth <= 0){
                    yourCharacter.remove();
                    $('.button-text').text("Restart!");
                    $('.fight-button').off("click");
                    $('.your-death-note').text('You\'re Dead. Shape up and restart...')
                    $('.your-death-note').show()
                    $('.fight-button').on("click",function(event){
                        game.functions.initGame();
                    });
                } else if (opponentHealth <= 0){
                    yourOpponent.remove()  
                    $('.fight-button').off("click"); 
                    $('.opponent-death-note').text("Great job! Pick your next enemy...").show()         
                    charactersLeft = charactersLeft - 1;                            
                    game.functions.pickEnemyToFight();   
                    if (charactersLeft === 1){
                        $('.button-text').text("Restart!");
                        $('.fight-button').off("click");
                        $('.fight-button').on("click",function(event){
                        game.functions.initGame();
                        });
                        game.functions.winScreen()
                    }            
                }
            });
        },
        winScreen : function() {
            $('.your-character').addClass('col-xs-offset-3');
            // $('.fight-button').hide()
            $('.opponent').hide();
            yourCharacter.children('.health-display').text("Wins!");            
        }
    }
}

// When document is ready, start game
$(document).ready(function() {
    game.functions.initGame();
});