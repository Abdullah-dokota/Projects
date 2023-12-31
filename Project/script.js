const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstPageAnim() {
    var tl=gsap.timeline();
    tl.from("#nav", {
        y:'-10',
        duration: 1.5,
        opacity:0,
        ease: Expo.easeInOut
    })
        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            stagger: .2,
            delay :-1,  
        })
        .from("#mainfooter", {
            y: -10,
            opacity:0,
            duration: 1.5,
            delay :-1,
            ease: Expo.easeInOut
        })
}
var timeout;
function circlechaptakaro(){
    var xscale =1;
    var yscale =1;
    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove",function(dets){
        this.clearTimeout(timeout);

        var xfinalscale=gsap.utils.clamp(.8,1.2,dets.clientX - xprev);
        var yfinalscale=gsap.utils.clamp(.8,1.2,dets.clientY - yprev);
        
        xprev=dets.clientX;
        yprev=dets.clientY;

        circlemousefollower(xfinalscale, yfinalscale);

        timeout= this.setTimeout(function(){

            document.querySelector("#minicircle").style.transform= `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1) `;
        },100);
    });
 
}
function circlemousefollower(xfinalscale,yfinalscale) {
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform= `translate(${dets.clientX}px,${dets.clientY}px) scale(${xfinalscale},${yfinalscale}) `;
    })
}
circlechaptakaro();
circlemousefollower();
firstPageAnim();


document.querySelectorAll(".elem").forEach(function (elem) {
    var diffrot= 0;
    var rotate=0;
    elem.addEventListener("mouseleave", function (details) {
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease: Power3,
            duration:.5,
        })
         
    });
});
document.querySelectorAll(".elem").forEach(function (elem) {
    var diffrot= 0;
    var rotate=0;
    elem.addEventListener("mousemove", function (details) {
        var diff = details.clientY - elem.getBoundingClientRect().top;
        diffrot = details.clientX - rotate;
        rotate = details.clientX;
        

        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease: Power3,
            top: diff,
            left: details.clientX,
            rotate : gsap.utils.clamp(-20, 20, diffrot* .8)

        })
         
    });
});