const friendStroyBar = document.querySelector(".friendStroyBar");
const prevBtn = document.getElementById("storyMB");
const nextBtn = document.getElementById("storyMN");

const storyBefore = document.querySelector(".before");
const storyNext = document.querySelector(".next");

const SlickData = [
    {
      id: 1,
      skills: "Hyong0987"
    },
    {
      id: 2,
      skills: "anyoung123"
    },
    {
      id: 3,
      skills: "insta567"
    },
    {
      id: 4,
      skills: "instgram0173"
    },
    {
      id: 5,
      skills: "wonderful5302"
    },
    {
      id: 6,
      skills: "german1111"
    },
    {
      id: 7,
      skills: "unitedStates1111"
    },
    {
      id: 8,
      skills: "austraila1111"
    },
    {
      id: 9,
      skills: "unitedKingdom1111"
    }
  ];

prevBtn.onclick = function () {
    const scrollL = document.getElementById('friendStroyBar').scrollLeft -= 340;
    console.log("45 scrollL : ", scrollL);
    // button show and hide
    if(scrollL == -104) {
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
    if(scrollR == -104) {
        storyBefore.style.display = "none";
    } else if(scrollR == 1020) {
        storyNext.style.display = "none"; 
    } else {
        storyBefore.style.display = "block";
        storyNext.style.display = "block"; 
    } 
};
// story button slide 참고: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
// 버튼 클릭시 이동 참고 https://velog.io/@dosilv/Instagram-Clone-Coding-Westagram-2#3

