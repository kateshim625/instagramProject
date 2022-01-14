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

const postContents = document.querySelector(".postContents");

const postBefore = document.querySelector(".postBefore");
const postNext = document.querySelector(".postNext");

addButton.addEventListener('click', onSubmit);
// addButton.addEventListener('keyDown', function() {
//     if(e.keyCode == 13) {
        
//     }
// });


// postContents.forEach(id => {
//     if(id.innerHTML.length > 10) {
//         const postContent = id.innerHTML;
//         id.innerHTML = postContent.slice(0, 8)+'...';
//     }
// })

const friendStroyBar = document.querySelector(".friendStroyBar");
const prevBtn = document.getElementById("storyMB");
const nextBtn = document.getElementById("storyMN");

const storyBefore = document.querySelector(".before");
const storyNext = document.querySelector(".next");


prevBtn.onclick = function () {
    const scrollL = document.getElementById('friendStroyBar').scrollLeft -= 340;
    console.log("45 scrollL : ", scrollL);
    // button show and hide
    if(scrollL == -340) {
        storyNext.style.display = "block";
        storyBefore.style.display = "none";
    } else {
        storyNext.style.display = "block"; 
    } 
};

nextBtn.onclick = function () {
    const scrollR = document.getElementById('friendStroyBar').scrollLeft += 340;
    console.log("58 scrollR : ", scrollR);

    // button show and hide
    if(scrollR == -340) {
        storyBefore.style.display = "none";
    } else if(scrollR == 776.5) {
        storyNext.style.display = "none"; 
    } else {
        storyBefore.style.display = "block";
        storyNext.style.display = "block"; 
    } 
};
// story button slide 참고: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
// 버튼 클릭시 이동 참고 https://velog.io/@dosilv/Instagram-Clone-Coding-Westagram-2#3



// button activate  

function onSubmit(e) {
    console.log("39 onSubmit E: ", e);
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
    heartIcon.classList.add('smallHeart');

    comments.appendChild(spanId);
    comments.appendChild(span);
    comments.appendChild(heartIcon);

    commentInput.value = '';

}

commentInput.addEventListener("input", (e) => {
    let inputValue = e.target.value;
    // console.log("67 inputValue: ", inputValue);
    if(inputValue.length > 0) {
        addButton.disabled = false;
        addButton.classList.remove('addSumitActive');
    } 
    if(inputValue.length === 0) {
        addButton.disabled = true;
        addButton.classList.add('addSumitActive');
    }
})


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

// liked button
const likedBtn = document.getElementById('likedBtn');
const peopleWliked = document.querySelector(".peopleWliked");
console.log("122 peopleWliked.innerHTML: ", peopleWliked.innerHTML);

let likedCount = peopleWliked.innerText;

// 출처: https://hianna.tistory.com/476 [어제 오늘 내일]

function liked(e) {
    if(likedBtn.classList.contains("far")) {
        likedBtn.classList.remove("far");
        likedBtn.classList.add("fas");
        likedCount = parseInt(likedCount) + 1;
        // 버튼클릭시 숫자 플러스 & 마이너스: https://hianna.tistory.com/476
    } else {
        likedBtn.classList.remove("fas");
        likedBtn.classList.add("far");
        likedCount = parseInt(likedCount) - 1;

    }
    peopleWliked.innerText = likedCount;
}


// var length = 5; // 표시할 글자수 기준
// if (postContents.length > length) {
//     postContents = postContents.substr(0, length-2) + '...';
// }


// 출처: https://pureainu.tistory.com/273 [L.E.T]

