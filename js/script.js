window.onload = function(){
		
	//---------------------------------------------------------------
	var btn = document.getElementById('back_top');
	var clientHeight = document.documentElement.clientHeight; //获取可见区域
	var timer=null;
	var isTop=true;
	//滚动事件 如果滚动高度大于可见区域，则显示回到顶部的按钮
	
	window.onscroll = function(){
		var Top = document.documentElement.scrollTop || document.body.scrollTop;//滚动的高度
	   
	    var men = document.getElementById('menu');

// 导航栏悬浮固定到顶部		
		var menu = document.getElementById('nav');
			
		if (Top>=125) {
			/*	nav.style.left="0"+'px';*/
				nav.style.position = "fixed";
				nav.style.top="0"+'px';
				nav.style.zIndex="1000";
				men.style.border = "none";
			}
		else{
				nav.style.position ="";
				men.style.border = "";
			}
//--------------------------------------------
		if (Top>=clientHeight) {
			btn.style.display = "block";
		}
		else{
			btn.style.display = "none";
		}
		
        if (!isTop)
		{
			clearInterval(timer);
		}
		isTop = false;  
	}
	
	// 点击事件，当点击按钮式回到页面顶部
	btn.onclick = function(){
		if(timer){
        clearInterval(timer);
    }		
		timer=setInterval(function(){
			var Top = document.documentElement.scrollTop || document.body.scrollTop;//滚动的高度
			var speed = Math.floor(-Top/10);
			document.documentElement.scrollTop =document.body.scrollTop=Top+speed;
			isTop=true;
			if(Top==0){
				clearInterval(timer);
				}
			},30);
		
     }

}









