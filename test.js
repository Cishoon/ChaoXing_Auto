// ==UserScript==
// @name 超星学习自动化
// @namespace http://tampermonkey.net/
// @version 0.3
// @description try to take over the world!
// @author Cishoon
// @match *://mooc1.chaoxing.com/mycourse/*
// @icon https://www.google.com/s2/favicons?sz=64&domain=baidu.com
// @grant none
// ==/UserScript==

window.onload = function () {

    //var btnNext = document.getElementById("right");

	var faIframe = document.getElementById("iframe");
	var faDoc = faIframe.contentWindow.document;
	var childIframe = faDoc.getElementsByTagName("iframe")[0];
    var childDoc = childIframe.contentWindow.document;

    var vedio = childDoc.getElementById("video_html5_api");

    if(vedio){
        setInterval(function () {
            vedio.play()
            vedio.playbackRate = 16;
        }, 1000)
    }else {
        window.location.reload();
    }
};
