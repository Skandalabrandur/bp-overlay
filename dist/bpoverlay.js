if (window.hasOwnProperty('BPOverlayHasRun')) {
}
else {
    window.BPOverlayHasRun = true;
    var main = function () {
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
    
        bpOverlay = {
            playerNames : {},
            playerAuthId : {},
            lostLives : {},
            flips : {},
            uFlips : {},
            wordCount : 0,
            startTime : 0,
            timeText : "",
            
            boxHasBeenCreated : false,
            firstRun : true,

            prevPlayerNames : {},
            prevLostLives : {},
            prevFlips : {},
            prevUFlips : {},
            prevTimeText: "I don't have data for the last round.",
            prevWordCount : 0,
            
            hideDead : false,
            
            autoScroll : true,
            autoFocus: true,
            focusNext : false,
        };

        bpOverlayImgs = {
            on: null,
            off: null,
            autoFocusOn: null,
            autoFocusOff: null,
            hideDeadOn: null,
            hideDeadOff: null,
        };

        var generateActorConditions = function () {
            if (bpOverlay.boxHasBeenCreated) {
                var infoBox = document.getElementById("infoBox");
                document.getElementById("Sidebar").removeChild(infoBox);
                bpOverlay.boxHasBeenCreated = false;
            }

            bpOverlay.prevPlayerNames = bpOverlay.playerNames;
            bpOverlay.prevLostLives = bpOverlay.lostLives;
            bpOverlay.prevFlips = bpOverlay.flips;
            bpOverlay.prevUFlips = bpOverlay.uFlips;
            bpOverlay.prevTimeText = bpOverlay.timeText;
            bpOverlay.prevWordCount = bpOverlay.wordCount;

            bpOverlay.playerNames = {};
            bpOverlay.playerAuthId = {};
            bpOverlay.lostLives = {};
            bpOverlay.flips = {};
            bpOverlay.uFlips = {};

            actors = channel.data.actors;

            for (i = 0; i < actors.length; i++) {
                bpOverlay.playerNames[i] = actors[i].displayName;
                bpOverlay.playerAuthId[actors[i].authId] = i;
                bpOverlay.flips[i] = 0;
                bpOverlay.uFlips[i] = 0;
                bpOverlay.lostLives[i] = 0;
            }

            bpOverlay.wordCount = 0;
            bpOverlay.timeText = "Elapsed time | 0:00";

            var d = new Date();
            bpOverlay.startTime = d.getTime();

            var infoBox = document.createElement("DIV");
            infoBox.id="infoBox";

            var timeElement = document.createElement("H2");
            timeElement.id = "infoBoxTimer";
            timeElement.textContent = bpOverlay.timeText;
            infoBox.appendChild(timeElement);

            var wordCounterElement = document.createElement("H2");
            wordCounterElement.id = "infoWordCounter";
            wordCounterElement.textContent = "Word Count: 0";
            infoBox.appendChild(wordCounterElement);

            var horizontalRule = document.createElement("hr");
            infoBox.appendChild(horizontalRule);

            var infoTableDiv = document.createElement("DIV");
            infoTableDiv.className = "infoTableDiv";
            infoTableDiv.align = "center"
            infoTableDiv.style.maxHeight = "100px";
            infoTableDiv.style.overflowY = "auto";
            
            var infoTable = document.createElement("table");
            infoTableDiv.appendChild(infoTable);
            var firstRow = document.createElement("tr");
            
            var showHideContainer = document.createElement("td");
            
            var showHideButton = document.createElement("BUTTON");
            var showHideButtonDiv = document.createElement("DIV");
            showHideButtonDiv.className = "headerButtonDiv";
            showHideButton.id = "autoFocusButton";
            showHideButton.className = "headerButton";
            showHideButton.title = "Show/Hide dead players.";
            
            showHideButton.onclick = function () {
                bpOverlay.hideDead = !bpOverlay.hideDead;
                
                if (bpOverlay.hideDead) {
                    showHideButton.removeChild(bpOverlayImgs.hideDeadOff);
                    showHideButton.appendChild(bpOverlayImgs.hideDeadOn);
                    
                    var rows = document.getElementsByClassName("playerRow");
                    for (i = 0; i < rows.length; i++) {
                        if (rows[i].style.color == "rgb(102, 102, 102)") {
                            rows[i].style.display = "none";
                        }
                    }
                }
                else {
                    showHideButton.removeChild(bpOverlayImgs.hideDeadOn);
                    showHideButton.appendChild(bpOverlayImgs.hideDeadOff);
                    
                    var chatLog = document.getElementById("ChatLog");
                    var scrollDown = (bpOverlay.autoScroll || chatLog.scrollTop == chatLog.scrollHeight)
                    
                    var rows = document.getElementsByClassName("playerRow");
                    for (i = 0; i < rows.length; i++) {
                        if (rows[i].style.display == "none") {
                            rows[i].style.display = "table-row";
                        }
                    }
                    
                    if (scrollDown) {
                        chatLog.scrollTop = chatLog.scrollHeight;
                    }
                }
            };
            
            if (bpOverlay.hideDead) {
                showHideButton.appendChild(bpOverlayImgs.hideDeadOn);
            }
            else {
                showHideButton.appendChild(bpOverlayImgs.hideDeadOff);
            }
            showHideButtonDiv.appendChild(showHideButton);
            showHideContainer.appendChild(showHideButtonDiv);
            firstRow.appendChild(showHideContainer);
            
            var flipColumnHeader = document.createElement("td");
            flipColumnHeader.textContent = "Flips";
            flipColumnHeader.align = "center";
            flipColumnHeader.style.padding = "2px";
            flipColumnHeader.style.fontSize = "11px";
            flipColumnHeader.style.width = "40px";
            flipColumnHeader.title = "Lives gained by using all the bonus letters.";
            firstRow.appendChild(flipColumnHeader);
            var uFlipColumnHeader = document.createElement("td");
            uFlipColumnHeader.textContent = "U-Flips";
            uFlipColumnHeader.align = "center";
            uFlipColumnHeader.style.padding = "2px";
            uFlipColumnHeader.style.fontSize = "11px";
            uFlipColumnHeader.style.width = "40px";
            uFlipColumnHeader.title = "Lives gained whilst already at 3 lives, making the \"flip\" unnecessary.";
            firstRow.appendChild(uFlipColumnHeader);
            var lostLivesColumnHeader = document.createElement("td");
            lostLivesColumnHeader.textContent = "Deaths";
            lostLivesColumnHeader.align = "center";
            lostLivesColumnHeader.style.padding = "2px";
            lostLivesColumnHeader.style.fontSize = "11px";
            lostLivesColumnHeader.style.width = "40px";
            lostLivesColumnHeader.title = "Lives lost in this game.";
            firstRow.appendChild(lostLivesColumnHeader);
            infoTable.appendChild(firstRow);

            for (i = 0; i < actors.length; i++) {
                var playerRow = document.createElement("tr");
                playerRow.id = i + " row";
                playerRow.className = "playerRow";
                
                if (actors[i].state == "dead") {
                    playerRow.style.color = "#666";
                    if (bpOverlay.hideDead) {
                        playerRow.style.display = "none";
                    }
                }

                var nameData = document.createElement("td");
                var name = bpOverlay.playerNames[i]
                
                if (name.length > 18) {
                    name = name.slice(0, 15) + "...";
                }
                
                nameData.textContent = name;
                nameData.align = "center";
                playerRow.appendChild(nameData)

                var flipData = document.createElement("td");
                flipData.id = i + " flips";
                flipData.textContent = "0";
                flipData.align = "center";
                playerRow.appendChild(flipData);

                var uFlipData = document.createElement("td");
                uFlipData.id = i + " uFlips";
                uFlipData.textContent = "0";
                uFlipData.align = "center";
                playerRow.appendChild(uFlipData);

                var lostLivesData = document.createElement("td");
                lostLivesData.id = i + " lives";
                lostLivesData.textContent = "0";
                lostLivesData.align = "center";
                playerRow.appendChild(lostLivesData);

                infoTable.appendChild(playerRow);
            }

            infoBox.appendChild(infoTableDiv);
            
            var sideBar = document.getElementById("Sidebar");
            sideBar.insertBefore(infoBox, sideBar.firstChild);

            bpOverlay.boxHasBeenCreated = true;
            
            if (bpOverlay.autoScroll) {
                var chatLog = document.getElementById("ChatLog");
                chatLog.scrollTop = chatLog.scrollHeight;
            }
            
        }

        var makeAutoScrollButton = function () {
            var onImg = document.createElement("img");
            onImg.width = 30;
            onImg.height = 30;
            onImg.src = "https://dl.dropboxusercontent.com/u/9328924/BPOverlay/chatdown.png";
            bpOverlayImgs.on = onImg;
            
            var offImg = document.createElement("img");
            offImg.src = "https://dl.dropboxusercontent.com/u/9328924/BPOverlay/chatdownoff.png";
            bpOverlayImgs.off = offImg;

            var button = document.createElement("BUTTON");
            var buttonDiv = document.createElement("DIV");
            buttonDiv.className = "headerButtonDiv";
            var header = document.getElementsByTagName("header")[0];
            var lastChild = header.lastChild;
            header.insertBefore(buttonDiv, lastChild);
            button.id = "chatDownButton";
            button.className = "headerButton";
            button.title = "Automatically scroll the chat down whenever there is a new message.";
            
            button.onclick = function () {
                bpOverlay.autoScroll = !bpOverlay.autoScroll;
                
                if (bpOverlay.autoScroll) {
                    button.removeChild(bpOverlayImgs.off);
                    button.appendChild(bpOverlayImgs.on);
                }
                else {
                    button.removeChild(bpOverlayImgs.on);
                    button.appendChild(bpOverlayImgs.off);
                }
            };
            
            button.appendChild(bpOverlayImgs.on);
            buttonDiv.appendChild(button);
        };
        
        var makeAutoFocusButton = function () {
            var focusOnImage = document.createElement("img");
            focusOnImage.width = 30;
            focusOnImage.height = 30;
            focusOnImage.src = "https://dl.dropboxusercontent.com/u/9328924/BPOverlay/focusOn.png";
            bpOverlayImgs.autoFocusOn = focusOnImage;
            
            var focusOffImage = document.createElement("img");
            focusOffImage.width = 30;
            focusOffImage.height = 30;
            focusOffImage.src = "https://dl.dropboxusercontent.com/u/9328924/BPOverlay/focusOff.png";
            bpOverlayImgs.autoFocusOff = focusOffImage;
            
            var button = document.createElement("BUTTON");
            var buttonDiv = document.createElement("DIV");
            buttonDiv.className = "headerButtonDiv";
            var header = document.getElementsByTagName("header")[0];
            var lastChild = header.lastChild;
            header.insertBefore(buttonDiv, lastChild);
            button.id = "autoFocusButton";
            button.className = "headerButton";
            button.title = "Automatically focus the chat box after your turn.";
            
            button.onclick = function () {
                bpOverlay.autoFocus = !bpOverlay.autoFocus;
                
                if (bpOverlay.autoFocus) {
                    button.removeChild(bpOverlayImgs.autoFocusOff);
                    button.appendChild(bpOverlayImgs.autoFocusOn);
                }
                else {
                    button.removeChild(bpOverlayImgs.autoFocusOn);
                    button.appendChild(bpOverlayImgs.autoFocusOff);
                }
            };
            
            button.appendChild(bpOverlayImgs.autoFocusOn);
            buttonDiv.appendChild(button);
        };

        var updateTime = function () {
            if (channel.data.state === 'playing' && bpOverlay.boxHasBeenCreated) {
                var d = new Date();
                var seconds = Math.floor((d.getTime() - bpOverlay.startTime) / 1000);
                if((seconds % 60) < 10) {
                    var formatter = "0";
                } else {
                    var formatter = "";
                }

                bpOverlay.timeText = "Elapsed time | " + Math.floor(seconds / 60) + ":" + formatter + "" + (seconds % 60) + "";

                if (bpOverlay.boxHasBeenCreated) {
                    document.getElementById("infoBoxTimer").textContent = bpOverlay.timeText;
                }
            }
        }

        var wrapGameFunctions = function () {
            var gameChat = channel.appendToChat;
            channel.appendToChat = function (header, message) {
                try {
                    message = Autolinker.link(message, {className: "chatMessageLink"});
                    if (bpOverlay.autoScroll) {
                        var chatLog = document.getElementById("ChatLog");
                        chatLog.scrollTop = chatLog.scrollHeight;
                    }
                }
                finally {
                    gameChat(header, message);
                }
            };
            
            var gameSetActivePlayerIndex = channel.socket.listeners("setActivePlayerIndex").shift();
            channel.socket.on("setActivePlayerIndex", function (actor) {
                try {
                    if (bpOverlay.firstRun) {
                        generateActorConditions();
                        bpOverlay.firstRun = false;
                    }
                    if (bpOverlay.autoFocus) {
                        if (channel.data.actors[actor].authId === window.app.user.authId) {
                            bpOverlay.focusNext = true;
                        }
                        else if (bpOverlay.focusNext) {
                            document.getElementById("ChatInputBox").focus()
                            bpOverlay.focusNext = false;
                        }
                    }
                }
                finally {
                    gameSetActivePlayerIndex(actor);
                }
            });

            var gameWinWord = channel.socket.listeners("winWord").shift();
            channel.socket.on("winWord", function (actor) {
                try {
                    var t = channel.data.actorsByAuthId[actor.playerAuthId];
                    var playerNum = bpOverlay.playerAuthId[actor.playerAuthId];
                    var lockedLetters = t.lockedLetters.slice();
                    var lastWord = t.lastWord.toLowerCase();

                    for (i = 0; i < lastWord.length; i++) {
                        var index;
                        if ((index = lockedLetters.indexOf(lastWord[i])) != -1) {
                            lockedLetters.splice(index, 1);
                        }
                    }

                    var flipped = (lockedLetters.length === 0);

                    if (flipped) {
                        bpOverlay.flips[playerNum] += 1;
                        if (bpOverlay.boxHasBeenCreated) {
                            document.getElementById(playerNum + " flips").textContent = bpOverlay.flips[playerNum];
                        }
                        if (t.lives === 3)
                        {
                            bpOverlay.uFlips[playerNum] += 1;
                            if (bpOverlay.boxHasBeenCreated) {
                                document.getElementById(playerNum + " uFlips").textContent = bpOverlay.uFlips[playerNum];
                            }
                        }
                    }

                    bpOverlay.wordCount += 1;
                    if (bpOverlay.boxHasBeenCreated) {
                        document.getElementById("infoWordCounter").textContent = "Word Count: " + bpOverlay.wordCount;
                    }
                }
                finally {
                    gameWinWord(actor);
                }
            });

            var gameSetPlayerLives = channel.socket.listeners("setPlayerLives").shift();
            channel.socket.on("setPlayerLives", function (actor) {
                try {
                    var t = channel.data.actorsByAuthId[actor.playerAuthId];
                    var playerNum = bpOverlay.playerAuthId[actor.playerAuthId];

                    if (t.lives > actor.lives) {
                        bpOverlay.lostLives[playerNum] += 1;
                        document.getElementById(playerNum + " lives").textContent = bpOverlay.lostLives[playerNum];
                    }
                }
                finally {
                    gameSetPlayerLives(actor);
                }
            });

            var gameSetPlayerState = channel.socket.listeners("setPlayerState").shift();
            channel.socket.on("setPlayerState", function (actor) {
                try {
                    if (bpOverlay.boxHasBeenCreated) {
                        if (actor.state == "dead") {
                            var playerNum = bpOverlay.playerAuthId[actor.playerAuthId];
                            var tableRow = document.getElementById(playerNum + " row");
                            tableRow.style.color = "#666";
                            if (bpOverlay.hideDead) {
                                tableRow.style.display = "none";
                            }
                        }
                    }
                }
                finally {
                    gameSetPlayerState(actor);
                }
            });
            
            var gameEndGame = channel.socket.listeners("endGame").shift();
            channel.socket.on("endGame", function (actorName) {
                try {
                    bpOverlay.firstRun = true;
                    if (bpOverlay.autoFocus) {
                        if (bpOverlay.focusNext) {
                            document.getElementById("ChatInputBox").focus()
                            bpOverlay.focusNext = false;
                        }
                    }
                }
                finally {
                    gameEndGame(actorName);
                }
            });
            
            var changePlayerText = function () {
                var playerCount = document.getElementsByClassName("ChannelUsers")[0];
                var title = "Players:";
                for (var i in channel.data.users) {
                    title += "\n" + channel.data.users[i].displayName;
                }
                playerCount.title = title;
            };
            
            channel.socket.on("addUser", changePlayerText);
            channel.socket.on("removeUser", changePlayerText);
            changePlayerText();
        };

        var firstRunProcs = function () {
            var style = document.createElement('style');
            style.appendChild(document.createTextNode('.headerButtonDiv {  display: -webkit-box;  display: -moz-box;  display: -webkit-flex;  display: -ms-flexbox;  display: box;  display: flex;  opacity: 0.3;  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";  filter: alpha(opacity=30);} .headerButtonDiv:hover {  opacity: 1;  -ms-filter: none;  filter: none;} button.headerButton {  border: none;  background: none;  cursor: pointer;  opacity: 0.5;  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";  filter: alpha(opacity=50);  display: -webkit-box;  display: -moz-box;  display: -webkit-flex;  display: -ms-flexbox;  display: box;  display: flex;} button.headerButton:hover {  opacity: 0.8;  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";  filter: alpha(opacity=80);} button.headerButton:active {  opacity: 1;  -ms-filter: none;  filter: none;} .infoTableDiv::-webkit-scrollbar { width: 15px; height: 15px; } .infoTableDiv::-webkit-scrollbar-button { height: 0px; width: 0px; } .infoTableDiv::-webkit-scrollbar-track { background-color: rgba(0,0,0,0.05); } .infoTableDiv::-webkit-scrollbar-thumb { background-color: rgba(255,255,255,0.1); border: 3px solid transparent; -webkit-border-radius: 6px; border-radius: 6px; -webkit-background-clip: content; -moz-background-clip: content; background-clip: content-box; } .infoTableDiv::-webkit-scrollbar-thumb:hover { background-color: rgba(255,255,255,0.15); } .infoTableDiv::-webkit-scrollbar-corner { background-color: rgba(255,255,255,0.1); }'));
            document.getElementsByTagName('head')[0].appendChild(style);
            
            var hideDeadOn = document.createElement("img");
            hideDeadOn.width = 15;
            hideDeadOn.height = 15;
            hideDeadOn.src = "https://dl.dropboxusercontent.com/u/9328924/BPOverlay/hideDeadOn.png";
            bpOverlayImgs.hideDeadOn = hideDeadOn;
            
            var hideDeadOff = document.createElement("img");
            hideDeadOff.width = 15;
            hideDeadOff.height = 15;
            hideDeadOff.src = "https://dl.dropboxusercontent.com/u/9328924/BPOverlay/hideDeadOff.png";
            bpOverlayImgs.hideDeadOff = hideDeadOff;
            
            wrapGameFunctions();
            makeAutoScrollButton();
            makeAutoFocusButton();
        };

        firstRunProcs();
        setInterval(updateTime, 1000);

        channel.appendToChat("Info", "New Update! (12/02/2014):<br />Added automatic linking in chat messages, thanks to https://github.com/gregjacobs/Autolinker.js.<br />Added option to hide dead players in scoreboard.");
    }
    main();
}