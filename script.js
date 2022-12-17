var reset = false;
var currentMoves = 0;
var solved = false;
function initialize() {
    currentMoves = 0;
    moves.innerHTML = 0;
    reset = false;
    solved = false;
    document.getElementById("shufflebtn").style.visibility = "hidden";
    document.getElementById("solvedMessage").innerHTML = "Unsolved";
}
function isReset() {
    reset = true;
}
function swapTiles(tile1, tile2) {
    if(!reset)
    {
        currentMoves ++;
        moves.innerHTML = currentMoves;
    }
    text1id = "text" + tile1.substr(4);
    text2id = "text" + tile2.substr(4);
    var temp = document.getElementById(tile1).className;
    var tempText = document.getElementById(text1id).innerHTML;
    document.getElementById(tile1).className = document.getElementById(tile2).className;
    document.getElementById(text1id).innerHTML = document.getElementById(text2id).innerHTML;
    document.getElementById(tile2).className = temp;
    document.getElementById(text2id).innerHTML = tempText;
    checkIfSolved();
}
function tile(row, col) {
    var t = document.getElementById("tile" + row + col)
    var t = t.className;
    if (t != "empty") {
            if (col < 4) {
                if (document.getElementById("tile" + row + (col + 1)).className == "empty") {
                    swapTiles("tile" + row + col, "tile" + row + (col + 1));
                    return;
                }
            }
        if (col > 1) {
                if (col > 1) {
                    if (document.getElementById("tile" + row + (col - 1)).className == "empty") {
                        swapTiles("tile" + row + col, "tile" + row + (col - 1));
                        return;
                    }
                }
        }
        if (row > 1) {
                if (document.getElementById("tile" + (row - 1) + col).className == "empty") {
                    swapTiles("tile" + row + col, "tile" + (row - 1) + col);
                    return;
                }
        }
        if (row < 4) {
                if (document.getElementById("tile" + (row + 1) + col).className == "empty") {
                    swapTiles("tile" + row + col, "tile" + (row + 1) + col);
                    return;
                }
            }
    }
}

function shuffle()
{
    reset = true;
    for(let i = 0; i < 1000; i++)
    {
        randRow = Math.floor(Math.random() * 4) + 1;
        randCol = Math.floor(Math.random() * 4) + 1;
        tile(randRow, randCol);
    }
    reset = false;
    document.getElementById("solvedMessage").innerHTML = "Unsolved";
}

function checkIfSolved()
{
    if(document.getElementById("text44").innerHTML == " "
    && document.getElementById("text43").innerHTML == "15"
    && document.getElementById("text42").innerHTML == "14"
    && document.getElementById("text41").innerHTML == "13"
    && document.getElementById("text34").innerHTML == "12"
    && document.getElementById("text33").innerHTML == "11"
    && document.getElementById("text32").innerHTML == "10"
    && document.getElementById("text31").innerHTML == "9"
    && document.getElementById("text24").innerHTML == "8"
    && document.getElementById("text23").innerHTML == "7"
    && document.getElementById("text22").innerHTML == "6"
    && document.getElementById("text21").innerHTML == "5"
    && document.getElementById("text14").innerHTML == "4"
    && document.getElementById("text13").innerHTML == "3"
    && document.getElementById("text12").innerHTML == "2"
    && document.getElementById("text11").innerHTML == "1")
    {
        solved = true;
        document.getElementById("solvedMessage").innerHTML = "Congrats! You solved the puzzle!";
        document.getElementById("shufflebtn").style.visibility = "visible";
    }
}