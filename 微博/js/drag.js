class Drag {
    constructor (obj,selector) {
        this.obj = obj;
        this.title = obj.querySelector(selector);
        this.move();
    }
    move () {
        this.title.onmousedown = (e) =>{
            let x = e.offsetX,y = e.offsetY;
            let maxWidth = tools.getBodySize().width - this.obj.offsetWidth,
                maxHeight = tools.getBodySize().height - this.obj.offsetHeight;
            document.body.onmousemove = (e) =>{
                let left = e.clientX - x,
                    top = e.clientY - y;
                if(left < 0){left = 0}else if(left >= maxWidth){left = maxWidth}
                if(top < 0){top = 0}else if(top >= maxHeight){top = maxHeight}
                tools.setStyle(this.obj,{
                    left : left + 'px',
                    top : top + 'px'
                });
                return false;
            }
        }
        this.title.onmouseup = () =>{
            document.body.onmousemove = null;
        }
    }
}