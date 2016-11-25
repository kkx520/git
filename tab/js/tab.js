/**
 * @name tabs插件
 * @author wzp 
 */

;(function( w, $, undefined){
	//默认配置
	var defaults = { events: 'click' }
	 
	//定义插件
	function Plugin( element, options){
		//将tab赋给tab插件的属性
		this.element = element;
		//将tab的jq对象赋给$elem
		this.$elem   = $(this.element);
		this.options = $.extend({},defaults,options);
		this.init();
	}

	//定义插件原型方法
	Plugin.prototype = {
		init: function(){
			var btns       = this.$elem.find('.tab-btn-menu .btn');
			var panels     = this.$elem.find('.tab-panel-menu li');
			btns.on(this.options.events,function(){
				var  index = $(this).index();
				var mythis = $(this);
				btns.removeClass("active");
				$(this).addClass("active");
				panels.removeClass("db");
				$(panels[mythis.index()]).addClass('db');
			});
		}
	}

	//调用插件
	$.fn.tabs = function ( options ){
		console.log(this);
		return this.each(function(){
			new Plugin( this, options);
		});
	}

})( window, jQuery);


$("#tabs1").tabs({events:"mouseover"});
$("#tabs2").tabs();

