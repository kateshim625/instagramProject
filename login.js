const loginID = document.getElementById("userId");
const showPassword = document.querySelector("#keyShow");
const loginPassword = document.getElementById("key");
const loginButton = document.getElementById("loginButton");
const loginIncorrect = document.querySelector(".incorrectInfo");
const loginPlaceHolder = document.querySelector(".idPwSpanAjustTyped");
const loginInputBox = document.querySelector(".idPwSpanAjust");
const loginInputBorder = document.querySelector(".pexuQ");



// const loginBorder = document.querySelector(".pexuQ");

const userID = "insta_clone";
const userPassword = "12345";

//button color active id ----------------------------
loginID.addEventListener("input", (e) => {
  let inputValue = e.target.value;
  // when type id button color active
  if (inputValue.length > 0 && loginPassword.value.length > 5) {
    loginButton.style.opacity = "1";

  }
  if (inputValue.length === 0 || loginPassword.value.length < 6) {
    loginButton.style.opacity = "0.3";
  }

  // when type into input show up
  if(inputValue.length === 0){
    loginPlaceHolder.style.display = "none"
    loginInputBorder.style.border = "1px solid #dbdbdb"
  } else {
    loginPlaceHolder.style.display = "block"
    loginInputBorder.style.border = "1px solid #262626"
  }

});
//이벤트리스 써서 .. 
//when type into input show up ----------------------------
loginPassword.addEventListener("input", (e) => {
    let passwordValue = e.target.value;
    //when type pw button color active
    if (loginID.value.length > 0 && passwordValue.length > 5) {
      loginButton.style.opacity = "1";
    }
    if (loginID.value.length === 0 || passwordValue.length < 6) {
      loginButton.style.opacity = "0.3";
    }
    // when type into input show up
    // passwordValue.length === 0
    //   ? (showPassword.style.display = "none")
    //   : (showPassword.style.display = "block");

    if(passwordValue.length === 0) {
      showPassword.style.display = "none"
      loginPlaceHolder.style.display = "none"
    } else {
      showPassword.style.display = "block"
      loginPlaceHolder.style.display = "block"
    }
  });

// pw show & hide -----------------------------------------
showPassword.addEventListener("click", (e) => {
    e.preventDefault();
    
    loginPassword.type !== "password"
      ? (loginPassword.type = "password")
      : (loginPassword.type = "text");
    
    loginPassword.type === "password"
      ? (showPassword.textContent = "Show") 
      : (showPassword.textContent = "Hide");
  });

  // Login -----------------------------------------
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      // user check
      loginID.value.toLowerCase() === userID.toLowerCase() &&
      loginPassword.value === userPassword
    ) {
      window.location = "main.html";
    } else {
      // incorrectInfo Alert
      loginIncorrect.style.display = "block";
    }
  });

// jQuery Version ---------------------------------
// $("#key").on("keyup", function(event) {
//     if (event.keyCode === 13) {
//       event.preventDefault();
//       $("#checkKey").triggerHandler("click");
//     } else {
//       if (this.value) {
//         $("#keyShow").css("display", "inline-block");
//       } else {
//         $("#keyShow").hide();
//       }
//     }
//   }).focus();
// // Show & Hide click event
//   $("#keyShow").on("click", function() {
//     if ($("#key").attr("type") == "password") {
//       $("#key").attr("type", "text");
//       $($(this)).text("Hide");
//     } else {
//       $("#key").attr("type", "password");
//       $($(this)).text("Show");
//     }
//   });
  



// // https://alikong.tistory.com/25