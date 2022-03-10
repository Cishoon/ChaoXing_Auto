// ==UserScript==
// @name 超星学习解除失焦暂停
// @namespace http://tampermonkey.net/
// @version 2.0
// @description try to take over the world!
// @author Cishoon
// @match *://mooc1.chaoxing.com/mycourse/*
// @icon https://www.google.com/s2/favicons?sz=64&domain=baidu.com
// @grant none
// ==/UserScript==

//获取video元素
var getVideo = function () {
	//进入两层iframe框架
	var faIframe = document.getElementById("iframe");
	var faDoc = faIframe.contentWindow.document;
	var childIframe = faDoc.getElementsByTagName("iframe")[0];
	var childDoc = childIframe.contentWindow.document;

	//获取video
	var video = childDoc.getElementById("video_html5_api");

	//返回video
	return video;
};

//自动播放函数
var autoPlay = function () {
	//获取curVideo
	var curVideo = getVideo();

	//判断获取是否自动成功
	if (curVideo) {
		//进入页面直接静音视频
		curVideo.muted = true;

		//每隔1s循环一次，播放且设置倍速
		var timer = setInterval(function () {
			//判断视频是否结束，结束即终止循环
			if (!curVideo.ended) {
				//如果在播放就不执行循环操作
				if (!curVideo.onplaying) {
					curVideo.play();
					curVideo.playbackRate = 16;
				}
			} else {
				//结束循环
				timer = window.clearInterval(timer);
			}
		}, 1000);
	} else {
		alert("获取失败，请刷新页面\n推荐使用旧版\n\n如果多次失败请自己解决qwq");
	}
};

window.onload = function () {
	autoPlay();

	var btn = document.createElement("button");
    var txt = document.createTextNode("点击重试");

    //btn.setAttribute("onclick", "function(){}");

	btn.appendChild(txt);

	document.body.appendChild(btn);

	//btn = null; //及时解除不再使用的变量引用,即将其赋值为 null;
};
