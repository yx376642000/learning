/*检测类型*/
function type(target){
	var templete = {
		"[object Array]" : 'Array',
		"[object Object]" : 'Object',
		"[object Number]" : 'Number object',
		"[object String]" : 'String object',
		"[object Boolean]" : 'Boolean object'
	};
	var type = typeof(target);
	if( target === null){
		return 'null';
	};
	if( type == 'object'){
		var str = Object.prototype.toString.call(target);
		return templete[str];
	}else{
		return type;
	};
};
/* 数组原型编程去重 */
Array.prototype.unique = function(){
	var temp = {},
		arr = [],
		len = this.length;
	for(var i = 0 ; i < len ; i++){
		if(!temp[this[i]]){
			temp[this[i]] = 'anything';
			arr.push(this[i]);
		};
	};
	return arr ;
};
/*深度克隆*/
function deepClone(target , result){
	var result = result || {};
	//利用对象原型上的toString方法判断是否为引用值
	var toStr = Object.prototype.toString;
	//遍历对象
	for(var prop in target){
		//判断是否为对象上自己的属性值
		if(target.hasOwnProperty(prop)){
			//判断属性值是否为null或者引用属性
			if(target[prop] != null && typeof(target[prop]) == 'object' ){
				//判断是数组还是对象
				result[prop] = toStr.call(target[prop]) == '[object Array]' ? [] : {};
				deepClone(target[prop] , result[prop]);
			} else {
				result[prop] = target[prop];
			};
		};
	};
	return result;
};
/*insertAfter 在元素后面插入元素*/
Element.prototype.insertAfter = function ( targetNode , afterNode) {
	var beforeNode = afterNode.nextElementSibling;
	if( beforeNode == null ){
		this.appendChild(targetNode);
	} else {
		this.insertBefore( targetNode , beforeNode);
	}
};
//截取参数
function GetQueryString(name) {  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
    var r = window.location.search.substr(1).match(reg);
    var context = "";  
    if (r != null)  
        context = r[2];  
    reg = null;  
    r = null;  
    return context == null || context == "" || context == "undefined" ? "" : context;  
};
/*
	查看滚动条滚动距离
	window.pageYoffset	document.body.scrollTop	 +	document.documentElement.scrollTop
	window.pageXoffset	document.body.scrollLeft +	document.documentElement.scrollLeft

*/
function getScrollOffset(){
	if(window.pageXOffset){
		return{
			x : window.pageXOffset,
			y : window.pageYOffset
		}
	}else{
		return{
			x : document.body.scrollLeft + document.documentElement.scrollLeft,
			y : document.body.scrollTop + document.documentElement.scrollTop
		}
	}
};
//兼容绑定函数
function addEvent(ele,type,func){
	if(ele.addEventListener){
		ele.addEventListener(type,func,false);
	}else if(ele.attachEvent){
		ele.attachEvent("on" + type,function(){
			func.call(ele);
		})
	}else{
		ele["on" + type] = func;
	}
};
//阻止冒泡
function stopBuble(e){
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBuble = true;
	}
}
//阻止默认事件
function cancelHandle(e){
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
}


function setCookie(name,value){
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}
function delCookie(name){
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null)
	document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

// 懒惰加载
// 注意: 需要引入jQuery和underscore  https://cdn.bootcss.com/underscore.js/1.9.0/underscore-min.js
$(function() {
    // 获取window的引用:
    var $window = $(window);
    // 获取包含data-src属性的img，并以jQuery对象存入数组:
    var lazyImgs = _.map($('img[data-url]').get(), function (i) {
        return $(i);
    });
    // 定义事件函数:
    var onScroll = function() {
        // 获取页面滚动的高度:
        var wtop = $window.scrollTop();
        // 判断是否还有未加载的img:
        if (lazyImgs.length > 0) {
            // 获取可视区域高度:
            var wheight = $window.height();
            // 存放待删除的索引:
            var loadedIndex = [];
            // 循环处理数组的每个img元素:
            _.each(lazyImgs, function ($i, index) {
                // 判断是否在可视范围内:
                if ($i.offset().top - wtop < wheight) {
                    // 设置src属性:
                    $i.attr('src', $i.attr('data-url'));
                    // 添加到待删除数组:
                    loadedIndex.unshift(index);
                }
            });
            // 删除已处理的对象:
            _.each(loadedIndex, function (index) {
                lazyImgs.splice(index, 1);
            });
        }
    };
    // 绑定事件:
    $window.scroll(onScroll);
    // 手动触发一次:
    onScroll();
})
