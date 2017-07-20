window.onload = function(){
	var lb = new Swiper('.swiper-container', {
			loop: true,
			autoplay: 2000,
			pagination: '.swiper-pagination',
			paginationClickable: true,
			effect: "fade",
			speed: 1000,
			autoplayDisableOnInteraction: false,
			prevButton: '.swiper-button-prev',
			nextButton: '.swiper-button-next'
		});
		var zy = new Swiper('.main2', {
			loop: true,
			autoplay: 5000,
			speed: 1000,
			autoplayDisableOnInteraction: false,
			prevButton: '.swiper-button-prev',
			nextButton: '.swiper-button-next'
		});
		$(".main3 div div div").hover(function() {
			$(this).css("box-shadow", "0px 10px 10px #ccc");
			$(this).css("margin-top", "9px");
		}, function() {
			$(this).css("box-shadow", "0px 0px #ccc");
			$(this).css("margin-top", "10px");
		})


		$(".show1 a").on('mouseover',function(){
			$(".show").css('display','block');
		})
		$(".show").on('mouseout',function(){
			$(".show").css('display','none');
		})
		
		
		$(".seach1").on('focus',function(){
			$(".seach1_1").css('display','none');
			$(".seach1_2").css('display','none');
		})
		$(".seach1").on('blur',function(){
			if ($(".seach1").val()=='') {
				$(".seach1_1").css('display','block');
				$(".seach1_2").css('display','block');
			}
		})
		
		$.each($(".cebian"), function(i) {
//			console.log($(".cebian")[i])
//			console.log($(".yincang")[i])
			$(".cebian li").on('mouseover',function(){
				console.log(1)
				$(".yincang li").css('display','block');
			})
		});
		
		$(".r_3").hover(function() {
		$(this).addClass("at")
	},function() {
		$(this).removeClass("at")
	})
		
}

		