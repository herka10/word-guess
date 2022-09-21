// pseudocode

// select elements from DOM
// start button
// word-blans div

// var for array of words

// addEventListener to start button (click)
    // get random word from words array
    // reset the word-blanks, an _ for each Letter of the new word

var startBtn = document.querySelector('.start-button')
var wordBlanksEl = document.querySelector('.word-blanks')
var scoreEl = document.querySelector('.score')

var validChars = "abcdefghijklmnopqrstuvwxyz"
var words = ["javascript", "variable", "function", "object", "python", "localstorage", "timeout", "interval", "functions", "methods", "eventlistener", "vscode"]
var word 
var guessedCharacters = []
var score = 0

function checkWord() {
    var wordFromDOM = wordBlanksEl.textContent.split(' ').join('')
    if (word === wordFromDOM) {
        score++
        scoreEl.textContent = score
        startRound()
    }
}

function handleKeydown(event) {
    if (validChars.includes(event.key)) {
        //keep track of the character that was guessed
        //re-rendered wordBlanks.textContent
        guessedCharacters.push(event.key)
        renderCharacters()
    }
}

function renderCharacters() {
    // create a new string
    // reset the word-blanks - an _ for each letter of the new word
    // var to hold a new string 
    // if we have guessed the character
        // then add the character into our str
    // else add an _ into str
    
    // set textContext of wordBlanksEl to be str 

    var str = ""
    for (var i = 0; i < word.length; i++) {
        str += "_ "
        var letter = word[i]
        if ( guessedCharacters.includes(letter) ) {
            str += letter + ' '
        }
        else {
            str += '_ '
        }
    }
    wordBlanksEl.textContent = str.trim()
    checkWord()
}

function startRound () {
    guessedCharacters = []
    var randomIndex = Math.floor(Math.random() * words.length)
    word = words[randomIndex]
    renderCharacters()
}

startBtn.addEventListener("click", startRound)

document.addEventListener('keydown', handleKeydown)