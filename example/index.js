import Touchkit from '../src/index';

let w = $(window).width();

$('.item').css({
    width:w+'px',
    height:(w+100)+'px',
});

let Tk = new Touchkit({
    el:'.js-par',
});
Tk.background({
    image:'./images/p2.jpg',
    type:'crop',
});
Tk.add({
    image:`images/ear.png`,
    width:'100px',
    use:{
        drag:true,
        pinch:true,
        rotate:true,
        singlePinch:true,
        singleRotate:true,
    },
    limit:true,
    pos:{
        x:116,
        y:45,
        scale:1.25,
        rotate:2.63,
    },
    close:true,
});

Tk.add({
    image:`images/neck.png`,
    width:100,
    use:{
        drag:true,
        pinch:true,
        rotate:true,
        singlePinch:true,
        singleRotate:true,
    },
    limit:true,
    pos:{
        x:0,
        y:0,
        scale:1,
        rotate:0,
    },
    close:true,
});
// Tk.freeze(true);

$('.js-btn').on('click',function(){
    Tk.exportImage(b64=>{
        $('.js-result').attr('src',b64);
    });
});
$('.Button').on('touchstart',function(){
    $(this).addClass('taped');
});
$('.Button').on('touchend',function(){
    $(this).removeClass('taped');
});