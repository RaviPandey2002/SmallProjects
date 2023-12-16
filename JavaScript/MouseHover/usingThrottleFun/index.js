const throttleFunction = (func, delay) => {
 
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

document.querySelector("#center")
.addEventListener("mousemove", throttleFunction((val)=>{

    var div = document.createElement('div')
    div.classList.add('imagediv')
    div.style.left = val.clientX + "px";
    div.style.top = val.clientY + "px";

    document.body.appendChild(div);

    var img = document.createElement("img")
    img.setAttribute("src","https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWVzfGVufDB8fDB8fHww" )

    div.appendChild(img);

    gsap.to(img,{
            y: "0",
            ease: Power3,
            duration: .6
        })

        gsap.to(img,{
            y: "100%",
            delay: .7,
            ease: Power2,
            duration: .8
        }
    
    )

    setTimeout(function(){
        div.remove()
    }, 1500)

}, 500)
)

