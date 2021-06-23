var wins = 0

function main() {
    document.getElementById("hearts").innerHTML = 13
    //<------These are our basic variables------->
    var heart = 13
    var random_words = ["finger", "eminem", "number", "hungry", "burgerking", "bmw", "egg", "metropol", "bashir", ""]
    // <-----------Computer choose one word from random_rods array------------->
    var computer = Math.random()
    computer = computer * (random_words.length - 1)
    computer = Math.floor(computer)
    var word = random_words[computer]//komputerin secdiyi random soz.
    //<----These are our necessary variables---->
    var letters_w = []
    var wordsletters = []
    var wrongletters = []
    var currents = '_|'.repeat(word.length)
    currents = currents.split("|")
    //<---------------We push word's letters to letters_w array----------------->
    for (c of word) {
        letters_w.push(c)
    }
    //<---------Okay,Our main function--------->
    document.getElementById('current').innerHTML = currents;
    function presskey(t) {
        userchoose = t.key

        word_index = letters_w.indexOf(userchoose)
        if (letters_w.indexOf(userchoose) != -1) {
            index = letters_w.indexOf(userchoose)
            currents[index] = userchoose
            letters_w[index] = "-"
            index = letters_w.indexOf(userchoose)
            currents[index] = userchoose
            document.getElementById("current").innerHTML = (currents)


        }
        else if (word.indexOf(userchoose) == -1) {
            if (wrongletters.indexOf(userchoose) == -1) {
                wrongletters.push(userchoose)
                heart--

                document.getElementById("wrongs").innerHTML = wrongletters
                document.getElementById("hearts").innerHTML = heart
            }

        }


        if (currents.indexOf("_") == -1) {
            wins += 1
            main()
            document.getElementById("wins").innerHTML = ("Wins: " + wins)

        }
        else if (heart == 0) {

            alert("You lose")
            main()

        }
    }
    window.onkeypress = presskey
}
function sorus() {
    var x = confirm("Are you want play game?")
    if (x == true) {
        main()
    }
    else {
        alert("Then bye")
    }
}
sorus()
