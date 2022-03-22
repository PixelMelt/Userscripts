// ==UserScript==
// @name         Voxiom.io bot
// @version      0.1
// @description  Bot to auto earn gems and xp.
// @author       You
// @match        https://voxiom.io/
// @icon         https://avatars.githubusercontent.com/u/44953835?v=4
// @grant        none
// ==/UserScript==

console.clear()
console.log(
    `%c%c%cVoxiom Bot`,
    'font-size: 100px;',
    ``,
    `color: #00B92C; font-size: 1.4em; background-color: black; border: .1em solid white; border-radius: 0.5em; padding: 1em; padding-left: 6em; padding-right: 6em; margin-left: 1.6em;`,
);

function runbot(){
    collectgems()
    joingame()

    startmove()
    newgame()
    setTimeout(runbot, 1000)
}

function reloadgame(){
    window.location.href = window.location.href
}

function serverdenied(){
    if (document.getElementsByClassName(`sc-hgksCU gSjTXU`)[0]) {
        document.getElementsByClassName(`sc-hgksCU gSjTXU`)[0].click()
        console.log(`Server unavaliable`)
    }
}

function joingame(){
    if (document.getElementsByClassName(`sc-gWXbKe gtinjV`)[0]) {
        document.getElementsByClassName(`sc-gWXbKe gtinjV`)[1].click()
        console.log(`I joined a game`)
    }
}

function newgame(){
    if (document.getElementsByClassName(`sc-dGXKLq bKnSld`)[0]) {
        document.getElementsByClassName(`sc-dGXKLq bKnSld`)[0].click()
        console.log(`I started a new game`)
    }
}

function collectgems() {
    if (document.getElementsByClassName(`sc-dUbtfd sc-htJRVC gZFmBH lcTOJu`)[0]) {
        console.log(`I found a gem popup`)
        if(document.getElementsByClassName(`sc-dUbtfd sc-htJRVC gZFmBH lcTOJu`)[0].innerHTML == `Great!`){
            document.getElementsByClassName(`sc-dUbtfd sc-htJRVC gZFmBH lcTOJu`)[0].click()
            console.log(`I closed gem popup`)
        }else{
            document.getElementsByClassName(`sc-dUbtfd sc-htJRVC gZFmBH lcTOJu`)[0].click()
            console.log(`I collected gems`)
        }
    }else{
        //console.log(`No gems to be collected`)
    }
}

function startmove() {
    //console.log(`I started moving`)
    var e = new KeyboardEvent("keydown",{
        keyCode: 87
    })
    var f = new KeyboardEvent("keydown",{
        keyCode: 32
    })
    var g = new KeyboardEvent("keydown",{
        keyCode: 16
    })
    var h = new KeyboardEvent("keydown",{
        keyCode: 68
    })
    document.dispatchEvent(e);
    document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'w'}));
    //document.dispatchEvent(f);
    document.dispatchEvent(h);
    //document.dispatchEvent(g);
}

function stopmove(){
    console.log(`I stopped moving`)
    var e = new KeyboardEvent("keyup",{
        keyCode: 87
    })
    var f = new KeyboardEvent("keyup",{
        keyCode: 32
    })
    var g = new KeyboardEvent("keyup",{
        keyCode: 16
    })
    document.dispatchEvent(e);
    document.dispatchEvent(f);
    document.dispatchEvent(g);
}

runbot()
setTimeout(reloadgame, 360000)
