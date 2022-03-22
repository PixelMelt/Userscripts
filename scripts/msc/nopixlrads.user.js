// ==UserScript==
// @name         No pixlr ads
// @namespace    https://github.com/PixelMelt
// @version      0.3
// @description  Remove the ad sidebar from pixlr.
// @author       Pix#7008
// @match        https://pixlr.com/e/
// @icon         https://www.google.com/s2/favicons?domain=pixlr.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    function removead(){
        if(window.location.href == `https://pixlr.com/e/#editor`){
            document.getElementById(`workspace`).style.right = `0`
            if(document.getElementById(`iasriiigh`)){
                document.getElementById(`iasriiigh`).remove()
                document.getElementById(`right-space`).remove()
                console.log(`deleted sidebar`)
            }
            if(document.getElementById(`modal-pop`)){
                document.getElementById(`modal-pop`).remove()
                console.log(`deleted pop up`)
            }
            if(document.getElementById(`modal-5488a20440ea`)){
                document.getElementById(`modal-5488a20440ea`).remove()
                console.log(`deleted pop up blur`)
            }
        }
        setTimeout(removead, 1000);
    }
    removead()
})();
