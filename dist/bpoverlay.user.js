// ==UserScript==
// @name         BombParty Overlay
// @version      1.1.3
// @description  Overlay + Utilities for BombParty!
// @icon         https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/icon.png
// @icon64       https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/icon64.png
// @downloadURL  https://github.com/MrInanimated/bp-overlay/raw/master/dist/bpoverlay.user.js
// @author       Tianlin Zhang
// @match        http://bombparty.sparklinlabs.com/play/*
// @grant        none
// ==/UserScript==

var source = function () {
    // If the window already has a BPOverlay, don't run again
    if (window.hasOwnProperty('BPOverlayHasRun')) {
    }
    else {
        window.BPOverlayHasRun = true;
        
        var main = function () {
            
            // Since this is running via a script loaded on page load, it's difficult ensure the overlay runs after everything has loaded
            // This piece of code makes sure that all relevant things are loaded before executing the rest of the code
            // We may need to add more to this long-ass if statement if we add more features in the future
            if (!(window.hasOwnProperty("channel") && channel.socket && channel.data && channel.appendToChat && channel.socket.listeners("setActivePlayerIndex").length && channel.socket.listeners("winWord").length && channel.socket.listeners("setPlayerLives").length && channel.socket.listeners("setPlayerState").length && channel.socket.listeners("endGame").length)) {
                console.log("Everything's not loaded yet, trying again in a second...");
                setTimeout(main, 1000);
                return;
            }
        
            /*!
            * Autolinker.js
            * 0.15.0
            *
            * Copyright(c) 2014 Gregory Jacobs <greg@greg-jacobs.com>
            * MIT Licensed. http://www.opensource.org/licenses/mit-license.php
            *
            * https://github.com/gregjacobs/Autolinker.js
            */
            !function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.returnExportsGlobal=b()}):"object"==typeof exports?module.exports=b():a.Autolinker=b()}(this,function(){var a=function(b){a.Util.assign(this,b),this.matchValidator=new a.MatchValidator};return a.prototype={constructor:a,urls:!0,email:!0,twitter:!0,newWindow:!0,stripPrefix:!0,className:"",htmlCharacterEntitiesRegex:/(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;)/gi,matcherRegex:function(){var a=/(^|[^\w])@(\w{1,15})/,b=/(?:[\-;:&=\+\$,\w\.]+@)/,c=/(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,d=/(?:www\.)/,e=/[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,f=/\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,g=/[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;return new RegExp(["(",a.source,")","|","(",b.source,e.source,f.source,")","|","(","(?:","(",c.source,e.source,")","|","(?:","(.?//)?",d.source,e.source,")","|","(?:","(.?//)?",e.source,f.source,")",")","(?:"+g.source+")?",")"].join(""),"gi")}(),charBeforeProtocolRelMatchRegex:/^(.)?\/\//,link:function(b){var c=this,d=this.getHtmlParser(),e=this.htmlCharacterEntitiesRegex,f=0,g=[];return d.parse(b,{processHtmlNode:function(a,b,c){"a"===b&&(c?f=Math.max(f-1,0):f++),g.push(a)},processTextNode:function(b){if(0===f)for(var d=a.Util.splitAndCapture(b,e),h=0,i=d.length;i>h;h++){var j=d[h],k=c.processTextNode(j);g.push(k)}else g.push(b)}}),g.join("")},getHtmlParser:function(){var b=this.htmlParser;return b||(b=this.htmlParser=new a.HtmlParser),b},getTagBuilder:function(){var b=this.tagBuilder;return b||(b=this.tagBuilder=new a.AnchorTagBuilder({newWindow:this.newWindow,truncate:this.truncate,className:this.className})),b},processTextNode:function(a){var b=this;return a.replace(this.matcherRegex,function(a,c,d,e,f,g,h,i,j){var k=b.processCandidateMatch(a,c,d,e,f,g,h,i,j);if(k){var l=b.createMatchReturnVal(k.match,k.matchStr);return k.prefixStr+l+k.suffixStr}return a})},processCandidateMatch:function(b,c,d,e,f,g,h,i,j){var k,l=i||j,m="",n="";if(c&&!this.twitter||f&&!this.email||g&&!this.urls||!this.matchValidator.isValidMatch(g,h,l))return null;if(this.matchHasUnbalancedClosingParen(b)&&(b=b.substr(0,b.length-1),n=")"),f)k=new a.match.Email({matchedText:b,email:f});else if(c)d&&(m=d,b=b.slice(1)),k=new a.match.Twitter({matchedText:b,twitterHandle:e});else{if(l){var o=l.match(this.charBeforeProtocolRelMatchRegex)[1]||"";o&&(m=o,b=b.slice(1))}k=new a.match.Url({matchedText:b,url:b,protocolUrlMatch:!!h,protocolRelativeMatch:!!l,stripPrefix:this.stripPrefix})}return{prefixStr:m,suffixStr:n,matchStr:b,match:k}},matchHasUnbalancedClosingParen:function(a){var b=a.charAt(a.length-1);if(")"===b){var c=a.match(/\(/g),d=a.match(/\)/g),e=c&&c.length||0,f=d&&d.length||0;if(f>e)return!0}return!1},createMatchReturnVal:function(b,c){var d;if(this.replaceFn&&(d=this.replaceFn.call(this,this,b)),"string"==typeof d)return d;if(d===!1)return c;if(d instanceof a.HtmlTag)return d.toString();var e=this.getTagBuilder(),f=e.build(b);return f.toString()}},a.link=function(b,c){var d=new a(c);return d.link(b)},a.match={},a.Util={abstractMethod:function(){throw"abstract"},assign:function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a},extend:function(b,c){var d=b.prototype,e=function(){};e.prototype=d;var f;f=c.hasOwnProperty("constructor")?c.constructor:function(){d.constructor.apply(this,arguments)};var g=f.prototype=new e;return g.constructor=f,g.superclass=d,delete c.constructor,a.Util.assign(g,c),f},ellipsis:function(a,b,c){return a.length>b&&(c=null==c?"..":c,a=a.substring(0,b-c.length)+c),a},indexOf:function(a,b){if(Array.prototype.indexOf)return a.indexOf(b);for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},splitAndCapture:function(a,b){if(!b.global)throw new Error("`splitRegex` must have the 'g' flag set");for(var c,d=[],e=0;c=b.exec(a);)d.push(a.substring(e,c.index)),d.push(c[0]),e=c.index+c[0].length;return d.push(a.substring(e)),d}},a.HtmlParser=a.Util.extend(Object,{htmlRegex:function(){var a=/[0-9a-zA-Z][0-9a-zA-Z:]*/,b=/[^\s\0"'>\/=\x01-\x1F\x7F]+/,c=/(?:".*?"|'.*?'|[^'"=<>`\s]+)/,d=b.source+"(?:\\s*=\\s*"+c.source+")?";return new RegExp(["(?:","<(!DOCTYPE)","(?:","\\s+","(?:",d,"|",c.source+")",")*",">",")","|","(?:","<(/)?","("+a.source+")","(?:","\\s+",d,")*","\\s*/?",">",")"].join(""),"gi")}(),parse:function(a,b){b=b||{};for(var c,d=b.processHtmlNode||function(){},e=b.processTextNode||function(){},f=this.htmlRegex,g=0;null!==(c=f.exec(a));){var h=c[0],i=c[1]||c[3],j=!!c[2],k=a.substring(g,c.index);k&&e(k),d(h,i.toLowerCase(),j),g=c.index+h.length}if(g<a.length){var l=a.substring(g);l&&e(l)}}}),a.HtmlTag=a.Util.extend(Object,{whitespaceRegex:/\s+/,constructor:function(b){a.Util.assign(this,b),this.innerHtml=this.innerHtml||this.innerHTML},setTagName:function(a){return this.tagName=a,this},getTagName:function(){return this.tagName||""},setAttr:function(a,b){var c=this.getAttrs();return c[a]=b,this},getAttr:function(a){return this.getAttrs()[a]},setAttrs:function(b){var c=this.getAttrs();return a.Util.assign(c,b),this},getAttrs:function(){return this.attrs||(this.attrs={})},setClass:function(a){return this.setAttr("class",a)},addClass:function(b){for(var c,d=this.getClass(),e=this.whitespaceRegex,f=a.Util.indexOf,g=d?d.split(e):[],h=b.split(e);c=h.shift();)-1===f(g,c)&&g.push(c);return this.getAttrs()["class"]=g.join(" "),this},removeClass:function(b){for(var c,d=this.getClass(),e=this.whitespaceRegex,f=a.Util.indexOf,g=d?d.split(e):[],h=b.split(e);g.length&&(c=h.shift());){var i=f(g,c);-1!==i&&g.splice(i,1)}return this.getAttrs()["class"]=g.join(" "),this},getClass:function(){return this.getAttrs()["class"]||""},hasClass:function(a){return-1!==(" "+this.getClass()+" ").indexOf(" "+a+" ")},setInnerHtml:function(a){return this.innerHtml=a,this},getInnerHtml:function(){return this.innerHtml||""},toString:function(){var a=this.getTagName(),b=this.buildAttrsStr();return b=b?" "+b:"",["<",a,b,">",this.getInnerHtml(),"</",a,">"].join("")},buildAttrsStr:function(){if(!this.attrs)return"";var a=this.getAttrs(),b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c+'="'+a[c]+'"');return b.join(" ")}}),a.MatchValidator=a.Util.extend(Object,{invalidProtocolRelMatchRegex:/^[\w]\/\//,hasFullProtocolRegex:/^[A-Za-z][-.+A-Za-z0-9]+:\/\//,uriSchemeRegex:/^[A-Za-z][-.+A-Za-z0-9]+:/,hasWordCharAfterProtocolRegex:/:[^\s]*?[A-Za-z]/,isValidMatch:function(a,b,c){return b&&!this.isValidUriScheme(b)||this.urlMatchDoesNotHaveProtocolOrDot(a,b)||this.urlMatchDoesNotHaveAtLeastOneWordChar(a,b)||this.isInvalidProtocolRelativeMatch(c)?!1:!0},isValidUriScheme:function(a){var b=a.match(this.uriSchemeRegex)[0];return"javascript:"!==b&&"vbscript:"!==b},urlMatchDoesNotHaveProtocolOrDot:function(a,b){return!(!a||b&&this.hasFullProtocolRegex.test(b)||-1!==a.indexOf("."))},urlMatchDoesNotHaveAtLeastOneWordChar:function(a,b){return a&&b?!this.hasWordCharAfterProtocolRegex.test(a):!1},isInvalidProtocolRelativeMatch:function(a){return!!a&&this.invalidProtocolRelMatchRegex.test(a)}}),a.AnchorTagBuilder=a.Util.extend(Object,{constructor:function(b){a.Util.assign(this,b)},build:function(b){var c=new a.HtmlTag({tagName:"a",attrs:this.createAttrs(b.getType(),b.getAnchorHref()),innerHtml:this.processAnchorText(b.getAnchorText())});return c},createAttrs:function(a,b){var c={href:b},d=this.createCssClass(a);return d&&(c["class"]=d),this.newWindow&&(c.target="_blank"),c},createCssClass:function(a){var b=this.className;return b?b+" "+b+"-"+a:""},processAnchorText:function(a){return a=this.doTruncate(a)},doTruncate:function(b){return a.Util.ellipsis(b,this.truncate||Number.POSITIVE_INFINITY)}}),a.match.Match=a.Util.extend(Object,{constructor:function(b){a.Util.assign(this,b)},getType:a.Util.abstractMethod,getMatchedText:function(){return this.matchedText},getAnchorHref:a.Util.abstractMethod,getAnchorText:a.Util.abstractMethod}),a.match.Email=a.Util.extend(a.match.Match,{getType:function(){return"email"},getEmail:function(){return this.email},getAnchorHref:function(){return"mailto:"+this.email},getAnchorText:function(){return this.email}}),a.match.Twitter=a.Util.extend(a.match.Match,{getType:function(){return"twitter"},getTwitterHandle:function(){return this.twitterHandle},getAnchorHref:function(){return"https://twitter.com/"+this.twitterHandle},getAnchorText:function(){return"@"+this.twitterHandle}}),a.match.Url=a.Util.extend(a.match.Match,{urlPrefixRegex:/^(https?:\/\/)?(www\.)?/i,protocolRelativeRegex:/^\/\//,protocolPrepended:!1,getType:function(){return"url"},getUrl:function(){var a=this.url;return this.protocolRelativeMatch||this.protocolUrlMatch||this.protocolPrepended||(a=this.url="http://"+a,this.protocolPrepended=!0),a},getAnchorHref:function(){var a=this.getUrl();return a.replace(/&amp;/g,"&")},getAnchorText:function(){var a=this.getUrl();return this.protocolRelativeMatch&&(a=this.stripProtocolRelativePrefix(a)),this.stripPrefix&&(a=this.stripUrlPrefix(a)),a=this.removeTrailingSlash(a)},stripUrlPrefix:function(a){return a.replace(this.urlPrefixRegex,"")},stripProtocolRelativePrefix:function(a){return a.replace(this.protocolRelativeRegex,"")},removeTrailingSlash:function(a){return"/"===a.charAt(a.length-1)&&(a=a.slice(0,-1)),a}}),a});
        
            // Tidy container for storing "global" variables.
            bpOverlay = {
                playerNames : {},   // Stores player name by actor index
                playerAuthId : {},  // Stores actor index by authId
                lostLives : {},     // Stores lost lives by actor index
                flips : {},         // Stores flips by actor index
                uFlips : {},        // Stores u-flips by actor index
                wordCount : 0,      // Stores word count for current round
                startTime : 0,      // Stores (in milliseconds since the epoch) the starting time of the round
                timeText : "",      // Stores the text used to display the time on the overlay
                
                dragBoxHasBeenCreated: false,	//Indicates that the dragbox is 4 real
                boxHasBeenCreated : false,  // True when a DOM object with the id "infoBox" exists
                firstRun : true,            // Set to true every time a game ends. If this is true a new infoBox is created, and this is set to false

                prevPlayerNames : {},  // Stores player name by actor index
                prevLostLives : {},    // Stores lost lives by actor index
                prevFlips : {},        // Stores flips by actor index
                prevUFlips : {},       // Stores u-flips by actor index
                prevTimeText: "",      // Stores the text used to display the time on the overlay
                prevWordCount : 0,     // Stores the word count for the last round
                
                hideDead : false,  // If true, hides dead players' rows on the scoreboard table
                dragonDrop: false, // If true, indicates that the user has a wish to become or remain a dragon.
                                   // dragBoxHasBeenCreated will not replace this
                
                autoScroll : true,  // If true, automatically scrolls that chat down whenever there is a new chat message.
                autoFocus: true,    // If true, automatically switches focus to the chatbox after the user's turn
                
                focusNext : false,  // If true, it is the user's turn (and so we should focus to the chatBox if autoFocus is true after the user's turn)
            };

            // Storage of images used by the overlay.
            // In hindsight probably not necessary...
            bpOverlayImgs = {
                on: null,            // AutoScroll button on state
                off: null,           // AutoScroll button off state
                autoFocusOn: null,   // AutoFocus button on state
                autoFocusOff: null,  // AutoFocus button off state
                hideDeadOn: null,    // HideDead button on state
                hideDeadOff: null,   // HideDead button off state
            dragOff: null,	 // dragOn button off state
            dragOn: null,	 // dragOn button On state
            };


            //START - A collection of functions for the dragonDrop
            //The functions basically name themselves and do what they're told
            //They are then activated by listeneres when 	a)User starts dragging the 'draggable'
            //												b)User drags over to somewhere (not default behaviour of linkamajigging)
            //												c)User drops the box.

            //a: establish the drag and the starting parameters
            function drag_start(event) {	
                var style = window.getComputedStyle(event.target, null);
                event.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
            } 

            //b: strange shit wont happen because things wont interact
            //   you can however act as if you're dropping the boxonto the ad and it will revert
            //	so this bug is now a feature: "CANNOT ADBLOCK BY DESIGN"
            function drag_over(event) { 	
                event.preventDefault(); 
                return false; 
            } 
            
            //c: computes the offset from the drag and adds it to the style.top & style.left
            function drop(event) { 			
                var offset = event.dataTransfer.getData("text/plain").split(',');
                var dm = document.getElementById('dragonDrop');
		var addLeft = event.clientX + parseInt(offset[0],10);
		var addTop = event.clientY + parseInt(offset[1],10);
           
		//Let's see if we can prevent the jigger to fly offscreen by doing something lazy
		//heigt and width answer "what is the area considered not to be outside of the game?"
		var height = window.innerHeight, width = window.innerWidth;
		
		//((Resize friendly, that is, if we want to make this resizable in the future this should hold)).
		//We seem to need to acquire this through the document.getElementById, it returns 0 otherwise
		var dragH = document.getElementById("infoBox").clientHeight;
		var dragW = document.getElementById("infoBox").clientWidth;


		if(addLeft + dragW > width) {
			dm.style.left = (width - dragW) + 'px';
		} else {
			dm.style.left = addLeft + 'px';
		}

		if(addTop + dragH > height) {
			dm.style.top = (height - dragH) + 'px';		
		} else {
                	dm.style.top = addTop + 'px';
		}
                event.preventDefault();
                return false;
            }	 
            
            //The body needs to be able to accept the new positions
            //So naturally the listeners are added to the body
            //(Imagine how weird this paragraph above would be in a medical paper)
            document.body.addEventListener('dragover',drag_over,false); 
            document.body.addEventListener('drop',drop,false); 


            //Configure and style the draggable box, then add to the body
            var dragAside = document.createElement("whatever");
            dragAside.id="dragonDrop";
            dragAside.draggable="true";
            dragAside.style.position="absolute";
            dragAside.style.left="100px";	//starting coordinates
            dragAside.style.top="100px";	//eh whatevs, nice round number
            dragAside.style.width="300px";
            dragAside.style.background="rgb(20, 20, 20)";
            dragAside.addEventListener('dragstart', drag_start, false);
            document.body.appendChild(dragAside);
        
            //This may be trivial
            //var dAss = document.getElementById('dragonDrop'); 
            //dAss.addEventListener('dragstart',drag_start,false); 
        

            // This function is called whenever a new round begins.
            var generateActorConditions = function () {
                // If there is already a box, get rid of it
                if (bpOverlay.boxHasBeenCreated || bpOverlay.dragBoxHasBeenCreated) {
                    var infoBox = document.getElementById("infoBox");

                    //remove infoBox from wherever it is
                    var meow = infoBox.parentNode;
                    meow.removeChild(infoBox);

                    //If if then more lines hence both.
                    bpOverlay.boxHasBeenCreated = false;
                    bpOverlay.dragBoxHasBeenCreated = false;
                }

                // Shift current round's variables onto previous round's variables
                bpOverlay.prevPlayerNames = bpOverlay.playerNames;
                bpOverlay.prevLostLives = bpOverlay.lostLives;
                bpOverlay.prevFlips = bpOverlay.flips;
                bpOverlay.prevUFlips = bpOverlay.uFlips;
                bpOverlay.prevTimeText = bpOverlay.timeText;
                bpOverlay.prevWordCount = bpOverlay.wordCount;

                // Reset current round variables
                bpOverlay.playerNames = {};
                bpOverlay.playerAuthId = {};
                bpOverlay.lostLives = {};
                bpOverlay.flips = {};
                bpOverlay.uFlips = {};

                actors = channel.data.actors;

                // Loop through current round's actors and log data accordingly
                for (i = 0; i < actors.length; i++) {
                    bpOverlay.playerNames[i] = actors[i].displayName;
                    bpOverlay.playerAuthId[actors[i].authId] = i;
                    bpOverlay.flips[i] = 0;
                    bpOverlay.uFlips[i] = 0;
                    bpOverlay.lostLives[i] = 0;
                }

                // More resetting...
                bpOverlay.wordCount = 0;
                bpOverlay.timeText = "Elapsed time | 0:00";

                var d = new Date();
                bpOverlay.startTime = d.getTime();

                // Create the infoBox.
                var infoBox = document.createElement("DIV");
                infoBox.id="infoBox";

                // Create the time text display
                var timeElement = document.createElement("H2");
                timeElement.id = "infoBoxTimer";
                timeElement.align="center";		//Might get overridden if not in drag-mode but who cares :D
                timeElement.style.color="rgb(200,200,200)";		//this as well but that's a good thing
                timeElement.textContent = bpOverlay.timeText;
                infoBox.appendChild(timeElement);

                // Create the word counter display
                var wordCounterElement = document.createElement("H2");
                wordCounterElement.align="center";
                wordCounterElement.id = "infoWordCounter";
                wordCounterElement.style.color="rgb(200,200,200)";
                wordCounterElement.textContent = "Word Count: 0";
                infoBox.appendChild(wordCounterElement);

                // Oh boy, a horizontal rule!	Gee willikers!
                var horizontalRule = document.createElement("hr");
                infoBox.appendChild(horizontalRule);

                // Contain the scoreboard table in a div to allow for scrolling
                var infoTableDiv = document.createElement("DIV");
                infoTableDiv.className = "infoTableDiv";
                infoTableDiv.align = "center"
                infoTableDiv.style.maxHeight = "100px";
                infoTableDiv.style.overflowY = "auto";
                
                // Make the actual scoreboard table
                var infoTable = document.createElement("table");
                infoTableDiv.appendChild(infoTable);
                
                // First row is a button and column headers.
                var firstRow = document.createElement("tr");
                
                // The first element in the first row is a container for the show/hide button
                var showHideContainer = document.createElement("td");
                
                // Make the show_hide button
                var showHideButton = document.createElement("BUTTON");
                var showHideButtonDiv = document.createElement("DIV");
                showHideButtonDiv.className = "headerButtonDiv";
                showHideButton.id = "autoFocusButton";
                showHideButton.className = "headerButton";
                showHideButton.title = "Show/Hide dead players.";
                
                showHideButton.onclick = function () {
                    // Flip the state of hideDead
                    bpOverlay.hideDead = !bpOverlay.hideDead;
                    
                    if (bpOverlay.hideDead) {
                        // if hideDead is true, remove the off state image and add the on state image
                        showHideButton.removeChild(bpOverlayImgs.hideDeadOff);
                        showHideButton.appendChild(bpOverlayImgs.hideDeadOn);
                        
                        // Hide all the grayed out players
                        // A bit of a hack, storing information in colours
                        var rows = document.getElementsByClassName("playerRow");
                        for (i = 0; i < rows.length; i++) {
                            if (rows[i].style.color == "rgb(102, 102, 102)") {
                                rows[i].style.display = "none";
                            }
                        }
                    }
                    else {
                        // if hideDead is false, remove the on state image and add the off state image
                        showHideButton.removeChild(bpOverlayImgs.hideDeadOn);
                        showHideButton.appendChild(bpOverlayImgs.hideDeadOff);
                        
                        // Since showing the overlay will scroll the chat up, we might want to check if
                        // the user needs to have the chat scrolled down after expansion
                        var chatLog = document.getElementById("ChatLog");
                        var scrollDown = (bpOverlay.autoScroll || chatLog.scrollTop == chatLog.scrollHeight)
                        
                        // Show all the hidden rows
                        var rows = document.getElementsByClassName("playerRow");
                        for (i = 0; i < rows.length; i++) {
                            if (rows[i].style.display == "none") {
                                rows[i].style.display = "table-row";
                            }
                        }
                        
                        // If the chat does need scrolling down then scroll it down
                        if (scrollDown) {
                            chatLog.scrollTop = chatLog.scrollHeight;
                        }
                    }
                };
                
                // Add the appropriate image based on the current setting of hideDead
                if (bpOverlay.hideDead) {
                    showHideButton.appendChild(bpOverlayImgs.hideDeadOn);
                }
                else {
                    showHideButton.appendChild(bpOverlayImgs.hideDeadOff);
                }
                
                // ...and append it all into the first row. Phew!
                showHideButtonDiv.appendChild(showHideButton);
                showHideContainer.appendChild(showHideButtonDiv);
                firstRow.appendChild(showHideContainer);
                
                // Make headers for the columns, and append to the first row
                var flipColumnHeader = document.createElement("td");
                flipColumnHeader.textContent = "Flips";
                flipColumnHeader.style.color="rgb(200,200,200)";
                flipColumnHeader.align = "center";
                flipColumnHeader.style.padding = "2px";
                flipColumnHeader.style.fontSize = "11px";
                flipColumnHeader.style.width = "40px";
                flipColumnHeader.title = "Lives gained by using all the bonus letters.";
                firstRow.appendChild(flipColumnHeader);
                var uFlipColumnHeader = document.createElement("td");
                uFlipColumnHeader.textContent = "U-Flips";
                uFlipColumnHeader.style.color="rgb(200,200,200)";
                uFlipColumnHeader.align = "center";
                uFlipColumnHeader.style.padding = "2px";
                uFlipColumnHeader.style.fontSize = "11px";
                uFlipColumnHeader.style.width = "40px";
                uFlipColumnHeader.title = "Lives gained whilst already at 3 lives, making the \"flip\" unnecessary.";
                firstRow.appendChild(uFlipColumnHeader);
                var lostLivesColumnHeader = document.createElement("td");
                lostLivesColumnHeader.textContent = "Deaths";
                lostLivesColumnHeader.style.color="rgb(200,200,200)";
                lostLivesColumnHeader.align = "center";
                lostLivesColumnHeader.style.padding = "2px";
                lostLivesColumnHeader.style.fontSize = "11px";
                lostLivesColumnHeader.style.width = "40px";
                lostLivesColumnHeader.title = "Lives lost in this game.";
                firstRow.appendChild(lostLivesColumnHeader);
                infoTable.appendChild(firstRow);

                // Loop through the players, making a new row for each one
                for (i = 0; i < actors.length; i++) {
                    var playerRow = document.createElement("tr");
                    playerRow.id = i + " row";  // Used to reference this row later on
                    playerRow.className = "playerRow";
                    
                    // If the player this row represents is dead, grey it out
                    if (actors[i].state == "dead") {
                        playerRow.style.color = "#666";
                        if (bpOverlay.hideDead) {
                            playerRow.style.display = "none";
                        }
                    } else {
                        playerRow.style.color="rgb(210,210,210)";
                    }

                    // Make the cell containing the name
                    var nameData = document.createElement("td");
                    var name = bpOverlay.playerNames[i]
                    
                    // Shorten player display names if they're too long
                    if (name.length > 18) {
                        name = name.slice(0, 15) + "...";
                    }
                    
                    nameData.textContent = name;
                    nameData.align = "center";
                    playerRow.appendChild(nameData)

                    // Make the cell containing the number of flips
                    var flipData = document.createElement("td");
                    flipData.id = i + " flips";  // used to reference this cell later
                    flipData.textContent = "0";
                    flipData.align = "center";
                    playerRow.appendChild(flipData);

                    // Make the cell containing the # of u-flips
                    var uFlipData = document.createElement("td");
                    uFlipData.id = i + " uFlips";  // used to reference this cell later
                    uFlipData.textContent = "0";
                    uFlipData.align = "center";
                    playerRow.appendChild(uFlipData);

                    // Make the cell containing the # of deaths
                    var lostLivesData = document.createElement("td");
                    lostLivesData.id = i + " lives";  // used to reference this cell later
                    lostLivesData.textContent = "0";
                    lostLivesData.align = "center";
                    playerRow.appendChild(lostLivesData);

                    // Append the row to the table
                    infoTable.appendChild(playerRow);
                }

                // Append the table to the container...
                infoBox.appendChild(infoTableDiv);
                
                //Creates either a docked infoBox or a draggable one
                if(bpOverlay.dragonDrop) {
                    //Created if user wishes dragonDrop
                    var deDragonDrop = document.getElementById("dragonDrop");
                    deDragonDrop.appendChild(infoBox);
                    bpOverlay.dragBoxHasBeenCreated = true;
                } else {
                    //otherwise this is created
                    var sideBar = document.getElementById("Sidebar");
                    sideBar.insertBefore(infoBox, sideBar.firstChild);

                    bpOverlay.boxHasBeenCreated = true;
                }
                // ..and finally, if autoScrolling is on, scroll the chat back down since this would've caused the chat to scroll up
                if (bpOverlay.autoScroll) {
                    var chatLog = document.getElementById("ChatLog");
                    chatLog.scrollTop = chatLog.scrollHeight;
                }
                
            }

            // Called to make the autoScroll button.
            // This will be inevitably replaced with some sort of general button-adding procedure
            // Until then, yay for inefficient code!
            var makeAutoScrollButton = function () {
                // Load up the on and off images
                var onImg = document.createElement("img");
                onImg.width = 30;
                onImg.height = 30;
                onImg.src = "https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/chatdown.png";
                bpOverlayImgs.on = onImg;
                
                var offImg = document.createElement("img");
                offImg.width = 30;
                offImg.height = 30;
                offImg.src = "https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/chatdownoff.png";
                bpOverlayImgs.off = offImg;

                // Actually make the button, and its container div
                var button = document.createElement("BUTTON");
                var buttonDiv = document.createElement("DIV");
                buttonDiv.className = "headerButtonDiv";
                
                // Insert the button container div into the header
                var header = document.getElementsByTagName("header")[0];
                var lastChild = header.lastChild;
                header.insertBefore(buttonDiv, lastChild);
                
                // General "stylistic touches"
                button.id = "chatDownButton";
                button.className = "headerButton";
                button.title = "Automatically scroll the chat down whenever there is a new message.";
                
                button.onclick = function () {
                    // Flip the autoScroll property
                    bpOverlay.autoScroll = !bpOverlay.autoScroll;
                    
                    if (bpOverlay.autoScroll) {
                        // if autoScroll is true, remove the off image and add the on image...
                        button.removeChild(bpOverlayImgs.off);
                        button.appendChild(bpOverlayImgs.on);
                    }
                    else {
                        // ...and vice versa if autoScroll is false
                        button.removeChild(bpOverlayImgs.on);
                        button.appendChild(bpOverlayImgs.off);
                    }
                };
                
                // Append the on state because autoScroll is by default true
                button.appendChild(bpOverlayImgs.on);
                buttonDiv.appendChild(button);
            };
            
            // See what I mean?
            // Two buttons made using two different functions with virtually identical code
            var makeAutoFocusButton = function () {
                // Load up the on and off images
                var focusOnImage = document.createElement("img");
                focusOnImage.width = 30;
                focusOnImage.height = 30;
                focusOnImage.src = "https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/focusOn.png";
                bpOverlayImgs.autoFocusOn = focusOnImage;
                
                var focusOffImage = document.createElement("img");
                focusOffImage.width = 30;
                focusOffImage.height = 30;
                focusOffImage.src = "https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/focusOff.png";
                bpOverlayImgs.autoFocusOff = focusOffImage;
                
                // Actually make the button, and its container div
                var button = document.createElement("BUTTON");
                var buttonDiv = document.createElement("DIV");
                buttonDiv.className = "headerButtonDiv";
                
                // Insert the button container div into the header
                var header = document.getElementsByTagName("header")[0];
                var lastChild = header.lastChild;
                header.insertBefore(buttonDiv, lastChild);
                
                // General "stylistic touches"
                button.id = "autoFocusButton";
                button.className = "headerButton";
                button.title = "Automatically focus the chat box after your turn.";
                
                button.onclick = function () {
                    // Flip the autoFocus property
                    bpOverlay.autoFocus = !bpOverlay.autoFocus;
                    
                    if (bpOverlay.autoFocus) {
                        // You must know the drill by now
                        button.removeChild(bpOverlayImgs.autoFocusOff);
                        button.appendChild(bpOverlayImgs.autoFocusOn);
                    }
                    else {
                        // I'm not even going to bother
                        button.removeChild(bpOverlayImgs.autoFocusOn);
                        button.appendChild(bpOverlayImgs.autoFocusOff);
                    }
                };
                
                // Again, autoFocus is by default true, so we use the on image first
                button.appendChild(bpOverlayImgs.autoFocusOn);
                buttonDiv.appendChild(button);
            };

            //TODO: Create a new icon for the dragon
            //This code is not commented unless we see something new (it's basically the same as the buttons above)
            var makeDragButton = function () {
                var dragOnImage = document.createElement("img");
                dragOnImage.width = 30;
                dragOnImage.height = 30;
                dragOnImage.src = "https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/dragOn.png";
                bpOverlayImgs.dragOn = dragOnImage;
                
                var dragOffImage = document.createElement("img");
                dragOffImage.width = 30;
                dragOffImage.height = 30;
                dragOffImage.src = "https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/dragOff.png";
                bpOverlayImgs.dragOff = dragOffImage;
                
                var button = document.createElement("BUTTON");
                var buttonDiv = document.createElement("DIV");
                buttonDiv.className = "headerButtonDiv";
                var header = document.getElementsByTagName("header")[0];
                var lastChild = header.lastChild;
                header.insertBefore(buttonDiv, lastChild);
                button.id = "dragButton";
                button.className = "headerButton";
                button.title = "Have the info be in a draggable container instead";
                
                button.onclick = function () {
                    //We don't want the button to react if the neither of the boxes have been created
                    if(bpOverlay.boxHasBeenCreated || bpOverlay.dragBoxHasBeenCreated) {
                        bpOverlay.dragonDrop = !bpOverlay.dragonDrop;	//Flippety flop the boolean be bop
        
                        //In short, this is a switch between docked and dragon mode. Ugly and intuitive                
                        if (bpOverlay.dragonDrop) {
                            var sideBar = document.getElementById("Sidebar");
                            var infoBox = document.getElementById("infoBox");
                            var dragOnDrop = document.getElementById("dragonDrop");
                    
                            sideBar.removeChild(infoBox);		    
                            dragOnDrop.appendChild(infoBox);
                    
                            button.removeChild(bpOverlayImgs.dragOff);
                            button.appendChild(bpOverlayImgs.dragOn);
                            bpOverlay.dragBoxHasBeenCreated = true;
                            bpOverlay.boxHasBeenCreated = false;
        
                        } else {
                            var sideBar = document.getElementById("Sidebar");
                            var infoBox = document.getElementById("infoBox");
                            var dragOnDrop = document.getElementById("dragonDrop");
                    
                            dragOnDrop.removeChild(infoBox);		    
                            sideBar.insertBefore(infoBox, sideBar.firstChild);
                            bpOverlay.dragBoxHasBeenCreated = false;
                            bpOverlay.boxHasBeenCreated = true;
                                    
                            button.removeChild(bpOverlayImgs.dragOn);
                            button.appendChild(bpOverlayImgs.dragOff);
                        }
                    } else {
                        alert("Didn't find the infoBox.\n\nIf you're running this for the first time and the round hasn't started or if it's the same player's turn from when you started the overlay then this is normal.\n\nYou impatient flap :D");
                    }                
                };
                
                button.appendChild(bpOverlayImgs.dragOff);
                buttonDiv.appendChild(button);
            };


            // This function is called regularly to update the time text
            var updateTime = function () {
                // Don't bother doing anything if there's no game or the infoBox hasn't been created
                if (channel.data.state === 'playing' && (bpOverlay.boxHasBeenCreated || bpOverlay.dragBoxHasBeenCreated)) {
                    // Timer code
                    // Copied directly from Ice's bot
                    var d = new Date();
                    var seconds = Math.floor((d.getTime() - bpOverlay.startTime) / 1000);
                    if((seconds % 60) < 10) {
                        var formatter = "0";
                    } else {
                        var formatter = "";
                    }

                    bpOverlay.timeText = "Elapsed time | " + Math.floor(seconds / 60) + ":" + formatter + "" + (seconds % 60) + "";

                    // Umm, hmm, this if statement is redundant.
                    // It looks like it anyway.
                    // Yus - It most certainly is. I don't know what was going on
                    //if (bpOverlay.boxHasBeenCreated) {
                        // Update the infoBox timer text
                        document.getElementById("infoBoxTimer").textContent = bpOverlay.timeText;
                    //}
                }
            }

            // Since a lot of the functions the bot needs to do has to happen before the game updates the state of everything
            // We wrap the default game functions to force them to be called after our custom code.
            var wrapGameFunctions = function () {
                
                // Chat message wrapper
                var gameChat = channel.appendToChat;
                channel.appendToChat = function (header, message) {
                    // This stuff's in a try block because I want the default functions to go through even if my custom code fails
                    try {
                        // Link using the autolinker library any links in the message.
                        message = Autolinker.link(message, {className: "chatMessageLink"});
                        
                        // Scroll the chat down.
                        if (bpOverlay.autoScroll) {
                            var chatLog = document.getElementById("ChatLog");
                            chatLog.scrollTop = chatLog.scrollHeight;
                        }
                    }
                    finally {
                        // Do the actual default chat message function
                        gameChat(header, message);
                    }
                };
                
                // setActivePlayerIndex wrapper
                var gameSetActivePlayerIndex = channel.socket.listeners("setActivePlayerIndex").shift();
                channel.socket.on("setActivePlayerIndex", function (actor) {
                    try {
                        // Since the first event that fires when a game starts is the setActivePlayerIndex event,
                        // We create the infoBox and any other first-run procedures here
                        if (bpOverlay.firstRun) {
                            generateActorConditions();
                            
                            // Set firstRun to false so a new box is not created every time there's a turn change
                            bpOverlay.firstRun = false;
                        }
                        
                        // Chatbox autofocus code
                        if (bpOverlay.autoFocus) {
                            if (channel.data.actors[actor].authId === window.app.user.authId) {
                                // If it's the user's turn, set focusNext to true so the next time
                                // setActivePlayerIndex fires, we set focus to the chatbox
                                bpOverlay.focusNext = true;
                            }
                            else if (bpOverlay.focusNext) {
                                // If focusNext is true (i.e. it's immediately after the player's turn)
                                // We set the focus to the chatbox, and reset focusNext.
                                setTimeout(function() { document.getElementById("ChatInputBox").focus(); }, 400);
                                bpOverlay.focusNext = false;
                            }
                        }
                    }
                    finally {
                        // Call the actual game function
                        gameSetActivePlayerIndex(actor);
                    }
                });

                // winWord wrapper
                var gameWinWord = channel.socket.listeners("winWord").shift();
                channel.socket.on("winWord", function (actor) {
                    try {
                        // We have to manually determine if the user flips, because apparently there's no event
                        // that fires when a player flips.
                    
                        // t is the player we're considering.
                        // Why t? I have no idea.
                        var t = channel.data.actorsByAuthId[actor.playerAuthId];
                        var playerNum = bpOverlay.playerAuthId[actor.playerAuthId];
                        var lockedLetters = t.lockedLetters.slice();
                        var lastWord = t.lastWord.toLowerCase();

                        // Remove the letters of the last word that a person used
                        // from the letters they need to flip
                        for (i = 0; i < lastWord.length; i++) {
                            var index;
                            if ((index = lockedLetters.indexOf(lastWord[i])) != -1) {
                                lockedLetters.splice(index, 1);
                            }
                        }

                        // If the lockedLetters is empty after removing all those, letters, the player has flipped
                        var flipped = (lockedLetters.length === 0);

                        if (flipped) {
                            // Append one to the flip counter
                            bpOverlay.flips[playerNum] += 1;
                            
                            // If the box is created, update it too
                            if (bpOverlay.boxHasBeenCreated || bpOverlay.dragBoxHasBeenCreated) {
                                document.getElementById(playerNum + " flips").textContent = bpOverlay.flips[playerNum];
                            }
                            
                            if (t.lives === 3)
                            {
                                // If the flip happened when the player's lives is already at three, it's an u-flip
                                // Increment and update
                                bpOverlay.uFlips[playerNum] += 1;
                                if (bpOverlay.boxHasBeenCreated || bpOverlay.dragBoxHasBeenCreated) {
                                    document.getElementById(playerNum + " uFlips").textContent = bpOverlay.uFlips[playerNum];
                                }
                            }
                        }

                        // Add one to the word count, and update the box if it's been created
                        bpOverlay.wordCount += 1;
                        if (bpOverlay.boxHasBeenCreated || bpOverlay.dragBoxHasBeenCreated) {
                            document.getElementById("infoWordCounter").textContent = "Word Count: " + bpOverlay.wordCount;
                        }
                    }
                    finally {
                        // Call the actual game function
                        gameWinWord(actor);
                    }
                });

                // setPlayerLives wrapper
                var gameSetPlayerLives = channel.socket.listeners("setPlayerLives").shift();
                channel.socket.on("setPlayerLives", function (actor) {
                    try {
                        // Apparently, setPlayerLives is only used for decreasing a player's lives.
                        // It unfortunately doesn't fire when a player flips.
                        var t = channel.data.actorsByAuthId[actor.playerAuthId];
                        var playerNum = bpOverlay.playerAuthId[actor.playerAuthId];

                        // if the game data's lives is larger than the updated actor's lives, then the player lost a life
                        if (t.lives > actor.lives) {
                            // Increment and update
                            bpOverlay.lostLives[playerNum] += 1;
                            if (bpOverlay.boxHasBeenCreated || bpOverlay.dragBoxHasBeenCreated) {
                                document.getElementById(playerNum + " lives").textContent = bpOverlay.lostLives[playerNum];
                            }
                        }
                    }
                    finally {
                        // Call the actual game function
                        gameSetPlayerLives(actor);
                    }
                });

                // setPlayerState wrapper
                var gameSetPlayerState = channel.socket.listeners("setPlayerState").shift();
                channel.socket.on("setPlayerState", function (actor) {
                    // setPlayerState is really only used to make a player dead.
                    try {
                        if (bpOverlay.boxHasBeenCreated || bpOverlay.dragBoxHasBeenCreated) {
                            if (actor.state == "dead") {
                                // This code basically just greys out the dead player's row on the scoreboard
                                var playerNum = bpOverlay.playerAuthId[actor.playerAuthId];
                                var tableRow = document.getElementById(playerNum + " row");
                                tableRow.style.color = "#666";
                                
                                // and if hideDead is true, it hides 'em too
                                if (bpOverlay.hideDead) {
                                    tableRow.style.display = "none";
                                }
                            }
                        }
                    }
                    finally {
                        // Call the actual game function
                        gameSetPlayerState(actor);
                    }
                });
                
                // endGame wrapper
                var gameEndGame = channel.socket.listeners("endGame").shift();
                channel.socket.on("endGame", function (actorName) {
                    try {
                        // Set firstRun to true, because we want the box to be redraw next round
                        bpOverlay.firstRun = true;
                        
                        // Oh, and set the focus to the chatBox if you need to as well
                        if (bpOverlay.autoFocus) {
                            if (bpOverlay.focusNext) {
                                setTimeout(function() { document.getElementById("ChatInputBox").focus(); }, 400);
                                bpOverlay.focusNext = false;
                            }
                        }
                        
                        // Update the time timer as it might be 1 second behind
                        updateTime();
                        
                    }
                    finally {
                        // Call the actual game function
                        gameEndGame(actorName);
                    }
                });
                
                // This function makes the tooltip text that lists all the players in the room
                // when you hover over the player count.
                var changePlayerText = function () {
                    var playerCount = document.getElementsByClassName("ChannelUsers")[0];
                    var title = "Players:";
                    for (var i in channel.data.users) {
                        title += "\n" + channel.data.users[i].displayName;
                    }
                    playerCount.title = title;
                };
                
                // We want it to fire now, when a user is added, and when a users is removed.
                channel.socket.on("addUser", changePlayerText);
                channel.socket.on("removeUser", changePlayerText);
                changePlayerText();
            };

            // Code that needs to be run when the bot activates.
            var firstRunProcs = function () {
                // The entire styleshee for the bot is wrapper up in this long string.
                // Probably a better way of doing this
                // Lol. TFW web-console css is hard
                var style = document.createElement('style');
                style.appendChild(document.createTextNode('.headerButtonDiv {  display: -webkit-box;  display: -moz-box;  display: -webkit-flex;  display: -ms-flexbox;  display: box;  display: flex;  opacity: 0.3;  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";  filter: alpha(opacity=30);} .headerButtonDiv:hover {  opacity: 1;  -ms-filter: none;  filter: none;} button.headerButton {  border: none;  background: none;  cursor: pointer;  opacity: 0.5;  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";  filter: alpha(opacity=50);  display: -webkit-box;  display: -moz-box;  display: -webkit-flex;  display: -ms-flexbox;  display: box;  display: flex;} button.headerButton:hover {  opacity: 0.8;  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";  filter: alpha(opacity=80);} button.headerButton:active {  opacity: 1;  -ms-filter: none;  filter: none;} .infoTableDiv::-webkit-scrollbar { width: 15px; height: 15px; } .infoTableDiv::-webkit-scrollbar-button { height: 0px; width: 0px; } .infoTableDiv::-webkit-scrollbar-track { background-color: rgba(0,0,0,0.05); } .infoTableDiv::-webkit-scrollbar-thumb { background-color: rgba(255,255,255,0.1); border: 3px solid transparent; -webkit-border-radius: 6px; border-radius: 6px; -webkit-background-clip: content; -moz-background-clip: content; background-clip: content-box; } .infoTableDiv::-webkit-scrollbar-thumb:hover { background-color: rgba(255,255,255,0.15); } .infoTableDiv::-webkit-scrollbar-corner { background-color: rgba(255,255,255,0.1); }'));
                document.getElementsByTagName('head')[0].appendChild(style);
                
                // Load the hideDead on/off images
                var hideDeadOn = document.createElement("img");
                hideDeadOn.width = 15;
                hideDeadOn.height = 15;
                hideDeadOn.src = "https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/hideDeadOn.png";
                bpOverlayImgs.hideDeadOn = hideDeadOn;
                
                var hideDeadOff = document.createElement("img");
                hideDeadOff.width = 15;
                hideDeadOff.height = 15;
                hideDeadOff.src = "https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/hideDeadOff.png";
                bpOverlayImgs.hideDeadOff = hideDeadOff;
                
                // Wrap game functions, make the autoscroll/focus buttons.
                wrapGameFunctions();
                makeAutoScrollButton();
                makeAutoFocusButton();
                makeDragButton();
            };

            firstRunProcs();
            
            // Make updateTime fire every second.
            setInterval(updateTime, 1000);

            // "Update Text"
            channel.appendToChat("Info", "New Update! (2014-12-07):<br />The drag jigger shouldn't go offscreen anymore");
        }
        main();
    }
}

var s = document.createElement('script');
s.setAttribute("type", "application/javascript");
s.textContent = '(' + source + ')();';

document.body.appendChild(s);
document.body.removeChild(s);
