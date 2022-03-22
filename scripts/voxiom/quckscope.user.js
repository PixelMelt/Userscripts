// ==UserScript==
// @name         Vox Quckscope
// @version      0.1
// @description  try to take over the world!
// @author       Pix#7008
// @match        https://voxiom.io/*
// @icon         https://avatars.githubusercontent.com/u/44953835?v=4
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function keyup49(){
    var kek = new KeyboardEvent("keyup",{
        keyCode: 49
    })
    document.dispatchEvent(kek);
}

function keyup50(){
    var kek = new KeyboardEvent("keyup",{
        keyCode: 50
    })
    document.dispatchEvent(kek);
}

var hotbarslot = 1
document.body.addEventListener('keydown', function(event) {
    if (event.keyCode == 16) {
        if (hotbarslot == 2) {
            console.log(`Running mode active`)
            var e = new KeyboardEvent("keydown",{
                keyCode: 49
            })
            document.dispatchEvent(e);
            setTimeout(keyup49, 500)
            hotbarslot = 1
        }
    }
    hotbarslot = document.getElementsByClassName(`sc-bIaGFe`)[0].parentElement.children[1].innerHTML
});

document.body.addEventListener('keyup', function(event) {
    if (event.keyCode == 16) {
        if (hotbarslot == 1) {
            console.log(`Running mode de-activated`)
            var f = new KeyboardEvent("keydown",{
                keyCode: 50
            })
            document.dispatchEvent(f);
            setTimeout(keyup50, 500)
            hotbarslot = 2
        }
    }
    hotbarslot = document.getElementsByClassName(`sc-bIaGFe`)[0].parentElement.children[1].innerHTML
});
})();
