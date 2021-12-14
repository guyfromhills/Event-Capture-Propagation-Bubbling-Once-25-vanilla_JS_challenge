


//selecting all divs
const divs = document.querySelectorAll("div");

//grabbing button
const button = document.querySelector("button");

function logText(e)
{

    // e.stopPropagation();
    console.log(this.classList.value);


    // console.log(this)

}


divs.forEach(function (div){
    div.addEventListener("click", logText, {
        capture: false,
        once: true
     })
})


//button should work only once
button.addEventListener("click", function(e) {
    console.log(e) ;
}, { 
    once : true
})


