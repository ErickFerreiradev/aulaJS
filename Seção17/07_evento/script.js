let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")

btn1.addEventListener("mousedown", function(){
    console.log("clicou no botão")
})


btn1.addEventListener("mouseup", function(){
    console.log("soltou o botão")
})

btn2.addEventListener("dblclick", function(){
    console.log("Double click")
})

btn2.addEventListener("contextmenuh", function(e){
    e.preventDefault()
    console.log("Click direito")
})

