var center = document.querySelector("#center");
let X = center.getBoundingClientRect().left;
let Y = center.getBoundingClientRect().right;
let mid = (X+Y)/2;

center.addEventListener("mousemove",function(val){
    let pos = val.clientX;
    if( pos < mid)
    {
        let diffFromMid = mid - pos;
        let calDiff = gsap.utils.mapRange(0,(mid - X), 0 , 255,diffFromMid);
        center.style.backgroundColor= `rgb(${calDiff}, 0, 0)`;
    }

    else
    {
        let diffFromMid = pos - mid;
        let calDiff =gsap.utils.mapRange(0,(Y-mid), 0 , 255,diffFromMid);
        center.style.backgroundColor= `rgb(0, 0,${calDiff})`;
    }


})

center.addEventListener("mouseleave",function(){
    center.style.backgroundColor = "white"
})