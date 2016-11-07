/**
 * @name 轮播图插件
 * @author wzp
 */
;(function( w, $, undefined){
	function Plugin( element ){
		this.element = element;
		this.$elem   = $(this.element);
		this.autoTimer();
		this.overOut();
		this.clickBtn();
		this.preNext();
	}
	Plugin.prototype = {
		index: 0,
		preNext: function(){
			var _this  = this;
			var length = this.$elem.find(".img-list li").length-1;
			$(".pre").on('click',function(){
				_this.index = _this.index > 0 ? --_this.index : length;
				_this.changeTo( _this.index ); 
			});
			$(".next").on('click',function(){
				_this.index = _this.index < length ? ++_this.index : 0;
				_this.changeTo( _this.index );
			})
		},
		overOut: function(){
			var _this   = this;
			var btnList = this.$elem.find('.img-list');
			this.$elem.on({ mouseover:function(){
				clearInterval(_this.autoChange);
			}, mouseout:function(){
				_this.autoTimer();
			}});

		},
		autoTimer: function(){
			var _this       = this;
			var length      = this.$elem.find(".img-list li").length-1;
			var btnList     = this.$elem.find('.img-list li');
			this.autoChange = setInterval(function(){
				_this.index = _this.index < length ? ++_this.index : 0;
				_this.changeTo( _this.index );
			},2000);
		},
		changeTo:function( num ){
			var oBtnItem    = this.$elem.find(".btn-list li");
			oBtnItem.removeClass('btn-item');
			oBtnItem.eq(num).addClass('btn-item');
			this.$elem.find(".img-list li").fadeOut().eq(num).fadeIn();
			//this.$elem.find(".img-list li").animate({opacity:0},1000).eq(num).animate({opacity:1000}, 1);
		},
		clickBtn:function(){
			var btnList     = this.$elem.find('.btn-list li');
			var _this       = this;
			btnList.on("click",function(){
				btnList.removeClass("btn-item");
				$(this).addClass("btn-item");
				_this.index = $(this).html()-1;
				_this.changeTo( _this.index );
			});
		}
	}
	$.fn.carousel = function(){
		this.each(function(){
			new Plugin(this);
		});
	}
})( window, jQuery)


$("#banner-1").carousel();
$("#banner-2").carousel();
