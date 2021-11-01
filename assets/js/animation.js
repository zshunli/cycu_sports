//輪播圖
let img_box = document.querySelector('.img_box');
let imgs = document.querySelectorAll('img');
let sel_box = document.querySelector('.sel_box')
let lis = sel_box.querySelectorAll('li');
let left_btn = document.querySelector('.left_btn');
let right_btn = document.querySelector('.right_btn');
let index = 0;  
let timer = null;
let imgContainerW = img_box.offsetWidth;
img_box.style.width = imgContainerW * imgs.length + 'px';
img_box.style.left = 0 + 'px';

lis[0].className = 'cur'
function swapImg() {
    img_box.style.left = -index * imgContainerW + 'px';
    for (let i = 0; i < lis.length; i++) {
        lis[i].className = '';
    }
    lis[index].className = 'cur'
}
function swapFormat() {
    index++;
    if (index >= 5) {
        index = 5;  
        img_box.style.transition = 'all, linear, 1s';
        img_box.style.left = -index * imgContainerW + 'px';
        for (let i = 0; i < lis.length; i++) {
            lis[i].className = '';
        }
        lis[0].className = 'cur'
    
        setTimeout(function() {
            index = 0;
            img_box.style.transition = '';
            swapImg();
        }, 1500)
    
    } else {
        img_box.style.transition = 'all, linear, 1.5s';
        swapImg();
    }
}
timer = setInterval(swapFormat, 3000)
right_btn.addEventListener('click', function() {
    swapFormat();
})
left_btn.addEventListener('click', function() {
    index--;
    if (index < 0) {
        index = -1
        img_box.style.transition = 'all, linear, 1.5s';
        img_box.style.left = -index * imgContainerW + 'px';
        for (let i = 0; i < lis.length; i++) {
            lis[i].className = '';
        }
        lis[4].className = 'cur'
    
        setTimeout(function() {
            index = 4
            img_box.style.transition = '';
            swapImg();
        }, 1000)
    
    } else {
        img_box.style.transition = 'all, linear, 1.5s';
        swapImg();
    }
})
img_box.addEventListener('mouseover', function() {
    clearInterval(timer)
})

right_btn.addEventListener('mouseover', function() {
    clearInterval(timer)
})

left_btn.addEventListener('mouseover', function() {
    clearInterval(timer)
})

img_box.addEventListener('mouseout', function() {
    timer = setInterval(swapFormat, 3000)
})

left_btn.addEventListener('mouseout', function() {
    timer = setInterval(swapFormat, 3000)
})

right_btn.addEventListener('mouseout', function() {
    timer = setInterval(swapFormat, 3000)
})

//體育館樓層窗格
function get_num(num){
	document.getElementById('img').src="assets/images/"+num+".jpg";	
}
function toggle_visibility(id) 
{	
   	var ids = ["2F", "1F", "-1F"];
    for(var i = 0; i < ids.length; i++) {
        if(ids[i] != id)
        document.getElementById(ids[i]).style.display = "none";
        }
    document.getElementById(id).style.display = "block";
}