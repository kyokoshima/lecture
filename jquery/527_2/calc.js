$(function(){
	var prev = "";
	var ope, old;
	$('.ope').on("click", function(){
		var current = $(this).text();
		var id = $(this).attr("id");
		if (isOperator(id)) {
			current = getOperator(id);
			$('#mark').text(current);
			// old = prev;
			//(old = old != undefined && old != null && old != 0)
			if (old != undefined) {
				old = calc(old, prev, ope);
				setResult(old);
			} else {
				old = $('#number').text();
			}
			ope = current;
			prev = "";
		} else if (current == '=') {
			$('#mark').text("");
			old = parseInt(old);
			prev = parseInt(prev);
			var answer = calc(old, prev, ope);
			setResult(answer);
			old = undefined;
			prev = "";
		} 
	});
	$('.num').on("click", function(){
		var current = $(this).text();
		prev = prev + current;
		setResult(prev);
	});
	$('.btn').on("click", function(){
		if ($(this).text() == 'C') {
			setResult("");
			$("#mark").text("");
			prev = "";
			old = undefined;
			ope = undefined;
		}
	}).on("mousedown", function(){
		$(this).addClass("on");
	}).on("mouseup", function(){
		$(this).removeClass("on");
	});

	var setResult = function(value) {
		$('#number').text(value);
	};

	var getOperator = function(id) {
		switch (id) {
			case 'plus':
				return '+';
				break;
			case 'minus':
				return '-';
				break;
			case 'kakeru':
				return '*';
				break;
			case 'waru':
				return '/';
				break;
			default:
		}
	};

	var isOperator = function(ope) {
		if (ope == 'plus' || ope == 'minus' || 
			ope == 'kakeru' || ope == 'waru') {
			return true;
		} else {
			return false;
		}
	};

	var calc = function(num1, num2, ope) {
		var answer;
		if (num1 === "") {
			return num2;
		} else if (num2 === "") {
			return num1;
		}
		num1 = parseInt(num1);
		num2 = parseInt(num2);
		switch (ope) {
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
		return answer;
	};

});