
var list=document.getElementsByClassName("imgs");
// var lis=document.getElementsByClassName("lis");
var ch_=document.getElementsByClassName("chang")[0];
console.log(ch_);
var timer=null;
var timer2=null;
var x=0;
function autoMove(){
    timer=setInterval(function(){
    x++;
    if(x>=list.length){
       x=0;
     }
     var start=ch_.scrollLeft;
     start+=step
     ch_.scrollLeft=start;
    var step=0;
    // var maxstep=20;
    // var start=ch_.scrollLeft;
    // console.log(start);
    // var end=list[0].offsetWidth*x;
    // console.log(end);
    // var everystep=(end-start)/maxstep;
    // console.log(everystep);
    // var timer2=setInterval(function(){
    //     step++;
    //     if(step>=3){
    //     step=0;
    //     clearInterval(timer2);
    //     }
    //     start+=step;
    //     ch_.scrollLeft=start;
    //     // console.log(ch_.scrollLeft);
    //     },15)
    },2000);
}
autoMove();

function adv_close() {
    document.getElementById('close').style.display = 'none';//关闭按钮
    document.getElementById('float').style.display = 'none';//关闭图片
}



