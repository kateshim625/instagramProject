// const ids = document.querySelectorAll(".story p");
// ids.forEach(id => {
//     if(id.innerHTML.length > 10) {
//         const longId = id.innerHTML;
//         id.innerHTML = longId.slice(0, 8)+'...';
//     }
// })

const comments = document.querySelector(".userCommentsList");
const addButton = document.querySelector(".addSubmit");

const commentInput = document.querySelector("#commentInput");
// const msg = document.querySelector("#mag");

addButton.addEventListener('click', onSubmit);
// addButton.addEventListener('keyDown', function() {
//     if(e.keyCode == 13) {
        
//     }
// });

function onSubmit(e) {
    console.log(e);
    e.preventDefault();

    // if(commentInput.value === '') {
    //     return
    // }
    // span tag id 추가
    const spanId = document.createElement('span');
    spanId.appendChild(document.createTextNode('Hyoung0987 '));
    // span tag comments input value
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(commentInput.value));
    span.classList.add('commentSpan');
    // i tag for like icone
    const heartIcon = document.createElement('i');
    heartIcon.classList.add('far');
    heartIcon.classList.add('fa-heart');

    comments.appendChild(spanId);
    comments.appendChild(span);
    comments.appendChild(heartIcon);

    commentInput.value = '';
      
}

let i = 0;
let j = 4;

const posts = document.querySelectorAll(".mainPics img video");
const dots = document.querySelectorAll(".dotsMoveColor span");

function postNextBtn() {
	document.getElementById("post" + (i + 1)).classList.remove("active");
	i = (j + i + 1) % j;
	document.getElementById("post" + (i + 1)).classList.add("active");
	indicator(i + 1);
}

function postBeforeBtn() {
	document.getElementById("post" + (i + 1)).classList.remove("active");
	i = (j + i - 1) % j;
	document.getElementById("post" + (i + 1)).classList.add("active");
	indicator(i + 1);
}

function indicator(num) {
	dots.forEach(function (dot) {
		dot.style.backgroundColor = "#a8a8a8";
	});
	document.querySelector(
		".dotsMoveColor span:nth-child(" + num + ")"
	).style.backgroundColor = "#0095f6";
}

const likedBtn = document.getElementById('likedBtn');
function liked() {
    if(likedBtn.classList.contains("far")) {
        likedBtn.classList.remove("far");
        likedBtn.classList.add("fas");
    } else {
        likedBtn.classList.remove("fas");
        likedBtn.classList.add("far");
    }
}
// commentInput.forEach(id => {
//     if(id.innerHTML.length > 10) {
//         const longId = id.innerHTML;
//         id.innerHTML = longId.slice(0, 8)+'...';
//     }
// })
