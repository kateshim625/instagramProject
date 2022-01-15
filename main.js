const comments = document.querySelector(".userCommentsList");
const addButton = document.querySelector(".addSubmit");

const commentInput = document.querySelector("#commentInput");

const postContents = document.querySelector(".postContents");

const postBefore = document.querySelector(".postBefore");
const postNext = document.querySelector(".postNext");
const commentCount = document.querySelector(".commentCount");
const viewAllComments = document.querySelector(".viewAllComments");

addButton.addEventListener('click', onSubmit);

// button activate  
let viewCommentCount = commentCount.innerText;

function onSubmit(e) {
    console.log("39 onSubmit E: ", e);
    e.preventDefault();

    // if(commentInput.value === '') {
    //     return
    // }
    // span tag id 추가
    const aId = document.createElement('a');
    aId.appendChild(document.createTextNode('Hyoung0987 '));
    aId.classList.add('boldStyle');
    aId.classList.add('noUnderlineColor');

    // span tag comments input value
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(commentInput.value));
    span.classList.add('commentSpan');

    // i tag for like icone
    const heartIcon = document.createElement('i');
    heartIcon.classList.add('far');
    heartIcon.classList.add('fa-heart');
    heartIcon.classList.add('smallHeart');

    comments.appendChild(aId);
    comments.appendChild(span);
    comments.appendChild(heartIcon);

    commentInput.value = '';
    addButton.disabled = true;
    addButton.classList.add('addSumitActive');

    // all view active
    viewAllComments.style.display = "block";
    // view count start
    viewCommentCount = parseInt(viewCommentCount) + 1;
    // view count show
    commentCount.innerHTML = viewCommentCount;
}


// comment input box post button
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

// search butten 처리
const searchBarInput = document.querySelector(".searchBarInput");
const clearBtn = document.querySelector(".searchClear");
const faSearch = document.querySelector(".searchIconHide");

searchBarInput.addEventListener("focusin", (e) => {
    // e.target.style.border = "1px solid #262626";
    clearBtn.style.display = "block";
    faSearch.classList.remove("fa-search");

})
searchBarInput.addEventListener("focusout", (e) => {
    // e.target.style.border = "1px solid #dbdbdb";
    clearBtn.style.display = "none";
    faSearch.classList.add("fa-search");

})    



// post contents more butten click
const moreArticleBtn = document.querySelector(".feed__article-more-button");
//opening an article with more button
const openArticle = () => {
    const article = document.getElementById('article')
    article.classList.add('open')
    moreArticleBtn.classList.add('open')
  }
  
  //more button event listener
  moreArticleBtn.addEventListener('click', openArticle)
  
// ... 출처: https://pureainu.tistory.com/273 [L.E.T]

