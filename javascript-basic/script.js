// script.js
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
	var text1 = document.getElementById("text1").value;
	var result = document.getElementById("result");
	switch(text1) {
		case "0":
			alert("0です！");
			break;
		case "1":
			alert("1です！");
			break;
		default:
			alert("なにかです！");
	}
});
document.getElementById("confirm").addEventListener("click", function(){
	var result = confirm("ラーメンは好きですか？");
	if (result) {
		alert("とんこつお勧めです");
	} else {
		alert("焼き肉おすすめです");
	}
});
document.getElementById("prompt").addEventListener("click", function(){
	var result = prompt("あなたのお名前を教えてください", "John");
	document.getElementById("text1").value = result;
});

document.getElementById("jump").addEventListener("click", function(){
	var url = document.getElementById("text1").value;
	var result = confirm(url + "へジャンプしますか？");
	if (result) {
		location.href = url;
	}
});

document.getElementById("back").addEventListener("click", function(){
		history.back();
	});

document.getElementById("forward").addEventListener("click", function(){
		location.replace("http://google.co.jp");
	});

document.getElementById("changeIfr").addEventListener("click", function(){
	ifr.location.href = "script.js";
});









