let wrap = document.querySelector(".wrap");
let next = document.querySelector(".arrow_right");
let prev = document.querySelector(".arrow_left");


//绑定下一张按钮
next.onclick = function () {
    next_pic ()
};
//绑定上一张按钮
prev.onclick = function () {

    setTimeout(function () {
        prev_pic();
    },1)
};
//下一张按钮函数
function next_pic () {
    index++;
    if(index > 4){
        index = 0;
    } else if(index > 4){index = 0}
    
    let newTop;
    if(wrap.style.top === "-3000px"){
        wrap.style.top = -500 + 'px';
        newTop = -1000;
        console.log(newTop);
    }else{
        newTop = parseInt(wrap.style.top) - 500;
        console.log(parseInt(wrap.style.top));
    };
        tools.move2(wrap,'top',newTop);
        wrap.style.top = newTop + 'px';
        showCurrentDot();//下标切换函数
}
//上一张函数
function prev_pic () {
    index--;
    if(index < 0){
        index = 4;
    }else if(index === 4){index = 0;}
    showCurrentDot();
    let newTop;
    if(wrap.style.top === "0px"){
        wrap.style.top = -2500 + 'px';
        newTop = -2000;
    }else{
        newTop = parseInt(wrap.style.top) + 500;
        console.log(newTop);
    }
    tools.move2(wrap,'top',newTop);
    wrap.style.top = newTop + "px";
    console.log(newTop);
}
// //自动播放函数
let timer = null;
    function autoPlay () {
        clearInterval(timer);
        timer = setInterval(function () {
            next_pic();
        },2000);
    }
    autoPlay();

    let container = document.querySelector(".container");
    container.onmouseenter = function () {
        clearInterval(timer);
        console.log('进入');
    };
    container.onmouseleave = function () {
        autoPlay();
};
    //下标切换
    let index = 0;
    let dots = document.getElementsByTagName("span");
    function showCurrentDot () {
        for(let i = 0, len = dots.length; i < len; i++){
            dots[i].className = "";
        }
    dots[index].className = "on";
    }
    for (let i = 0, len = dots.length; i < len; i++){
        (function(i){
            dots[i].onclick = function () {
                let dis = index - i;
                wrap.style.left = (parseInt(wrap.style.left) +  dis * 850)+"px";
                index = i;
                showCurrentDot();
            }
        })(i);
}