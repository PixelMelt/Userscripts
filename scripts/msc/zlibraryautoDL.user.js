// ==UserScript==
// @name         zlibrary auto download
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  quickly download books from 1lib
// @author       You
// @match        https://1lib.us/book/*
// @match        https://ca1lib.org/book/*
// @match        https://z-lib.org/*
// @match        https://b-ok.cc/*
// @match        https://u1lib.org/*
// @icon         https://www.google.com/s2/favicons?domain=1lib.us
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var downloadedalready = "no"
    while(1){
        console.log(`clicked download button`)
        if(downloadedalready == "no"){
            if(document.getElementsByClassName(`btn btn-primary dlButton addDownloadedBook`)[0]){
                document.getElementsByClassName(`btn btn-primary dlButton addDownloadedBook`)[0].click()
                downloadedalready = "yes"
            }
        }else{
            console.log(`button has already been clicked`)
            return}

    }
})();
