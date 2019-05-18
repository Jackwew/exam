let tools = {
	$: function (selector, isAll, parent) {
		parent = parent || document;
		if (isAll) {
			return parent.querySelectorAll(selector);
		}
		return parent.querySelector(selector);
	},
	//设置样式
	setStyle: function (obj, attrJson) {
		for (let key in attrJson) {
			obj.style[key] = attrJson[key];
		}
	},
	//获取窗口大小
	getBodySize: function () {
		return {
			width: document.documentElement.clientWidth || document.body.clientWidth,
			height: document.documentElement.clientHeight || document.body.clientHeight
		};
	},
	// 元素居中
	showCenter: function (obj) {
		this.setStyle(obj, {
			display: 'block',
			position: 'absolute'
		});
		let _this = this;
		window.onresize = (function center() {
			let left = (_this.getBodySize().width - obj.offsetWidth) / 2 + "px";
			let top = (_this.getBodySize().height - obj.offsetHeight) / 2 + "px";
			_this.setStyle(obj, {left, top});
			return center;
		})();
	},
};