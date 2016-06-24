$(function(){
	// alert("Hello jQuery!");

	// document.getElementById("getById")
	// 	.addEventListener("click", function(){

	// 	});
	$('#getById').on("click", function(){
		alert($('#text-id').val());
	});
	$('#getByClass').on("click", function(){
		alert($('.text-class').val());
	});
	$('#getByTag').on("click", function(){
		alert($('input[type=text]').val());
	});
	$('#getByName').on("click", function(){
		alert($('[name=text-name]').val());
	});
	$('#grandchild').click(function(){
		console.log($('#container>div'));
	});
	$('#event').click(function(){
		console.log("クリックされました");
	}).dblclick(function(){
		console.log("ダブルクリックされました");
	}).mouseover(function(){
		console.log("マウスが乗りました");
	}).mouseout(function(){
		console.log("マウスが離れました");
	});

	$('#text1').on("focus", function(){
		$(this).css("background-color", "red");
	});
	$('#div1').on("mouseover", function(){
		$(this).css("background-color", "aqua");
	});
	$('#div2').on("click", function(){
		$(this).fadeOut('slow').fadeIn('fast')
				.slideUp(10).slideDown(1000);
	});
	$('#div3').on("click", function(){
		$(this).after($('<div id="div4" class="div">div4</div>'));
	});

	$('#div5').on("mouseover", function(){
		$(this).animate(
			{width: "100px", height: "100px"},
			'slow'
		);
	});
	$('#div6').on("click", function(){
		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
		} else {
			$(this).addClass('on');
		}
	});
});



