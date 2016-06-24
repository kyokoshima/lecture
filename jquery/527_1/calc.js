$(function(){
	var prev = "", ope, old;
	var letter;

	$('.ctrl').on("click", function(){
		if ($(this).text() == 'C') {
			prev = "";
			ope = undefined;
			old = undefined;
			setResult("");
		}
	});
	$('.ope').on("click", function(){
		var current = $(this).text();
		$('.ope').each(function(){
			$(this).removeClass("selected");
		});
		if (isOperator(current)) {
			$(this).addClass("selected");
			ope = current;
			if (!old) {
				old = prev;
			} else {
				old = calc(old, prev, ope);
			}
			prev = "";

			setResult("");
		} else if (current == '=') {
			var oldNum = parseInt(old);
			var prevNum = parseInt(prev);
			var answer = calc(oldNum, prevNum, ope);
			setResult(answer);

		} 
	});
	$('.num').on("click", function(){
		var current = $(this).text();
		prev = prev + current;
		setResult(prev);
	});

	$('.btn').on("mousedown", function(){
		$(this).addClass('on');
	}).on("mouseup", function(){
		$(this).removeClass('on');
	});

	var setResult = function(val) {
		$('#result').text(val);
	};
	var isOperator = function(ope) {
		if (ope == '+' ||
				ope == '-' ||
				ope == '*' ||
				ope == '/') {
			return true;
		} else {
			return false;
		}
		// return (ope == '+' ||
		// 		ope == '-' ||
		// 		ope == '*' ||
		// 		ope == '/');
	};
	var calc = function(num1, num2, o) {
		var answer;
		num1 = parseInt(num1);
		num2 = parseInt(num2);
		if (isNaN(num1)) { 
			return num2; 
		} else if (isNaN(num2)) {
			return num1;
		}
		switch(o){
				case '+':
					answer = num1 + num2;
					break;
				case '-':
					answer = num1 - num2;
					break;
				case '*':
					answer = num1 * num2;
					break;
				case '/':
					answer = num1 / num2;
					break;
				default:
		}
		answer = answer + ""; // 文字列に変換
		if (answer.indexOf('.') != -1){
			answer = answer.substring(0, 10);
		}
		return answer;
	}
	$(window).on('keydown', function(e){
		var letter = getLetter(e);
		console.log(letter);
		$('.btn').each(function(){
			if ($(this).text() == letter) {
				$(this).trigger('mousedown').trigger('click');
			}
		});
	}).on('keyup', function(e){
		var letter = getLetter(e);
		$('.btn').each(function(){
			if ($(this).text() == letter) {
				$(this).trigger('mouseup');
			}
		});
	});
	var getLetter = function(e) {
		var letter;
		var originalEvent = e.originalEvent;
		if (e.shiftKey) {
			switch(originalEvent.code) {
				case "Semicolon":
					letter = '+';
					break;
				case "Minus":
					letter = '=';
					break;
				case "Quote":
					letter = '*';
					break;
				default:
			}
		} else {
			letter = String.fromCharCode(e.keyCode);
		}
		return letter;
	}
});




