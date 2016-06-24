// array.js
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){

	var weeks = ["日曜日", "月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"];

	var index = document.getElementById("text1").value;
	alert(weeks[index]);
});

document.getElementById("confirm").addEventListener("click", function(){

	var result = confirm("夏は好きですか？");
	if (result == true) {
		result = confirm("秋は好きですか？");
		if (result == true) {
			result = confirm("冬は好きですか？")
			if (result == true) {
				result = confirm("春は好きですか？");
				if (result) {
					alert("全部好きですね");
				}
			}
		}
	} else {
		alert("ダメですね");
	}
});

document.getElementById("prompt").addEventListener("click", function(){
	var result = prompt("あなたのお名前は何ですか？", "John");
	alert("こんにちは" + result + "さん");
});

// document.getElementById("while").addEventListener("click", function(){
// 	var i = 1;
// 	var total = 0;
// 	while(total < 55) {
// 		total += i;
// 		i *= 2;
// 	}
// 	alert(total);
// });

document.getElementById("back").addEventListener("click", function(){
	history.back();
});

document.getElementById("jump").addEventListener("click", function(){
	location.href = "http://www.yahoo.co.jp";
});

document.getElementById("forward").addEventListener("click", function(){
	history.forward();
});

document.getElementById("replace").addEventListener("click", function(){
	location.replace("http://www.youtube.com");
});

document.getElementById("i").addEventListener("click", function(){
	ifr.location.href = "array.js";
});









