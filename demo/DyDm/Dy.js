// ==UserScript==
// @name         斗鱼弹幕助手
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  斗鱼弹幕助手
// @author       Plus 知乎:https://www.zhihu.com/people/guo-yu-xiang-55
// @match        https://www.douyu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var m = new Map();
    let style = document.createElement('style');
    document.head.appendChild(style);
    let width = window.innerWidth;
    let from = `from { visibility: visible; -webkit-transform: translateX(${width}px); }`;
    let to = `to { visibility: visible; -webkit-transform: translateX(-100%); }`;
    style.sheet.insertRule(`@-webkit-keyframes barrage { ${from} ${to} }`, 0);
    var int = self.setInterval(function() {
        var canvas = document.getElementsByClassName("Barrage-content");
        let player = document.getElementById('__h5player');
        var myDms = document.getElementsByClassName('youhoudanmu');
        for(var i = 0; i < canvas.length; i++) {
            var id = canvas[i].dataset["chatid"];
            if(!m.has(id)) {
                if (m.length >= 100) {
                    m.clear();
                }
                m.set(canvas[i].dataset["chatid"],canvas[i].innerText);
                let div = document.createElement('div');
                let height = Number(Math.random() * 80).toFixed(1) + "%";
                div.style= "position:absolute;left:0;top:" + height +";visibility:hidden;animation:barrage 10s linear 0s;color: white;font-size:18px;font-weight: blod;";
                div.className = 'youhoudanmu';
                div.innerText = canvas[i].innerText;
                if (player != null) {
                    if(myDms.length > 100) {
                        for(var j = 0; j < myDms.length; j++) {
                            player.removeChild(myDms[j]);
                        }
                    }
                    player.appendChild(div);
                }
            }
        }
    }, 10);
    // Your code here...
})();

