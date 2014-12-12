// ==UserScript==
// @name         BombParty Overlay
// @version      1.2.1
// @description  Overlay + Utilities for BombParty!
// @icon         https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/icon.png
// @icon64       https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/icon64.png
// @downloadURL  https://github.com/MrInanimated/bp-overlay/raw/master/dist/bpoverlay.user.js
// @author       Tianlin Zhang
// @match        http://bombparty.sparklinlabs.com/play/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==


// Grab the twitch global emotes
GM_xmlhttpRequest({
	method: "GET",
	url: "http://twitchemotes.com/global.json",
	onload: function(response) {
		var s = document.createElement('script');
		s.setAttribute("type", "application/javascript");
		s.textContent = 'var twitch_global = ' + response.responseText + ';';

		document.body.appendChild(s);
		document.body.removeChild(s);
	},
	onerror : function (response) {
		var s = document.createElement('script');
		s.setAttribute("type", "application/javascript");
		s.textContent = 'channel.appendToChat("Info", "Couldn\'t fetch twitch global emotes :(");';
		
		document.body.appendChild(s);
		document.body.removeChild(s);
	},
});

// Grab the twitch subscriber emote
GM_xmlhttpRequest({
	method: "GET",
	url: "http://twitchemotes.com/subscriber.json",
	onload: function(response) {
		var s = document.createElement('script');
		s.setAttribute("type", "application/javascript");
		s.textContent = 'var twitch_subscriber = ' + response.responseText + ';';

		document.body.appendChild(s);
		document.body.removeChild(s);
	},
	onerror : function (response) {
		var s = document.createElement('script');
		s.setAttribute("type", "application/javascript");
		s.textContent = 'channel.appendToChat("Info", "Couldn\'t fetch twitch subscriber emotes :(");';
		
		document.body.appendChild(s);
		document.body.removeChild(s);
	},
});


