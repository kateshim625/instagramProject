// post slides event
let i = 0;
let j = 3;
const posts = document.querySelectorAll(".mainPics img video");
const dots = document.querySelectorAll(".dotsMoveColor span");

function postNextBtn() {
	document.getElementById("post" + (i + 1)).classList.remove("active");
	i = (j + i + 1) % j;
    console.log("107 i Next: ", i);
    document.getElementById("post" + (i + 1)).classList.add("active");
    // 아래 점 다음 색으로 넘기기
	indicator(i + 1);
  
    // button show and hide
    if(i === 0) {
        postBefore.style.display = "none";
    } else if(i === 2) {
        postNext.style.display = "none"; 
    } else {
        postBefore.style.display = "block";
        postNext.style.display = "block"; 
    } 
}

function postBeforeBtn() {
	document.getElementById("post" + (i + 1)).classList.remove("active");
	i = (j + i - 1) % j;
    console.log("107 i Befor: ", i);
	document.getElementById("post" + (i + 1)).classList.add("active");
	indicator(i + 1);

    // button show and hide
    if(i === 0) {
        postNext.style.display = "block";
        postBefore.style.display = "none";
    } else {
        postNext.style.display = "block"; 
    } 
}

function indicator(num) {
	dots.forEach(function (dot) {
		dot.style.backgroundColor = "#a8a8a8";
	});
	document.querySelector(
		".dotsMoveColor span:nth-child(" + num + ")"
	).style.backgroundColor = "#0095f6";
}