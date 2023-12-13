
// Basics of 4 pillars of DOM

var f=0;

// document.getElementsByClass/Id("NAME").
// We can also use textContent in place of innerHTML... The diff is textContent changes the properties
// of the data if is given in the form of tag it will convert it in text and then show it.
// eg. document.querySelector("h1").textContent="<h1>abc</h1>" ===> <h1>abc</h1> insted of abc.
const a = document.querySelector("#btn");
a.addEventListener("click",()=>{
    if(f==0){
        document.querySelector(".shape").style.backgroundColor="yellow";
        a.innerHTML="OFF";
        f=1;
    }
    else
    {
        document.querySelector(".shape").style.backgroundColor="black";
        a.innerHTML="ON";
        f=0;
    }

})

// Multiple querry selection
const h = document.querySelectorAll("h1");
h.forEach((e) => {
    console.log(e)
    console.log(e.innerHTML)

});

