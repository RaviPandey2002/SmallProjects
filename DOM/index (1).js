
// Basics of 4 pillars of DOM
// 1. Selecting an element
// 2. Changing the HTMl
// 3. Changing the CSS
// 4. Event Listening

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


let p1 = new Promise(function(res, rej) {

    return res("P1 is reutrned");

})



// let p2 = p1.then(function (data){
//     console.log(data);

//     return ( new Promise(function (res,rej){
//         res("P2 bhi reutrn ho gya")
//     }))

// })

// p2.then( function(parm){
//     console.log("parm = ", parm)
// }  )