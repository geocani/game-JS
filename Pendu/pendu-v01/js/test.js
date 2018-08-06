


let lettre = "";

$(document).keydown(function(e) {
    lettre = e.keyCode;
    

});

//     // console.log(lettre)


$('.a').click(()=>{
    lettre = "a"
    console.log(lettre)
})

$('.b').click(()=>{
    lettre = "b"
    console.log(lettre)
})

$('.c').click(()=>{
    lettre = "c"
    console.log(lettre)
})

$('.d').click(()=>{
    lettre = "d"
    console.log(lettre)
})
