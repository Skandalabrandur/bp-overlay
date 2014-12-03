// ==UserScript==
// @name         BombParty Overlay
// @version      1.0.1
// @description  Overlay + Utilities for BombParty!
// @icon         https://dl.dropboxusercontent.com/u/9328924/BPOverlay/icon.png
// @icon64       https://dl.dropboxusercontent.com/u/9328924/BPOverlay/icon64.png
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
s.src = "https://dl.dropboxusercontent.com/u/9328924/BPOverlay/bpoverlay.js";
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);