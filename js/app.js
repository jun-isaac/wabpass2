
// 메뉴 슬라이드
$(function () {
	$('.depth1 > li').hover(
		function () {
			$(this)
				.find('.depth2')
				.stop()
				.slideDown();
		},
		function () {
			$(this)
				.find('.depth2')
				.stop()
				.slideUp();
		}
	)
})


// 이미지 슬라이드
$(function () {
	$('.slider > ul > li')
		.eq(0)
		.siblings()
		.css({left: '-1200px'})

	let slideImg = 0;
	setInterval(function () {
		if (slideImg < 2) {
			slideImg++;
		} else {
			slideImg = 0;
		}
		$('.slider > ul > li')
			.eq(slideImg)
			.siblings()
			.animate({left: '-1200px'},100),
			$('.slider > ul > li')
			.eq(slideImg)
			.animate({left: '0px'},100)
		console.log(slideImg)
	}, 3000)
})



// notice 버튼 클릭 시
$(function () {
	$('.notice-btn').click(
		function () {
			$('.notice')
				.addClass('on')
			$('.notice-btn')
				.addClass('on')
			$('.gallery')
				.removeClass('on')
			$('.gallery-btn')
				.removeClass('on')
		}
	)
})

// gallery 버튼 클릭 시
$(function () {
	$('.gallery-btn').click(
		function () {
			$('.gallery')
				.addClass('on')
			$('.gallery-btn')
				.addClass('on')
			$('.notice')
				.removeClass('on')
			$('.notice-btn')
				.removeClass('on')
		}
	)
})



// modal 버튼 클릭 시
$(function () {
	$('.click-modal').click(
		function () {
			$('.modal')
				.addClass('on')
		}
	)
})


// 닫기 버튼 클릭 시
$(function () {
	$('.close').click(
		function () {
			$('.modal')
				.removeClass('on')
		}
	)
})