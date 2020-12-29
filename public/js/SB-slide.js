/**
 * 프로그램 세팅값*/
var container = '#mySlide';
var stageDefault = 4; //스테이지에 보여질 개수 기준값(pc)
var moveCnt = 1;	// 한번에 움직여지는 슬라이드 개수
var speed = 300;

/**
 * 전역변수 
 * */
var $container = $(container);
var $stage = $container.find('.slide-stage');
var $wrapper = $container.find('.slide-wrapper');
var $slide = $container.find('.slide');
var $BtPrev = $container.find('.bt-prev');
var $BtNext = $container.find('.bt-next');
var $pagerWrapper = $container.find('.pager-wrapper');
for(var i =0; i<$slide.length; i++ ) 
$('<i class="pager"></i>').appendTo($pagerWrapper);
var $pager = $container.find('.pager'); 

var slideCnt = $slide.length;	// 슬라이드의 총 개수 length
var slideLast = slideCnt - 1; // 슬라이드의 마지막 index 
var slideWid;	// 슬라이드의 width
var stageView;	// 스테이지에 보여질 개수의 반응형에 따른 변하는 값
var now = 0;
var direction = 1; // 1: 오른쪽으로 이동 Prev //-1: 왼쪽으로 이동 Next
var target; // Animation($wrapper) 될 left 값

/**
 * 사용자 함수
 * */
function init() {
	$wrapper.empty().css("left",0);
	$pagerWrapper.find('.pager').removeClass('active').eq(now).addClass('active');
	$slide.eq(now).clone().appendTo($wrapper).css("width", slideWid+"%"); //appendTo wrapper에 붙이기
	for(var i=0, my, prev=now; i<stageView; i++) {
		prev = my = (prev == 0) ? slideLast : prev - 1;
		$slide.eq(my).clone().prependTo($wrapper).css("width", slideWid+"%");
	}
	for(var i=0, my, prev=now; i<stageView*2-1; i++) {
		prev = my = (prev == slideLast) ? 0 : prev + 1;
		$slide.eq(my).clone().appendTo($wrapper).css("width", slideWid+"%");
	}
}

	function slideAni() {
		$wrapper.stop().animate({"left": target}, speed, init);
	}

/**
 * 이벤트 콜백 
 * */
function onResize() {
	var wid = $(this).width();  // 브라우저의 width
	stageView = stageDefault;
	if(wid < 576) stageView = 1;
	else if(wid < 768) stageView = stageDefault < 2 ? stageDefault : 2;
	else if(wid < 992) stageView = stageDefault < 2 ? stageDefault : 3;
	else if(wid < 1200) stageView = stageDefault < 2 ? stageDefault : 4;
	slideWid = 100 / stageView;
	console.log(stageView, slideWid);
	init();
}

function onPrev() {
	// direction = 1;
	target = slideWid * moveCnt + "%";
	now = now == slideLast ? 0 : now - 1
	slideAni();
}

function onNext() {
	// direction =-1;
	target = -slideWid * moveCnt + "%";
	now = now == slideLast ? 0 : now + 1
	slideAni();
}

function onPager() {
	var old = now;
	now = $(this).index();
	if(old > now) {
		target = '100%'
	//그림교체
	slideAni();
}
else if(old < now) {
	target='-100%'
	//그림교체
	slideAni();
	}
}

 /**
  * 이벤트 등록 
  * */
 $BtPrev.click(onPrev);
 $BtNext.click(onNext);
//  $pager.click(onPager);
 /*
  var i =0; i<slideCnt; i++ 
 var i in $slide
 */
 
 $(window).resize(onResize).trigger("resize");






