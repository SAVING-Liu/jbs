$(".p1").hover(function(){
	$(".dh").show();	
},function(){
	$(".dh").hide();
});
$(".p2").hover(function(){
	$(".ewm").show();	
},function(){
	$(".ewm").hide();
});

var xwzx_index = 0;
$(".xwzx_ul1 li").hover(function(){
	xwzx_index = $(this).index();
	$(this).addClass("xwzx_hover").siblings().removeClass("xwzx_hover");
	$(".xwzx_div").eq(xwzx_index).show().siblings(".xwzx_div").hide();
},function(){});



var gsjj_index = 0;
$(".gsjj_right ul li").hover(function(){
	gsjj_index = $(this).index();
	$(this).addClass("gsjj_hover").siblings().removeClass("gsjj_hover");
	$(".gsjj_div").eq(gsjj_index).show().siblings(".gsjj_div").hide();
},function(){});

var scroll1 = 0;
$(".p_quan1 span").hover(function(){
	clearInterval(timer);
	scroll1 = $(this).index();
	$(this).addClass("span1").siblings().removeClass("span1");
	$(".p_scroll1 ul").animate({left:-scroll1*540},300);	
},function(){
	timer = setInterval(pic_gun,2000);	
});
var timer = null;
function pic_gun(){
	scroll1++;
	if(scroll1>2){
		scroll1 = 0;
	}
	$(".p_quan1 span").eq(scroll1).addClass("span1").siblings().removeClass("span1");
	$(".p_scroll1 ul").animate({left:-scroll1*540},300);		
}
timer = setInterval(pic_gun,2000);

var scroll2 = 0;
$(".p_quan2 span").hover(function(){
	clearInterval(timer2);
	scroll2 = $(this).index();
	$(this).addClass("span2").siblings().removeClass("span2");
	$(".p_scroll2 ul").animate({left:-scroll2*540},300);	
},function(){
	timer2 = setInterval(pic_gun2,2000);	
});
var timer2 = null;
function pic_gun2(){
	scroll2++;
	if(scroll2>2){
		scroll2 = 0;
	}
	$(".p_quan2 span").eq(scroll2).addClass("span2").siblings().removeClass("span2");
	$(".p_scroll2 ul").animate({left:-scroll2*540},300);		
}
timer2 = setInterval(pic_gun2,2000);

var scroll3 = 0;
$(".p_quan3 span").hover(function(){
	clearInterval(timer3);
	scroll3 = $(this).index();
	$(this).addClass("span3").siblings().removeClass("span3");
	$(".p_scroll3 ul").animate({left:-scroll3*540},300);	
},function(){
	timer3 = setInterval(pic_gun3,2000);	
});
var timer3 = null;
function pic_gun3(){
	scroll3++;
	if(scroll3>2){
		scroll3 = 0;
	}
	$(".p_quan3 span").eq(scroll3).addClass("span3").siblings().removeClass("span3");
	$(".p_scroll3 ul").animate({left:-scroll3*540},300);		
}
timer3 = setInterval(pic_gun3,2000);

var scroll4 = 0;
$(".p_quan4 span").hover(function(){
	clearInterval(timer4);
	scroll4 = $(this).index();
	$(this).addClass("span4").siblings().removeClass("span4");
	$(".p_scroll4 ul").animate({left:-scroll4*540},300);	
},function(){
	timer4 = setInterval(pic_gun4,2000);	
});
var timer4 = null;
function pic_gun4(){
	scroll4++;
	if(scroll4>2){
		scroll4 = 0;
	}
	$(".p_quan4 span").eq(scroll4).addClass("span4").siblings().removeClass("span4");
	$(".p_scroll4 ul").animate({left:-scroll4*540},300);		
}
timer4 = setInterval(pic_gun4,2000);

var scroll5 = 0;
$(".p_quan5 span").hover(function(){
	clearInterval(timer5);
	scroll5 = $(this).index();
	$(this).addClass("span5").siblings().removeClass("span5");
	$(".p_scroll5 ul").animate({left:-scroll5*540},300);	
},function(){
	timer5 = setInterval(pic_gun5,2000);	
});
var timer5 = null;
function pic_gun5(){
	scroll5++;
	if(scroll5>2){
		scroll5 = 0;
	}
	$(".p_quan5 span").eq(scroll5).addClass("span5").siblings().removeClass("span5");
	$(".p_scroll5 ul").animate({left:-scroll5*540},300);		
}
timer5 = setInterval(pic_gun5,2000);

