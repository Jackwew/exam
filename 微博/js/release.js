class Release {
    constructor (){
        this.release = tools.$('#Release');//发布按钮
        this.revoke = tools.$('#Revoke');//撤回按钮
        this.content = tools.$('#content');
        this.model = tools.$('.model');
        this.releasebtn = this.content.querySelector('#Release-btn');//发布按钮
        this.theme = this.content.querySelector('#theme');
        this.essay = this.content.querySelector('#essay');
        this.addCont = tools.$('#addCont');
        console.log(this.releasebtn);
        this.n = 0;
        this.init();


    }
    //初始化函数
    init () {
        this.bindEvent();

    }
    bindEvent () {
        //发布微博按钮
        this.release.onclick = () => {
            this.onRelease();
        };
        //发布内容按钮
        this.releasebtn.onclick = () =>{
            this.onreleaseBtn();
        };
        this.revoke.onclick = () =>{
            this.onBack();
        }
    }

    //弹框
    onRelease(){
        this.model.classList.add('ac');
        this.content.classList.add('ac');
        //将弹框居中
        tools.showCenter(this.content);
        this.ondel = this.content.querySelector('#delBtn')//删除按钮
        new Drag(this.content,'#title')//拖拽功能
        this.onDel();//删除函数

    };
    //发布消息
    onreleaseBtn () {
        this.model.classList.remove('ac');
        this.content.style.display = 'none';
        console.log(this.content);
        this.releaseBtn();//发布内容函数
        this.timer();
        this.rightBtn();

    }
    //删除按钮
    onDel () {
        this.ondel.onclick = () =>{
            this.model.classList.remove('ac');
            this.content.style.display = 'none';
        }
    }
    //撤回函数
    onBack () {
        if (this.n < 120){
            // this.addCont.style.display = 'none';
            this.revoke.classList.add('rest')
            tools.$('#block').remove();
            console.log(tools.$('#block'))
        }else {
            alert("消息超过两分钟无法撤回");
            this.revoke.classList.add('rest')
        }
    }
    //鼠标右键
    rightBtn () {
        let block = this.addCont.querySelector('#block');
        block.oncontextmenu = (e) =>{
                this.revoke.style.left = e.clientX + "px";
                this.revoke.style.top = e.clientY +"px";
                this.revoke.className = '';

            return false
        }
    }
    timer () {
        setInterval( ()=> {
            console.log(++this.n)
        },1000)
    }
    //把内容写在页面上
    releaseBtn () {
        this.addCont.classList.add('ac');
        let theme = this.theme.value;//获取发表主题的value
        let essay = this.essay.value;//获取发表内容的value
        let date = new Date();//获取系统当前时间
        let year = date.getFullYear();//获取年
        let moth = date.getMonth() + 1;//获取月
        let today = date.getDate();//获取日
        let hours = date.getHours();//获取小时
        let minutes = date.getMinutes();//获取分钟
        let miao = date.getSeconds();//获取秒
        let div = document.createElement("div");
        div.className = 'block';
        //判断分这个值是否小于10，小于就加上一个0;
        div.setAttribute('id','block');
        if(minutes < 10){
            minutes = "0" + minutes
        }
        div.innerHTML = `
        <div id="username">发表主题：<span>${theme}</span></div>
            <div id="time">发布时间：<span>${year}年${moth}月${today}日${hours}:${minutes}:${miao}</span></div>
            <div id="nr">发布内容：<span>${essay}</span></div>
        `;
        this.addCont.insertBefore(div,this.addCont.childNodes[2]);

        //发布过后清空文本框
        this.theme.value = '';
        this.essay.value = '';
    };
}
new Release();