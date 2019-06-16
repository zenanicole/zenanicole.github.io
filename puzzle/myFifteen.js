"use strict"; //this activates strict mode
let divs;
let notify;
let shuffleClicked=0;
let timer;
let ySpace;
let xSpace;
window.onload = function () {
    divs = $("#puzzlearea div");
    $(divs).each(function (i) {
        let x = ((i % 4) * 100) ;
        let y = (Math.floor(i / 4) * 100) ;
        // set basic style and background
        $(this).addClass("puzzlepiece").css({"left":x + 'px',"top": y + 'px',"background-image":'url("background.jpg")',"background-position":-x + 'px ' + (-y) + 'px'});

        $(this).mouseover(function()  {
            if (isMoveable(parseInt($(this).html()))) {
                $(this).css({"border":"3px solid red","color":"red"});
            }
        });
        $(this).mouseout(function() {
            $(this).css({"border":"2px solid black","color":"#000000"});
            });
        $(this).click(function() {
            if (isMoveable(parseInt($(this).html()))) {
                swap($(this).html()-1);
                if (finish())  {
                      win();
                }
            }
        });
    });
    xSpace = '300px';
    ySpace = '300px';
    $("#shufflebutton").click(function() {
        for (let i=0; i<300; i++) {
            let rand = parseInt(Math.random()* 100) %4;
            let temp;
            if (rand ===0) {
                temp = up(xSpace, ySpace);
                if ( temp !== -1) {
                    swap(temp);
                }
            }
            if (rand === 1) {
                temp = down(xSpace, ySpace);
                if ( temp !== -1) {
                    swap(temp);
                }
            }
            if (rand === 2) {
                temp = left(xSpace, ySpace);
                if ( temp !== -1) {
                    swap(temp);
                }
            }
            if (rand === 3) {
                 temp = right(xSpace, ySpace);
                if (temp !== -1) {
                    swap(temp);
                }
            }
        }
        shuffleClicked++;
    });
};
function isMoveable(position) {
    if (left(xSpace, ySpace) === (position-1)) {
        return true;
    }
    if (down(xSpace, ySpace) ===(position-1)) {
        return true;
    }
    if (up(xSpace, ySpace) === (position-1)) {
        return true;
    }
    if (right(xSpace, ySpace) === (position-1)) {
        return true;
    }
}
function Notify() {
    notify --;
    if (notify === 0) {
        alert('You Won! ... Do you want to Shuffle and Play Again ?');
        $('.explanation').css("visibility","visible");
        return;
    }
    Notify();
}
function win() {
    notify = 10;
    timer= setTimeout(Notify, 200);
    $('.explanation').css("visibility","hidden");
}
function finish() {
    if(shuffleClicked>0) {
        let flag = true;
        for (let i = 0; i < divs.length; i++) {
            let top = parseInt(divs[i].style.top);
            let left = parseInt(divs[i].style.left);
            if (left !== (i % 4 * 100) || top !== parseInt(i / 4) * 100) {
                flag = false;
                break;
            }
        }
        return flag;
   }
}
function left(x, y) {
    let cordX = parseInt(x);
    let cordY = parseInt(y);
    if (cordX > 0) {
        for (let i = 0; i < divs.length; i++) {
            if (parseInt(divs[i].style.left) + 100 === cordX && parseInt(divs[i].style.top) === cordY) {
                return i;
            }
        }
    }
    else {
        return -1;
    }
}
function right (x, y) {
    let cordX = parseInt(x);
    let cordY = parseInt(y);
    if (cordX < 300) {
        for (let i =0; i<divs.length; i++){
            if (parseInt(divs[i].style.left) - 100 === cordX && parseInt(divs[i].style.top) === cordY)  {
                return i;
            }
        }
    }
    else {
        return -1;
    }
}
function up(x, y) {
    let cordX = parseInt(x);
    let cordY = parseInt(y);
    if (cordY > 0) {
        for (let i=0; i<divs.length; i++) {
            if (parseInt(divs[i].style.top) + 100 === cordY && parseInt(divs[i].style.left) === cordX) {
                return i;
            }
        }
    }
    else {
        return -1;
    }
}
function down (x, y) {
    let cordX = parseInt(x);
    let cordY = parseInt(y);
    if (cordY < 300) {
        for (let i=0; i<divs.length; i++)  {
            if (parseInt(divs[i].style.top) - 100 === cordY && parseInt(divs[i].style.left) === cordX) {
                return i;
            }
        }
    }
    else {
        return -1;
    }
}
function swap (position) {
    let temp = divs[position].style.top;
    divs[position].style.top = ySpace;
    ySpace = temp;
    temp = divs[position].style.left;
    divs[position].style.left = xSpace;
    xSpace = temp;
}