var source = function() {
	// If the window already has a BPOverlay, don't run again
	if (window.hasOwnProperty('BPOverlayHasRun')) {} else {
		window.BPOverlayHasRun = true;

		var main = function() {

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
				playerNames: {}, // Stores player name by actor index
				playerAuthId: {}, // Stores actor index by authId
				lostLives: {}, // Stores lost lives by actor index
				flips: {}, // Stores flips by actor index
				uFlips: {}, // Stores u-flips by actor index
				wordCount: 0, // Stores word count for current round
				startTime: 0, // Stores (in milliseconds since the epoch) the starting time of the round
				timeText: "", // Stores the text used to display the time on the overlay

				dragBoxHasBeenCreated: false, //Indicates that the dragbox is 4 real
				boxHasBeenCreated: false, // True when a DOM object with the id "infoBox" exists
				firstRun: true, // Set to true every time a game ends. If this is true a new infoBox is created, and this is set to false

				prevPlayerNames: {}, // Stores player name by actor index
				prevLostLives: {}, // Stores lost lives by actor index
				prevFlips: {}, // Stores flips by actor index
				prevUFlips: {}, // Stores u-flips by actor index
				prevTimeText: "", // Stores the text used to display the time on the overlay
				prevWordCount: 0, // Stores the word count for the last round

				hideDead: false, // If true, hides dead players' rows on the scoreboard table
				dragonDrop: false, // If true, indicates that the user has a wish to become or remain a dragon.
				// dragBoxHasBeenCreated will not replace this

				autoScroll: true, // If true, automatically scrolls that chat down whenever there is a new chat message.
				autoFocus: true, // If true, automatically switches focus to the chatbox after the user's turn

				focusNext: false, // If true, it is the user's turn (and so we should focus to the chatBox if autoFocus is true after the user's turn)

				twitchOn: false,  // If true, twitch emoticons will be displayed.				

				adventureTextMode: false,	//Self explanatory boolean for text adventure toggle
				
				adventureFirstRun: false,
				adventureLevels: [" noob", " beginner", " novice", " student of flips", " graduated student of flips", "n expert flipper", "n incredible flipper", " master flipper", " scrub tier immortal", " near immortal", "n immortal", " massive flipping faggot", " strong contender to the 'hang in there kitty'", "n immeasurable faggot of flips", " blackhole tier faggot", " legendary immortal faggot flipper", " supermassive faggot with more flips than a herd of dolphins", "ha! Silly rabbit. Flips are for kids!", "n undefeatable flipping gaylord of +5 anal strength", "n ascended immortal queen faggot cockmunch godly overlord of flips"],

			};

			//I'm so proud of this ugly node constructor
			//I'm certain it's unconventional, but it works so... yippee
			//It allows for creating images as nodes within an object and
			//defining attributes at the same time. LALALALALALALAL HAPPY HAPPY THIS
			//TOOK SO LONG TO FIGURE OUT!!!! AAAAAH. I'M DUMB AND SMART

			//USAGE: x = imNodeConstructor(type, attributes);
			//		'type' is the type of element on the form document.createElement("whatever");
			//		'attributes' are a list of attributes on the object form { att1: value1, att2: value2, ... , attN: valueN }
			// Post: x is of the type "whatever" with the attributes att1, att2, ... , attN
			var imgNodeConstructor = function(node, attributes) {
				for (x in attributes) {
					node[x] = attributes[x];
				}
				return node;
			};

			// Storage of images and their attributes used by the overlay.
			bpOverlayImgs = {

				//AutoScroll button on state
				on: imgNodeConstructor(document.createElement("img"), {
					width: 30,
					height: 30,
					src: "https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/chatdown.png",
				}),

				//AutoScroll button off state
				off: imgNodeConstructor(document.createElement("img"), {
					width: 30,
					height: 30,
					src: "https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/chatdownoff.png",
				}),

				//AutoFocus button on state
				autoFocusOn: imgNodeConstructor(document.createElement("img"), {
					width: 30,
					height: 30,
					src: "https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/focusOn.png",
				}),

				//AutoFocus button off state
				autoFocusOff: imgNodeConstructor(document.createElement("img"), {
					width: 30,
					height: 30,
					src: "https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/focusOff.png",
				}),

				//Dragon button off state
				dragOff: imgNodeConstructor(document.createElement("img"), {
					width: 30,
					height: 30,
					src: "https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/dragOff.png",
				}),

				//Dragon button on state                
				dragOn: imgNodeConstructor(document.createElement("img"), {
					width: 30,
					height: 30,
					src: "https://raw.githubusercontent.com/MrInanimated/bp-overlay/master/dist/dragOn.png",
				}),

				//These buttons not constructed because they appear solidary and have already been coded with the old method
				//No changes necessary unless we intend to add more buttons in the players window
				hideDeadOn: null, // HideDead button on state
				hideDeadOff: null, // HideDead button off state

			};


			//START - A collection of functions for the dragonDrop
			//The functions basically name themselves and do what they're told
			//They are then activated by listeneres when 	a)User starts dragging the 'draggable'
			//												b)User drags over to somewhere (not default behaviour of linkamajigging)
			//												c)User drops the box.

			//window resize meow
			window.onresize = resize;
			
			//Called when browser is resized
			function resize() {
				//Let's get the window size
				var height = window.innerHeight,
					width = window.innerWidth;

				//Let's get the dragOn size
				var infoBox = document.getElementById("infoBox");
				var dragW = infoBox.clientWidth;
				var dragH = infoBox.clientHeight;
				
				//Let's get the dragOn... wrawrrr
				var dragOn = document.getElementById("dragonDrop");

				//... and his coordinates. Nifty. We can use parseInt direclty. directly*
				var dragX = parseInt(dragOn.style.left);
				var dragY = parseInt(dragOn.style.top);

				//Resize widthwise
				if(dragW + dragX > width) {
					dragOn.style.left = width - dragW + 'px';
				}

				//Resize heightwise (also pushing it beyond check which isn't needed on the widthwise
				if(dragY < 0) {
					dragOn.style.top = "0px";
				} else if (dragH + dragY > height) {
					dragOn.style.top = height - dragH + 'px';
				}
				
			}

			//a: establish the drag and the starting parameters
			function drag_start(event) {
				var style = window.getComputedStyle(event.target, null);
				event.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY));
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
				var addLeft = event.clientX + parseInt(offset[0], 10);
				var addTop = event.clientY + parseInt(offset[1], 10);

				//Let's see if we can prevent the jigger from flying offscreen by doing something lazy
				//heigt and width answer "what is the area considered not to be outside of the game?"
				var height = window.innerHeight,
					width = window.innerWidth;

				//((Resize friendly, that is, if we want to make this resizable in the future this should hold)).
				//We seem to need to acquire this through the document.getElementById, it returns 0 otherwise
				var dragH = document.getElementById("infoBox").clientHeight;
				var dragW = document.getElementById("infoBox").clientWidth;


				//If the drag sends the dragon offscreen, put it to the edge instead
				//Otherwise let the user do whatever
				if (addLeft < 0) {
					dm.style.left = "0px";
				} else if (addLeft + dragW > width) {
					dm.style.left = (width - dragW) + 'px';
				} else {
					dm.style.left = addLeft + 'px';
				}

				//Same but for the height
				if (addTop < 0) {
					dm.style.top = "0px";
				} else if (addTop + dragH > height) {
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
			document.body.addEventListener('dragover', drag_over, false);
			document.body.addEventListener('drop', drop, false);


			//Configure and style the draggable box, then add to the body
			var dragAside = document.createElement("whatever");
			dragAside.id = "dragonDrop";
			dragAside.draggable = "true";
			dragAside.style.position = "absolute";
			dragAside.style.left = "100px"; //starting coordinates
			dragAside.style.top = "100px"; //eh whatevs, nice round number
			dragAside.style.width = "300px";
			dragAside.style.background = "rgb(20, 20, 20)";
			dragAside.addEventListener('dragstart', drag_start, false);
			document.body.appendChild(dragAside);

			//BEGIN: Functions for the adventureText thing
			//////////////////////////////////////////////

			var toggleTextAdventure = function(toggle) {

				if(toggle) {
	
					bpOverlay.adventureFirstRun = true;
					bpOverlay.adventureTextMode = true;

					//Hide the old
					var gameCanvas = document.getElementById("GameCanvas");
					gameCanvas.parentNode.style.backgroundColor="rgb(20,20,20)";
					gameCanvas.style.display="none";

					//In with the new
					var textAdventureDiv = document.createElement("DIV");
					textAdventureDiv.id="adventure";
					textAdventureDiv.className="adventureMeow";
					textAdventureDiv.style="position: relative; padding: 0.25em; -webkit-box-flex: 1; -moz-box-flex: 1; -o-box-flex: 1; box-flex: 1;  -webkit-flex: 1;  -ms-flex: 1;  flex: 1;   -webkit-box-orient: vertical; -moz-box-orient: vertical; -o-box-orient: vertical; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; text-align: left;";
					textAdventureDiv.style.backgroundColor="rgb(20,20,20)";

					

					//Player info
					var textAdventurePINFO = document.createElement("P");
					textAdventurePINFO.id = "adventurePINFO";
					textAdventurePINFO.className = "adventureMeow";
					var playerLives=0;
					var playerLetters=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v"];					
					//What level? How many letters?
					var playerIndex = 200;	//for undefined
					for(i=0; i < channel.data.actors.length; i++) {
						if(channel.data.actors[i].authId === window.app.user.authId) {
							playerLives = channel.data.actors[i].lives;
							playerLetters = channel.data.actors[i].lockedLetters;
							playerIndex = i;
						}
					}

					if(playerIndex == 200) {
						var level = 0;
					} else if(bpOverlay.flips[playerIndex] > 18) {
						var level = 18;
					} else {
						var level = bpOverlay.flips[playerIndex];
					}

					textAdventurePINFO.innerHTML = window.app.user.displayName + " : a" + bpOverlay.adventureLevels[level];
					textAdventurePINFO.style.color="rgb(255, 255, 51)";

					var remaining="";					
					//Player remaining letters
					for(i in playerLetters) {
						remaining+=playerLetters[i].toUpperCase();
					}

					var textAdventureEXPINFO = document.createElement("DIV");
					textAdventureEXPINFO.id="adventureEXPINFO";
					textAdventureEXPINFO.className = "adventureMeow";
					
					textAdventureEXPINFO.innerHTML = "Experience needed: " + remaining;
					textAdventureEXPINFO.style.color="rgb(255,255,255)";


					textAdventureDiv.appendChild(textAdventureEXPINFO);
					textAdventureDiv.appendChild(textAdventurePINFO);

					//Player Container
					var textAdventurePlayer = document.createElement("DIV");
					textAdventurePlayer.id = "adventurePlayer";
					textAdventurePlayer.className="adventureMeow";
					textAdventurePlayer.style = "position: relative";
					textAdventureDiv.appendChild(textAdventurePlayer);

					//Player image container
					var textAdventureAvatar = document.createElement("IMG");
					textAdventureAvatar.id = "adventureAvatar";
					textAdventureAvatar.className = "adventureMeow";
					if(typeof window.app.user.pictureURL === "undefined") {
						textAdventureAvatar.src = "http://bombparty.sparklinlabs.com/images/AvatarPlaceholder.png";					
					} else {
						textAdventureAvatar.src = window.app.user.pictureURL;
					}					
					textAdventureAvatar.style = "position: relative; float: right";
					textAdventurePlayer.appendChild(textAdventureAvatar);

					//Player bar container
					var textAdventureBars = document.createElement("DIV");
					textAdventureBars.id = "adventureBars";
					textAdventureBars.className = "adventureMeow";
					textAdventureBars.style="position: relative; float: right;";
					textAdventurePlayer.appendChild(textAdventureBars);

					//Player health bar
					var textAdventureHealth = document.createElement("DIV");
					textAdventureHealth.id = "adventureHealth";
					textAdventureHealth.className = "adventureMeow";
					textAdventureHealth.style="position: absolute;";
					textAdventureHealth.style.width= (10 + playerLives * 70) + "px";
					textAdventureBars.appendChild(textAdventureHealth);

					//Player exp bar
					var textAdventureExp = document.createElement("DIV");
					textAdventureExp.id = "adventureExp";
					textAdventureExp.className = "adventureMeow";
					textAdventureExp.style="position: absolute;";
					textAdventureExp.style.width= (10 + (21 - playerLetters.length) * 10) + "px";
					textAdventureBars.appendChild(textAdventureExp);

					//Turn container
					var textAdventureTurns = document.createElement("DIV");
					textAdventureTurns.id = "adventureTurns";
					textAdventureTurns.className = "adventureMeow";
					textAdventureTurns.style = "position: relative; float: right; color: #FFF";
					textAdventurePlayer.appendChild(textAdventureTurns);

					//Message container
					var textAdventureMessages = document.createElement("DIV");
					textAdventureMessages.id = "adventureMessages";
					textAdventureMessages.className="adventureMeow";
					textAdventureMessages.align="center";
					textAdventureMessages.style="position: relative;";
					textAdventureDiv.appendChild(textAdventureMessages);

					//We need input... and on the project too. Like, comment and subscribe. How? Magic.
					//Or maybe not. Let's keep this though if we wanna customize more later.					
					//var textAdventureInput = document.createElement("INPUT");
					//textAdventureInput.id="adventureInput";
					//textAdventureInput.className="adventureMeow";
					//textAdventureInput.style.outline="none";
					//textAdventureInput.style.border="none";
					//textAdventureInput.style.backgroundColor="rgb(20,20,20)";
					//textAdventureInput.style.color="rgb(90, 249, 12)";
					//textAdventureMessages.appendChild(textAdventureInput);
				
					gameCanvas.parentNode.insertBefore(textAdventureDiv, gameCanvas);

					//I hate CSS. This seems to only work after
					textAdventureMessages.style.marginLeft="40px";
					textAdventureMessages.style.marginTop="40px";
					textAdventureMessages.style.clear="both";
					textAdventurePlayer.style.marginLeft="40px";
					textAdventurePlayer.style.marginTop="5px"
					textAdventurePlayer.style.overflow="hidden";
					textAdventurePINFO.style.marginLeft="40px";
					textAdventureEXPINFO.style.marginLeft="40px";
					textAdventureEXPINFO.style.marginTop="40px";
					textAdventureAvatar.style.height="76px";
					textAdventureAvatar.style.width="76px";		
					textAdventureAvatar.style.float="left";
					textAdventureBars.style.marginLeft="10px";
					textAdventureBars.style.height="75px";
					textAdventureBars.style.width="400px";
					textAdventureBars.style.border="1px solid #141414";
					textAdventureBars.style.float="left";
					textAdventureHealth.style.backgroundColor="rgb(255,255,0)";
					textAdventureHealth.style.border="10px solid red";
					textAdventureHealth.style.marginTop="8px";
					textAdventureHealth.style.marginBottom="14px";
					textAdventureExp.style.backgroundColor="rgb(0,0,204)";
					textAdventureExp.style.border="10px solid blue";
					textAdventureExp.style.marginTop="14px";
					textAdventureExp.style.marginBottom="8px";
					textAdventureTurns.style.marginLeft="20px";
					textAdventureTurns.style.float="left";		
					
				} else {
					
					bpOverlay.adventureTextMode = false;
					bpOverlay.adventureFirstRun = false; //Probably not needed but I like symmetry					
					
					//Out with the old
					var old = document.getElementsByClassName("adventureMeow");
					for(i = 0; i < old.length; i++) {	
						old[i].parentNode.removeChild(old[i]);
					}

					//In with the previously old, ehhh.... default.
					//Pretty neat that you can reset this with an empty string. Oh boy.		
					var gameCanvas = document.getElementById("GameCanvas");
					gameCanvas.parentNode.style.backgroundColor="";
					gameCanvas.style.display="";
				
	}


}

//msg is the string to be displayed
//formatter is a color code on the form "rgb(x,y,z)" where 0<=x,y,z<=255
var sendAdventureMessage = function(msg, formatter) {
	if(bpOverlay.adventureTextMode) {
		var textAdventureMessages = document.getElementById("adventureMessages");	
		var textAdventureMsg = document.createElement("P");
		textAdventureMsg.style.color=formatter;
		textAdventureMsg.innerHTML=msg;
	
		//We don't want the messages to extend out of the page... now do we?
		if(textAdventureMessages.children.length > 10) {
			textAdventureMessages.appendChild(textAdventureMsg);	
			textAdventureMessages.removeChild(textAdventureMessages.firstChild);
		} else {
			textAdventureMessages.appendChild(textAdventureMsg);
		}
	

	}
}
			//////////////////////////////////////////////
			//END functions for the adventure text thing

			// This function is called whenever a new round begins.
			var generateActorConditions = function() {
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
				infoBox.id = "infoBox";

				// Create the time text display
				var timeElement = document.createElement("H2");
				timeElement.id = "infoBoxTimer";
				timeElement.align = "center"; //Might get overridden if not in drag-mode but who cares :D
				timeElement.style.color = "rgb(200,200,200)"; //this as well but that's a good thing
				timeElement.textContent = bpOverlay.timeText;
				infoBox.appendChild(timeElement);

				// Create the word counter display
				var wordCounterElement = document.createElement("H2");
				wordCounterElement.align = "center";
				wordCounterElement.id = "infoWordCounter";
				wordCounterElement.style.color = "rgb(200,200,200)";
				wordCounterElement.textContent = "Word Count: 0";
				infoBox.appendChild(wordCounterElement);

				// Oh boy, a horizontal rule!	Gee willikers!
				var horizontalRule = document.createElement("hr");
				infoBox.appendChild(horizontalRule);

				// Contain the scoreboard table in a div to allow for scrolling
				var infoTableDiv = document.createElement("DIV");
				infoTableDiv.className = "infoTableDiv";
				infoTableDiv.align = "center"
				
				//Retain choices between rounds from the settings meow
				var cont = document.getElementById("containerSelect");
				if(cont.value === "fitToPlayers") {
					infoTableDiv.style.maxHeight = "1000px"; //autoflow hinders big meow meow meow yappety yak
				} else {
					infoTableDiv.style.maxHeight = "100px";				
				}
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

				showHideButton.onclick = function() {
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
					} else {			
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

						//Let's add a call to the window.onresize if this is done while the dragon is at the bottom
						//This prevents overflow
						var funky = window.onresize;
						funky();

						// If the chat does need scrolling down then scroll it down
						if (scrollDown) {
							chatLog.scrollTop = chatLog.scrollHeight;
						}
					}
				};

				// Add the appropriate image based on the current setting of hideDead
				if (bpOverlay.hideDead) {
					showHideButton.appendChild(bpOverlayImgs.hideDeadOn);
				} else {
					showHideButton.appendChild(bpOverlayImgs.hideDeadOff);
				}

				// ...and append it all into the first row. Phew!
				showHideButtonDiv.appendChild(showHideButton);
				showHideContainer.appendChild(showHideButtonDiv);
				firstRow.appendChild(showHideContainer);

				// Make headers for the columns, and append to the first row
				var flipColumnHeader = document.createElement("td");
				flipColumnHeader.textContent = "Flips";
				flipColumnHeader.style.color = "rgb(200,200,200)";
				flipColumnHeader.align = "center";
				flipColumnHeader.style.padding = "2px";
				flipColumnHeader.style.fontSize = "11px";
				flipColumnHeader.style.width = "40px";
				flipColumnHeader.title = "Lives gained by using all the bonus letters.";
				firstRow.appendChild(flipColumnHeader);
				var uFlipColumnHeader = document.createElement("td");
				uFlipColumnHeader.textContent = "U-Flips";
				uFlipColumnHeader.style.color = "rgb(200,200,200)";
				uFlipColumnHeader.align = "center";
				uFlipColumnHeader.style.padding = "2px";
				uFlipColumnHeader.style.fontSize = "11px";
				uFlipColumnHeader.style.width = "40px";
				uFlipColumnHeader.title = "Lives gained whilst already at 3 lives, making the \"flip\" unnecessary.";
				firstRow.appendChild(uFlipColumnHeader);
				var lostLivesColumnHeader = document.createElement("td");
				lostLivesColumnHeader.textContent = "Deaths";
				lostLivesColumnHeader.style.color = "rgb(200,200,200)";
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
					playerRow.id = i + " row"; // Used to reference this row later on
					playerRow.className = "playerRow";

					// If the player this row represents is dead, grey it out
					if (actors[i].state == "dead") {
						playerRow.style.color = "#666";
						if (bpOverlay.hideDead) {
							playerRow.style.display = "none";
						}
					} else {
						playerRow.style.color = "rgb(210,210,210)";
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
					flipData.id = i + " flips"; // used to reference this cell later
					flipData.textContent = "0";
					flipData.align = "center";
					playerRow.appendChild(flipData);

					// Make the cell containing the # of u-flips
					var uFlipData = document.createElement("td");
					uFlipData.id = i + " uFlips"; // used to reference this cell later
					uFlipData.textContent = "0";
					uFlipData.align = "center";
					playerRow.appendChild(uFlipData);

					// Make the cell containing the # of deaths
					var lostLivesData = document.createElement("td");
					lostLivesData.id = i + " lives"; // used to reference this cell later
					lostLivesData.textContent = "0";
					lostLivesData.align = "center";
					playerRow.appendChild(lostLivesData);

					// Append the row to the table
					infoTable.appendChild(playerRow);
				}

				// Append the table to the container...
				infoBox.appendChild(infoTableDiv);



				//Creates either a docked infoBox or a draggable one
				if (bpOverlay.dragonDrop) {
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

				//And yet another check of overflow needed in case the dragon is on the bottom and a new round starts
				//with more players than the previous round. This is outside the if(bpOverlay.dragonDrop) because the user might wish
				//to switch sides after starting a new round in docked mode. Bugfixes ahoy hoy yay yay
				var funky = window.onresize;
				funky();

				// ..and finally, if autoScrolling is on, scroll the chat back down since this would've caused the chat to scroll up
				if (bpOverlay.autoScroll) {
					var chatLog = document.getElementById("ChatLog");
					chatLog.scrollTop = chatLog.scrollHeight;
				}

			}

			//Usage: 	generateSettingsElement(itemText, options, selectId, settingsFunction)
			//string	'itemText' is the text to the right of the drop down options pane
			//object	'options' is an object {value: Text, value2: Text2, ... , valueN: TextN}
			//			'value, ..., valueN' are the value we can compare from selectElement.value
			//			'Text, ..., TextN' are the strings that the user see when selecting options
			//string	'selectId': for your function you probably want to use document.getElementById(selectId)
			//function	'settingsFunction' is the function that is called on selectElement.onchange
			var generateSettingsElement = function(itemText, options, selectId, settingsFunction) {
				//Locate the settings tab
				var settingsTab = document.getElementById("SettingsTab");
	
				//Create the text item
				//Oh god the horrors of navigating the dom DOM DOOOOM
				var sTabTable = document.createElement("TABLE");
				settingsTab.appendChild(sTabTable);	
				var sTabTbody = document.createElement("TBODY");
				sTabTable.appendChild(sTabTbody);
				var sTabTr = document.createElement("TR");
				sTabTbody.appendChild(sTabTr);
				var sTabTd = document.createElement("TD");
				sTabTd.textContent = itemText;
				sTabTr.appendChild(sTabTd);
		
				//Create the options DOM DOM POMPOM
				var sTabOptionsTd = document.createElement("TD");
				sTabTr.appendChild(sTabOptionsTd);
				var sTabSelect = document.createElement("SELECT");
				sTabSelect.id = selectId;
				sTabOptionsTd.appendChild(sTabSelect);
	
				//Populate the select field with {Value: text} from options which is an object
				for(x in options) {
					var op = document.createElement("OPTION");
					op.textContent = options[x];
					op.value = x;
					sTabSelect.appendChild(op);	
				}

				//Add the function to the onchange listener for the newly created select
				sTabSelect.onchange = settingsFunction;
			
				//OPTIONAL: Reflect on your lifechoices, such as programming when you should be studying	
			}

			//Usage: function(onSrc, offSrc, buttonId, buttonMessage, defaultState, buttonFunction)
			//img		onSrc  is the image for the on- state
			//img		offSrc is the image for the off-state
			//string	buttonId is the id for the created button item in the header
			//string	buttonMessage is the hovermessage presented by the button
			//boolean	defaultState: if true, then the button is created with the onSrc image, else the offSrc image
			//function	buttonFunction is the function that is called when the button is clicked
			var makeHeaderButton = function(onSrc, offSrc, buttonId, buttonMessage, defaultState, buttonFunction) {

				// Actually make the button, and its container div
				var button = document.createElement("BUTTON");
				var buttonDiv = document.createElement("DIV");
				buttonDiv.className = "headerButtonDiv";

				// Insert the button container div into the header
				var header = document.getElementsByTagName("header")[0];
				var lastChild = header.lastChild;
				header.insertBefore(buttonDiv, lastChild);

				var onElement = document.createElement("img");
				onElement = onSrc;

				var offElement = document.createElement("img");
				offElement = offSrc;

				// General "stylistic touches"
				button.id = buttonId;
				button.className = "headerButton";
				button.title = buttonMessage;

				button.onclick = buttonFunction;

				//Depending on defaultState, have the button start with the "on" image or the "off"
				if (defaultState) {
					button.appendChild(onSrc);
				} else {
					button.appendChild(offSrc);
				}

				buttonDiv.appendChild(button);
			};


			// This function is called regularly to update the time text
			var updateTime = function() {
				// Don't bother doing anything if there's no game or the infoBox hasn't been created
				if (channel.data.state === 'playing' && (bpOverlay.boxHasBeenCreated || bpOverlay.dragBoxHasBeenCreated)) {
					// Timer code
					// Copied directly from Ice's bot
					var d = new Date();
					var seconds = Math.floor((d.getTime() - bpOverlay.startTime) / 1000);
					if ((seconds % 60) < 10) {
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
			var wrapGameFunctions = function() {

				// Chat message wrapper
				var gameChat = channel.appendToChat;
				channel.appendToChat = function(header, message) {
					// This stuff's in a try block because I want the default functions to go through even if my custom code fails
					try {
						// Link using the autolinker library any links in the message.
						message = Autolinker.link(message, {
							className: "chatMessageLink"
						});

						if (bpOverlay.twitchOn) {
							for (i in twitch_global) {
								message = message.replace(new RegExp("\\b" + i + "\\b", "g"), "<img src=\"http:" + twitch_global[i].url + "\" title=\"" + i + "\"><\/img>");
							}
							// Match subscriber emote patterns
							var matches = [];
							var found;
							var reg = /\b\w+:\w+\b/g
							while (found = reg.exec(message)) {
								matches.push(found[0]);
							}
							
							// Check if any of the patterns we've found are actual emotes
							toReplace = {};
							for (i = 0; i < matches.length; i++) {
								var split = matches[i].split(":");
								var s = split[0].toLowerCase();
								var e = split[1];
								if (!toReplace[matches[i]]) {
									if (twitch_subscriber[s]) {
										if (twitch_subscriber[s].emotes[e]) {
											toReplace[s+":"+e] = twitch_subscriber[s].emotes[e];
										}
									}
								}
							}
							
							// Finally, do any replacements
							for (i in toReplace) {
								message = message.replace(new RegExp(i, "g"), "<img src=\"http:" + toReplace[i] + "\" title=\"" + i + "\"><\/img>");
							}
							
						}
						

						// Scroll the chat down.
						if (bpOverlay.autoScroll) {
							var chatLog = document.getElementById("ChatLog");
							chatLog.scrollTop = chatLog.scrollHeight;
						}
					} finally {
						// Do the actual default chat message function
						gameChat(header, message);
					}
				};

				// setActivePlayerIndex wrapper
				var gameSetActivePlayerIndex = channel.socket.listeners("setActivePlayerIndex").shift();
				channel.socket.on("setActivePlayerIndex", function(actor) {
					try {
						// Since the first event that fires when a game starts is the setActivePlayerIndex event,
						// We create the infoBox and any other first-run procedures here
						if (bpOverlay.firstRun) {
							generateActorConditions();


							// Set firstRun to false so a new box is not created every time there's a turn change
							bpOverlay.firstRun = false;

							if(bpOverlay.adventureTextMode) {
								document.getElementById("adventureMessages").innerHTML="";
								sendAdventureMessage("Hark, the wheel turns yet again!", "rgb(10,200,150)");					
							}
							
							bpOverlay.adventureFirstRun=true;
						}

						//invisible break
						sendAdventureMessage("break", "rgb(20,20,20");
												

						// Chatbox autofocus code && hijacked for textAdventure
						// Which creates a strange conundrum of double checking the bpOverlay.autoFocus, but hey. Smaller code.
						// Nested checks ahoy because laziness.
						if (bpOverlay.autoFocus || bpOverlay.adventureTextMode) {

							if(bpOverlay.adventureTextMode) {
								//I'm afraid to have these recalculations elsewhere, they aren't that costly anyhow.
								//Player info
								var playerLives=0;
								var playerLetters=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v"];					
								var playerIndex = 200;
								//What level? How many letters?
								for(i=0; i < channel.data.actors.length; i++) {
									if(channel.data.actors[i].authId === window.app.user.authId) {
										playerLives = channel.data.actors[i].lives;
										playerLetters = channel.data.actors[i].lockedLetters;
										playerIndex = i;
									}
								}

								if(playerIndex == 200) {
									var level = 0;
								} else if(bpOverlay.flips[playerIndex] > 18) {
									var level = 18;
								} else {
									var level = bpOverlay.flips[playerIndex];
								}

								var textAdventurePINFO = document.getElementById("adventurePINFO");
								textAdventurePINFO.innerHTML = window.app.user.displayName + " : a" + bpOverlay.adventureLevels[level];

								var textAdventureEXPINFO = document.getElementById("adventureEXPINFO");
								var remaining="";					
								//Player remaining letters
								for(i in playerLetters) {
									remaining+=playerLetters[i].toUpperCase();
								}

								textAdventureEXPINFO.innerHTML = "Experience needed: " + remaining;

								

								
								//Player health bar
								var textAdventureHealth = document.getElementById("adventureHealth");
								textAdventureHealth.style.width = (10 + playerLives * 70) + "px";
								
								//Player exp bar
								var textAdventureExp = document.getElementById("adventureExp");
								textAdventureExp.style.width= (10 + (21 - playerLetters.length) * 10) + "px";
								
							}


							//There is a very very very small chance that this will not work for the "first shift" of the "first round"
							//It does work as expected after that though. Almost flawless. People will probably not notice.
							//Either that or change the code... but who's unlazy enough? I mean
							//This works 90% of the time for the first shift and 100% after that.
							if (bpOverlay.focusNext && bpOverlay.autoFocus) {
								// If focusNext is true (i.e. it's immediately after the player's turn)
								// We set the focus to the chatbox, and reset focusNext.
								setTimeout(function() {
									document.getElementById("ChatInputBox").focus();
								}, 400);
								bpOverlay.focusNext = false;
							
							}
							//If first-run, then a small delay is needed to get a correct wordRoot.	
							if(!bpOverlay.adventureFirstRun) {
								if (channel.data.actors[actor].authId === window.app.user.authId) {
									// If it's the user's turn, set focusNext to true so the next time
									// setActivePlayerIndex fires, we set focus to the chatbox
									if(bpOverlay.autoFocus) {
										bpOverlay.focusNext = true;
									}
									
									sendAdventureMessage("It is thy turn, squire. You are facing off against "
										+ channel.data.wordRoot 
										+". Do thine worst!", "rgb(90, 250, 0)"
									);
		
								
								} else {
							
									sendAdventureMessage("The heroic, "
										+ channel.data.actors[actor].displayName
										+ ", faces the mighty "
										+ channel.data.wordRoot
										+ ".", "rgb(255, 165, 0)"
									);

								}
							}

						}
					} finally {
						// Call the actual game function						
						gameSetActivePlayerIndex(actor);
						if(bpOverlay.adventureFirstRun) {
							bpOverlay.adventureFirstRun = false;
							//The channel.data.wordRoot needs to update in the first run
							setTimeout(function() {
									if (channel.data.actors[actor].authId === window.app.user.authId) {
										// If it's the user's turn, set focusNext to true so the next time
										// setActivePlayerIndex fires, we set focus to the chatbox
										if(bpOverlay.autoFocus) {
											bpOverlay.focusNext = true;
										}

										sendAdventureMessage("It is thy turn, squire. You are facing off against "
											+ channel.data.wordRoot 
											+". Do thine worst!", "rgb(90, 250, 0)"
										);
			
								
									} else {
							
										sendAdventureMessage("The heroic, "
											+ channel.data.actors[actor].displayName
											+ ", faces the mighty "
											+ channel.data.wordRoot
											+ ".", "rgb(255, 165, 0)"
										);

									}
							}, 100);
						}
						//We need to do this shortly after a shift because the channel needs to be updated first, every time.
						if(bpOverlay.adventureTextMode) {
						setTimeout(function() {
							for(i=0; i < channel.data.actors.length; i++) {

									var turns = document.getElementById("adventureTurns");
									var index = channel.data.activePlayerIndex;
									if( index == i ) {
										if(typeof channel.data.actors[index].pictureURL === "undefined") {
											var imgSource = "http://bombparty.sparklinlabs.com/images/AvatarPlaceholder.png";					
										} else {
											var imgSource = channel.data.actors[index].pictureURL;
										}					
					
										var EXP = (21 - channel.data.actors[index].lockedLetters.length);
										var hearts="";
										for(j=0; j < channel.data.actors[index].lives; j++) {
											hearts+="♥";
										}
										turns.innerHTML="<img src=' "+ imgSource + "' height='70px' width='70px' style='float:left; margin-right: 10px'></img><div style='float:right;'><p style='color: #DFA'>" + channel.data.actors[i].displayName + "<p style='color: orange'>Lives: <span style='color: red'>" + hearts + "</span></p><p style='color: #A746C7'>EXP: <span style='color: #7D8ADB'>" + EXP + "/21</div>";	
									}
								}
							}, 
						100);
	
						}	
					}	
				});

				// winWord wrapper
				var gameWinWord = channel.socket.listeners("winWord").shift();
				channel.socket.on("winWord", function(actor) {
					try {
						// We have to manually determine if the user flips, because apparently there's no event
						// that fires when a player flips.

						// t is the player we're considering.
						// Why t? I have no idea.
						var t = channel.data.actorsByAuthId[actor.playerAuthId];
						var playerNum = bpOverlay.playerAuthId[actor.playerAuthId];
						var lockedLetters = t.lockedLetters.slice();
						var lastWord = t.lastWord.toLowerCase();
						var prevExp = lockedLetters.length;
						// Remove the letters of the last word that a person used
						// from the letters they need to flip
						for (i = 0; i < lastWord.length; i++) {
							var index;
							if ((index = lockedLetters.indexOf(lastWord[i])) != -1) {
								lockedLetters.splice(index, 1);
							}
						}
						var experience = prevExp - lockedLetters.length;

						// If the lockedLetters is empty after removing all those, letters, the player has flipped
						var flipped = (lockedLetters.length === 0);

						if (flipped) {
							// Append one to the flip counter
							bpOverlay.flips[playerNum] += 1;

							// If the box is created, update it too
							if (bpOverlay.boxHasBeenCreated || bpOverlay.dragBoxHasBeenCreated) {
								document.getElementById(playerNum + " flips").textContent = bpOverlay.flips[playerNum];
							}

							if (t.lives === 3) {
								// If the flip happened when the player's lives is already at three, it's an u-flip
								// Increment and update
								bpOverlay.uFlips[playerNum] += 1;
								if (bpOverlay.boxHasBeenCreated || bpOverlay.dragBoxHasBeenCreated) {
									document.getElementById(playerNum + " uFlips").textContent = bpOverlay.uFlips[playerNum];
								}

							}

							if(bpOverlay.flips[playerNum] > 18) {
								var level = 18;
							} else {
								var level = bpOverlay.flips[playerNum];
							}

							if(channel.data.actors[playerNum].displayName === window.app.user.displayName) {
								sendAdventureMessage("LEVEL UP: You're now a" + bpOverlay.adventureLevels[level], "rgb(200, 200, 0"); 							
							} else {
								sendAdventureMessage(channel.data.actors[playerNum].displayName + " leveled up to a" + bpOverlay.adventureLevels[level], "rgb(200, 200, 0)");							
							}

						} else {
							if(channel.data.actors[playerNum].displayName === window.app.user.displayName) {
								sendAdventureMessage("Thou hast slain the beast with your " + t.lastWord.toUpperCase()
											+ " and gained "
											+ experience + " EXP!", "rgb(250, 0, 250)"
								); 						

							} else {							
								sendAdventureMessage("" + t.displayName 
											+ " has killed the beast with the mighty shout " + t.lastWord.toUpperCase()
											+ " and gained "
											+ experience + " EXP!", "rgb(250, 0, 250)"
								);
							} 						
						}

						// Add one to the word count, and update the box if it's been created
						bpOverlay.wordCount += 1;
						if (bpOverlay.boxHasBeenCreated || bpOverlay.dragBoxHasBeenCreated) {
							document.getElementById("infoWordCounter").textContent = "Word Count: " + bpOverlay.wordCount;
						}
					} finally {
						// Call the actual game function
						gameWinWord(actor);
					}
				});

				// setPlayerLives wrapper
				var gameSetPlayerLives = channel.socket.listeners("setPlayerLives").shift();
				channel.socket.on("setPlayerLives", function(actor) {
					try {
						// Apparently, setPlayerLives is only used for decreasing a player's lives.
						// It unfortunately doesn't fire when a player flips.

						
						if(actor.playerAuthId === window.app.user.authId) {
							sendAdventureMessage("Thine ignorance woundeth and thou hast been hurt", "rgb(255,20,10)");
						} else {						
							sendAdventureMessage("Alas... for poor " + channel.data.actorsByAuthId[actor.playerAuthId].displayName + " hath been hurt ", "rgb(255,20,10)");
						}
						
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
					} finally {
						// Call the actual game function
						gameSetPlayerLives(actor);
					}
				});

				// setPlayerState wrapper
				var gameSetPlayerState = channel.socket.listeners("setPlayerState").shift();
				channel.socket.on("setPlayerState", function(actor) {
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
								if(actor.playerAuthId === window.app.user.authId) {
									sendAdventureMessage("and a grave loss for thou art dead. " + channel.data.actorsByAuthId[actor.playerAuthId].displayName + ", may thee rest in piece!", "rgb(255,255,255"); 
								} else {
									sendAdventureMessage("and weepeth, thee mourn, for " + channel.data.actorsByAuthId[actor.playerAuthId].displayName + " hath left yonder mortal coil!", "rgb(255,255,255");
								}							
							}
						}
					} finally {
						// Call the actual game function
						gameSetPlayerState(actor);
					}
				});

				// endGame wrapper
				var gameEndGame = channel.socket.listeners("endGame").shift();
				channel.socket.on("endGame", function(actorName) {
					try {
						// Set firstRun to true, because we want the box to be redraw next round
						bpOverlay.firstRun = true;

						if(bpOverlay.adventureTextMode) {
							document.getElementById("adventureMessages").innerHTML="";
							document.getElementById("adventureTurns").innerHTML="";
							sendAdventureMessage("All things must end and so it does with " + channel.data.wordRoot.toUpperCase() + "!", "rgb(204, 255, 204)");
						}

						

						// Oh, and set the focus to the chatBox if you need to as well
						if (bpOverlay.autoFocus) {
							if (bpOverlay.focusNext) {
								setTimeout(function() {
									document.getElementById("ChatInputBox").focus();
								}, 400);
								bpOverlay.focusNext = false;
							}
						}

						
						// Update the time timer as it might be 1 second behind
						updateTime();

					} finally {
						// Call the actual game function
						gameEndGame(actorName);
						setTimeout(function() {
							sendAdventureMessage("But rising from the ashes of felled brethren is the victorious " + channel.data.lastWinner + "!", "rgb(24, 24, 255)");
						}, 100);
					}
				});

				// This function makes the tooltip text that lists all the players in the room
				// when you hover over the player count.
				var changePlayerText = function() {
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
			var firstRunProcs = function() {
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

				//AutoScrollButton made with makeHeaderButton Function
				//See usage in the declaration-meow for makeHeaderButton
				makeHeaderButton(bpOverlayImgs.on,
					bpOverlayImgs.off,
					"chatDownButton",
					"Automatically scroll the chat down whenever there is a new message.",
					true, //Because we want the onImg displayed at creation
					//Then the function within this function
					function() {
						// Flip the autoScroll property
						bpOverlay.autoScroll = !bpOverlay.autoScroll;

						if (bpOverlay.autoScroll) {
							// if autoScroll is true, remove the off image and add the on image...
							document.getElementById("chatDownButton").removeChild(bpOverlayImgs.off);
							document.getElementById("chatDownButton").appendChild(bpOverlayImgs.on);
						} else {
							// ...and vice versa if autoScroll is false
							document.getElementById("chatDownButton").removeChild(bpOverlayImgs.on);
							document.getElementById("chatDownButton").appendChild(bpOverlayImgs.off);
						}
					}
				);

				//autoFocus button made 
				makeHeaderButton(bpOverlayImgs.autoFocusOn,
					bpOverlayImgs.autoFocusOff,
					"autoFocusButton",
					"Automatically focus the chat box after your turn.",
					true,
					function() {
						// Flip the autoFocus property
						bpOverlay.autoFocus = !bpOverlay.autoFocus;

						if (bpOverlay.autoFocus) {
							// You must know the drill by now
							document.getElementById("autoFocusButton").removeChild(bpOverlayImgs.autoFocusOff);
							document.getElementById("autoFocusButton").appendChild(bpOverlayImgs.autoFocusOn);
						} else {
							// I'm not even going to bother
							document.getElementById("autoFocusButton").removeChild(bpOverlayImgs.autoFocusOn);
							document.getElementById("autoFocusButton").appendChild(bpOverlayImgs.autoFocusOff);
						}
					}
				);

				//dragOn button made                
				makeHeaderButton(bpOverlayImgs.dragOn,
					bpOverlayImgs.dragOff,
					"dragButton",
					"Have the info be in a draggable container instead",
					false,
					function() {
						//We don't want the button to react if the neither of the boxes have been created
						if (bpOverlay.boxHasBeenCreated || bpOverlay.dragBoxHasBeenCreated) {
							bpOverlay.dragonDrop = !bpOverlay.dragonDrop; //Flippety flop the boolean be bop

							var button = document.getElementById("dragButton");
							var sideBar = document.getElementById("Sidebar");
							var infoBox = document.getElementById("infoBox");
							var dragOnDrop = document.getElementById("dragonDrop");

							//In short, this is a switch between docked and dragon mode. Ugly and intuitive                
							if (bpOverlay.dragonDrop) {

								sideBar.removeChild(infoBox);
								dragOnDrop.appendChild(infoBox);

								button.removeChild(bpOverlayImgs.dragOff);
								button.appendChild(bpOverlayImgs.dragOn);
								bpOverlay.dragBoxHasBeenCreated = true;
								bpOverlay.boxHasBeenCreated = false;

							} else {

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
					}
				);
			}

			//We only want this once (I believe) so this is outside of a function
			//Generate the overlay section and append it to the SettingsTab
			var bpOverlayH2 = document.createElement("H2");
			bpOverlayH2.textContent = "Overlay Settings";
			var settingsTab = document.getElementById("SettingsTab");
			settingsTab.appendChild(bpOverlayH2);

			generateSettingsElement("Container Size", {compact: "Compact size", fitToPlayers: "Fit To Players"}, "containerSelect", 
						function () {
							//Get the infoTableDiv element and the selector created with the id 'containerSelect'
							var infoTableDiv = document.getElementsByClassName("infoTableDiv")[0];
							var sTabSelect = document.getElementById("containerSelect");
							
							//Change container.style.maxHeight depending on user choice
							if(sTabSelect.value === "compact") {
								infoTableDiv.style.maxHeight = "100px";					
							} else if (sTabSelect.value === "fitToPlayers") {
								infoTableDiv.style.maxHeight = "1000px";	//The autoflow whatever takes care of this.

								//Prevent flowing out of page
								//Let's be lazy and get the window.onresize and run it.
								var funky = window.onresize;
								funky();
							} else {
								//Do nothing
							}

						}
			);

			// Twitch Emote settings
			generateSettingsElement("Twitch Emotes", {off: "Off", on: "On"}, "twitchEmoteSelect",
						function () {
							var teSelect = document.getElementById("twitchEmoteSelect");
							
							if (teSelect.value === "on") {
								bpOverlay.twitchOn = true;
							}
							else if (teSelect.value === "off") {
								bpOverlay.twitchOff = false;
							}
							else {
							}
						}
			);
	
		
			//The text adventure setting
			generateSettingsElement("Text Adventure BETA", {off: "Off", on: "On"}, "adventureSetting",
				function() {
					var sTabSelect = document.getElementById("adventureSetting");
					if(sTabSelect.value === "on") {
						toggleTextAdventure(true);
					} else if(sTabSelect.value === "off") {
						toggleTextAdventure(false);
					} else {
						toggleTextAdventure(false);
					}
				}
			);

									


			firstRunProcs();

			// Make updateTime fire every second.
			setInterval(updateTime, 1000);

			// "Update Text"
			channel.appendToChat("Info", "New Update! (2014-12-12):<br />Twitch subscriber emotes! Use them like this: channel_name:emote_name<br />(Turn twitch emotes on in the settings tab)<br />Text adventure mode (BETA) added to settings.");		}
		main();
	}
}

var s = document.createElement('script');
s.setAttribute("type", "application/javascript");
s.textContent = '(' + source + ')();';

document.body.appendChild(s);
document.body.removeChild(s);
