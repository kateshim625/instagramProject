
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
        likedBtn.classList.toggle("pop");

        // 버튼클릭시 숫자 플러스 & 마이너스: https://hianna.tistory.com/476
    } else {
        likedBtn.classList.remove("fas");
        likedBtn.classList.add("far");
        likedCount = parseInt(likedCount) - 1;
        likedBtn.classList.remove("pop");
    }
    peopleWliked.innerText = likedCount;

}