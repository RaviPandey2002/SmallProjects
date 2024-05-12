window.addEventListener("mousemove", function (val) {
  var rect = document.querySelector("#rect");
  var mappedValue = gsap.utils.mapRange(
    0,
    this.window.innerWidth,
    100 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (rect.getBoundingClientRect().width / 2 + 100),
    val.clientX
  );

  gsap.to("#rect", {
    left: mappedValue + "px",
    ease: Power3,
  });
  //----------------------------------Extra------------------------

    var container = document.querySelector(".container");
    if(val.clientX < 200 )
    {
      var imgdiv = document.createElement('img');
      imgdiv.setAttribute("src","https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWV8ZW58MHx8MHx8fDA%3D")

      container.appendChild(imgdiv)

    }
    else 
    {
      if(container.children.length > 0)container.removeChild(container.firstElementChild);
    }







});
