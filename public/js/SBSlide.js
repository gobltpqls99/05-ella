/**
 * 프로그램 세팅값 - obj 인자값
    obj = {
    container = '#SBSlide',
    stageDefault = 4, //스테이지에 보여질 개수 기준값(pc)
    moveCnt = 1,	// 한번에 움직여지는 슬라이드 개수
    speed = 300,
}
 * */
function SBSlide(obj) {
	this.$container = $(obj.container || '#SB-slide');
	this.$stage = this.$container.find('.slide-stage');
	this.$wrapper = this.$container.find('.slide-wrapper');
	this.$slide = this.$container.find('.slide');
	this.$BtPrev = this.$container.find('.bt-prev');
	this.$BtNext = this.$container.find('.bt-next');
	this.$pagerWrapper = this.$container.find('.pager-wrapper');
	for (var i = 0; i < this.$slide.length; i++)
		$('<i class="pager"></i>').appendTo(this.$pagerWrapper);
	this.$pager = this.$container.find('.pager');

	this.speed = obj.speed || 300;
	this.stageDefault = obj.stageDefault ||
	this.

	this.slideCnt = this.$slide.length; // 슬라이드의 총 개수 length
	this.slideLast = this.slideCnt - 1; // 슬라이드의 마지막 index 
	this.slideWid; // 슬라이드의 width
	this.stageView; // 스테이지에 보여질 개수의 반응형에 따른 변하는 값
	this.now = 0;
	this.direction = 1; // 1: 오른쪽으로 이동 Prev //-1: 왼쪽으로 이동 Next
	this.target; // Animation($wrapper) 될 left 값

	this.$BtNext.click(this.onNext);
	this.$BtPrev.click(this.onPrev);

	$(window).resize(onResize).trigger("resize");

	return this;
}

SBSlide.prototype.onPrev = function(e) {

}
SBSlide.prototype.onNext = function(e) {
	
}
SBSlide.prototype.onResize = function(e) {
	var wid = $(window).width();  // 브라우저의 width
	this.stageView = this.stageDefault;
	if(wid < 576) this.stageView = 1;
	else if(wid < 768) this.stageView = this.stageDefault < 2 ? this.stageDefault : 2;
	else if(wid < 992) this.stageView = this.stageDefault < 2 ? this.stageDefault : 3;
	else if(wid < 1200) this.stageView = this.stageDefault < 2 ? this.stageDefault : 4;
	slideWid = 100 / this.stageView;
	console.log(this.stageView, this.slideWid);
	init();
}

SBSlide.prototype.init = function init() {
	this.$wrapper.empty().css("left",0);
	this.$pagerWrapper.find('.pager').removeClass('active').eq(this.now).addClass('active');
	this.$slide.eq(this.now).clone().appendTo(this.$wrapper).css("width", this.slideWid+"%"); //appendTo wrapper에 붙이기
	for(var i=0, my, prev=this.now; i<this.stageView; i++) {
		prev = my = (prev == 0) ? this.slideLast : prev - 1;
		this.$slide.eq(my).clone().prependTo($wrapper).css("width", this.slideWid+"%");
	}
	for(var i=0, my, prev=this.now; i<this.stageView*2-1; i++) {
		prev = my = (prev == this.slideLast) ? 0 : prev + 1;
		this.$slide.eq(my).clone().appendTo(this.$wrapper).css("width", this.slideWid+"%");
	}
}


