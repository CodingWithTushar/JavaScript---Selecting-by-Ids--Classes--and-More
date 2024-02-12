console.log("Hello")

/*let boxes = document.getElementsByClassName("box")

console.log(boxes)

boxes[2].style.backgroundColor = "red";

document.getElementById("red").style.backgroundColor = "red";*/

//document.querySelector(".box").style.backgroundColor = "green";

/*console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e => {
    ///console.log(e)
    e.style.backgroundColor = "green";
});*/

//document.getElementsByTagName("div")

e = document.getElementsByTagName("div")

e[2].matches("#red")

e[2].closest(".container")

document.querySelector(".container").contains(e[2])

document.querySelector(".container").contains(document.querySelector("body"))

document.querySelector("body").contains(document.querySelector(".container"))

