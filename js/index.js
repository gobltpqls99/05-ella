/******************** 전역 선언 ********************/



/******************** 사용자 함수 ********************/



/******************** 이벤트 선언 ********************/
$('.top-wrapper .icon-down').click(onLangChg);//언어선택
$('.top-wrapper .bt-down').click(onLangSel);//언어선택


/******************** 이벤트 콜백 ********************/
function onLangChg(){
    $('.trans-wrapper').stop().slideToggle(200);
    $(".trans-wrapper .lang-sel").stop().slideUp(200);
}
function onLangSel(){
    $(".trans-wrapper .lang-sel").stop().slideUp(200);
    if($(this).next().css("display") === 'none') $(this).next().stop().slideDown();
}

