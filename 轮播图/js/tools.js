let tools = {
	$: function (selector, isAll, parent) {
		parent = parent || document;
		if (isAll) {
			return parent.querySelectorAll(selector);
		}
		return parent.querySelector(selector);
	},

	 getStyle: function (obj, attr) {
	 		return getComputedStyle(obj, false)[attr];
	 },
	//运动函数
	move2: function (obj, attr, end, fn) {
		let start = parseInt(this.getStyle(obj, attr));
		clearInterval(obj.timer);

		obj.timer = setInterval(function () {
			let distance = end - start;
			let speed = distance > 0 ? Math.ceil(distance / 10) : Math.floor(distance / 10);
			start += speed;
			obj.style[attr] = start + "px";
			if (start === end) {
				clearInterval(obj.timer);
				fn && fn();
			}
		}, 20);

	},
};