$(function(){
	//
	// alert("Hello jQuery!");
	// $('#getById').on("click", function(){
	// 	// document.getElementById("text1").value;
	// 	alert($('#text1').val());
	// });
	$('#getById').click(function(){
		alert($('#text1').val());
	});

	$('#getByClass').on('click', function(){
		// var text = document.getElementsByClassName("text");
		// for(var i=0; i<text.length; i++) {
		// 	text[i].value;
		// }
		alert($('.text').val());
	});

	$('#getByTag').on('click', function(){
		alert($('input[type=radio]').val());
	});

	$('#getByName').on('click', function(){
		alert($('[name=text1]').val());
	});

	$('#getChild').on("click", function(){
		console.log($('#div1 div'));
	});

	$('#div3').click(function(){
		console.log("クリックされました");
	}).mouseover(function(){
		console.log("マウスが乗りました");
	}).mouseout(function(){
		console.log("マウスがハズレました");
	});

	$('#text2').on("focus", function(){
		$(this).css("background-color", "red");
	});
	$('#div4').on("mouseover", function(){
		$(this).css("background-color", "aqua");
	});
	$('#div5').on("mouseover", function(){
		$(this).fadeOut('slow').hide();
	}).on("mouseout", function(){
		$(this).fadeIn('fast').show();
	});
	$('#div6-1').on("click", function(){
		$(this).after('<div>追加されたdiv</div>');
	});
	$('#div7').on("click", function(){
		if ($(this).hasClass("on")) {
			$(this).removeClass("on");
		} else {
			$(this).addClass("on");
		}
	});
	$('#div8').on("click", function(){
		$(this).animate(
			{"height": "100px",
			"width": "100px"}
		);
	});
});








