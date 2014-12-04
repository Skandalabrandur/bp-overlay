// ==UserScript==
// @name         BombParty Overlay
// @version      1.0.2
// @description  Overlay + Utilities for BombParty!
// @icon         https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/icon.png
// @icon64       https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/icon64.png
// @author       MrInanimated
// @match        http://bombparty.sparklinlabs.com/play/*
// @grant        none
// ==/UserScript==

// Hi! You're looking at my script.
// This is basically a wrapper for loading up the actual overlay on the page
// to get around security restrictions regarding sandboxed environments.

// I can promise that this script and the script being loaded are perfectly safe.
// If you don't want to take my word for it, you're welcome to look through the code yourself.

// Have fun playing BombParty!

var s = document.createElement('script');
s.src = "https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/bpoverlay.js";
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);