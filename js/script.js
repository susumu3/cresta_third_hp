$(function(){
  var imgHeight = $('.kv-wrapper').outerHeight();
  var bgHeight = $('.fv').outerHeight();

  $('.burger-btn').on('click', function(){
    if($(window).scrollTop() < imgHeight -50){
      $('.bar').toggleClass('cross');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }else{
      $(this).toggleClass('black');
      $('.bar').toggleClass('cross');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  });

  $(window).on('load scroll', function(){
    if($(window).scrollTop() < imgHeight -50) {
      $('.site-title').removeClass('black');
    }else{
      $('.site-title').addClass('black');
    }

    if($(window).scrollTop() < bgHeight -50){
      $('.burger-btn').removeClass('black');
    }else{
      $('.burger-btn').addClass('black');
    }
  });

  $('.nav-item').on('click', function(){
    if($(window).scrollTop() < bgHeight -50){
      $('.bar').toggleClass('cross');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }else{
      $(this).addClass('black');
      $('.bar').toggleClass('cross');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  });


  
});

$(function() {
	/* 「同意する」チェックイベント */
	$('[type="checkbox"]').on('click', function(){
		if($('[type="checkbox"]').prop("checked")){
			$('[type="submit"]').css('background-color', '#000');
		} else {
			$('[type="submit"]').css('background-color', 'rgb(102, 102, 102)');
		}
	});

	/* 「同意する」がチェックされていない場合submit=false */
	$('[type="submit"]').on('click', function(){
		if ($('[type="submit"]').css('background-color') == 'rgb(102, 102, 102)') {
			return false;
		}
	});
});