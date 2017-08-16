$(document).ready(function() {
	//头部广告
	$("#h_ad").click(function() {
		$('.ad_tan').css("display", "block");
	});
	$("#ad_close").click(function() {
		$('.ad_tan').css("display", "none");
	});
	//头部广告结束
	//下拉框开始
	$("#menu_list").find("li").mouseover(function() {
		$(this).find(".menu_title").css({
			"background-image": "url(img/img1/brand_category2.png)",
			"opacity": "1"
		});
		$(this).find(".arrow").css("display", "block");
		$(this).find(".menu_content").css("display", "block");
	})
	$("#menu_list").find("li").mouseout(function() {
			$(this).find(".menu_title").css({
				"background-image": "url(img/img1/brand_category1.png)",
				"opacity": "0.85"
			})
			$(this).find(".arrow").css("display", "none")
			$(this).find(".menu_content").css("display", "none")
		})
		//下拉框结束
		//icon_wrap开始
	$("#icon_wrap").find("li").mouseover(function() {
		$(this).stop(false, false).animate({
			width: 160
		}, "normal")
	});
	$("#icon_wrap").find("li").mouseout(function() {
		$(this).stop(false, false).animate({
			width: 30
		}, "normal")
	});
	//icon_wrap结束
	//侧边栏开始
	$("#side_nav").find("li").mouseover(function() {
		$(this).find(".mine").css("display", "block");
	});
	$("#side_nav").find("li").mouseout(function() {
		$(this).find(".mine").css("display", "none");
	});
	$("#side_nav ").find(".open").click(function(e) {
		e.preventDefault();
		var i=$(this).index();
		console.log(i);
		var w = $("#side_box").css("width");
		if(w == "35px") {
			$("#side_box").stop(false, false).animate({
				width: 330
			}, "normal")
		}
		if(w == "330px") {
			var ii=$(".side_hide .hide_box:visible").index();
			console.log(ii);
			if(i==ii){
			$("#side_box").stop(false, false).animate({
				width: 35
			}, "normal")
			}
		}
		$(".side_hide .hide_box").eq(i).siblings().css("display","none")
		$(".side_hide .hide_box").eq(i).css("display","block")
	});
	$("#side_hide .close_icon").click(function() {
		$("#side_box").stop(false, false).animate({
			width: 35
		}, "normal")
	});
	$("#side_nav .dingbu").click(function(e) {
			e.preventDefault();
			$("body,html").stop(false, false).animate({
				scrollTop: 0
			}, "normal")
		})
		//侧边栏结束
});