var scroll6 = 0;
$(".p_quan6 span").hover(function(){
	clearInterval(timer6);
	scroll6 = $(this).index();
	$(this).addClass("span6").siblings().removeClass("span6");
	$(".p_scroll6 ul").animate({left:-scroll6*540},300);	
},function(){
	timer6 = setInterval(pic_gun6,2000);	
});
var timer6 = null;
function pic_gun6(){
	scroll6++;
	if(scroll6>2){
		scroll6 = 0;
	}
	$(".p_quan6 span").eq(scroll6).addClass("span6").siblings().removeClass("span6");
	$(".p_scroll6 ul").animate({left:-scroll6*540},300);		
}
timer6 = setInterval(pic_gun6,2000);

var scroll7 = 0;
$(".p_quan7 span").hover(function(){
	clearInterval(timer7);
	scroll7 = $(this).index();
	$(this).addClass("span7").siblings().removeClass("span7");
	$(".p_scroll7 ul").animate({left:-scroll7*540},300);	
},function(){
	timer7 = setInterval(pic_gun7,2000);	
});
var timer7 = null;
function pic_gun7(){
	scroll7++;
	if(scroll7>2){
		scroll7 = 0;
	}
	$(".p_quan7 span").eq(scroll7).addClass("span7").siblings().removeClass("span7");
	$(".p_scroll7 ul").animate({left:-scroll7*540},300);		
}
timer7 = setInterval(pic_gun7,2000);

var scroll8 = 0;
$(".p_quan8 span").hover(function(){
	clearInterval(timer8);
	scroll8 = $(this).index();
	$(this).addClass("span8").siblings().removeClass("span8");
	$(".p_scroll8 ul").animate({left:-scroll8*540},300);	
},function(){
	timer8 = setInterval(pic_gun8,2000);	
});
var timer8 = null;
function pic_gun8(){
	scroll8++;
	if(scroll8>2){
		scroll8 = 0;
	}
	$(".p_quan8 span").eq(scroll8).addClass("span8").siblings().removeClass("span8");
	$(".p_scroll8 ul").animate({left:-scroll8*540},300);		
}
timer8 = setInterval(pic_gun8,2000);

var scroll9 = 0;
$(".p_quan9 span").hover(function(){
	clearInterval(timer9);
	scroll9 = $(this).index();
	$(this).addClass("span9").siblings().removeClass("span9");
	$(".p_scroll9 ul").animate({left:-scroll9*540},300);	
},function(){
	timer9 = setInterval(pic_gun9,2000);	
});
var timer9 = null;
function pic_gun9(){
	scroll9++;
	if(scroll9>2){
		scroll9 = 0;
	}
	$(".p_quan9 span").eq(scroll9).addClass("span9").siblings().removeClass("span9");
	$(".p_scroll9 ul").animate({left:-scroll9*540},300);		
}
timer9 = setInterval(pic_gun9,2000);

var scroll10 = 0;
$(".p_quan10 span").hover(function(){
	clearInterval(timer10);
	scroll10 = $(this).index();
	$(this).addClass("span10").siblings().removeClass("span10");
	$(".p_scroll10 ul").animate({left:-scroll10*540},300);	
},function(){
	timer10 = setInterval(pic_gun10,2000);	
});
var timer10 = null;
function pic_gun10(){
	scroll10++;
	if(scroll10>2){
		scroll10 = 0;
	}
	$(".p_quan10 span").eq(scroll10).addClass("span10").siblings().removeClass("span10");
	$(".p_scroll10 ul").animate({left:-scroll10*540},300);		
}
timer10 = setInterval(pic_gun10,2000);

$("#slider").responsiveSlides({
		auto: true,
		pager: false,
		nav: true,
		speed: 500,
		timeout:4000,
		pager: true, 
		pauseControls: true,
		namespace: "callbacks"
	});
$(".nav_ul li").hover(function(){
	$(this).addClass("hover").siblings().removeClass("hover");	
	$(this).find(".hide").show();
},function(){
	$(this).removeClass("hover");	
	$(this).find(".hide").hide();
});	
var _Index = 0;
$(".products ul li").hover(function(){
	_Index = $(this).index();
	$(this).addClass("lihover").siblings().removeClass("lihover");	
	$(".p_pic").eq(_Index).show().siblings(".p_pic").hide();
},function(){});