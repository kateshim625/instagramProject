const loginID = document.getElementById("userId");
const showPassword = document.querySelector("#keyShow");
const loginPassword = document.getElementById("key");
const loginButton = document.getElementById("loginButton");
const loginIncorrect = document.querySelector(".incorrectInfo");
const loginInputBox = document.querySelector(".idPwSpanAjust");
const loginPwInputBox = document.querySelector(".pwSpanAjust");

const loginInputBorder = document.getElementById('loginForm');
const pwInputBox = document.querySelector(".idPwSpanAjust");


const userID = "insta_clone";
const userPassword = "123456";

// when input box has focus in or out the border color change
loginInputBorder.addEventListener("focusin", (e) => {
  e.target.style.border = "1px solid #262626";
})
loginInputBorder.addEventListener("focusout", (e) => {
  e.target.style.border = "1px solid #dbdbdb";
})

// https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event#specifications

//button color active id ----------------------------
loginID.addEventListener("input", (e) => {
  let inputValue = e.target.value;
  // when type id button color active
  if (inputValue.length > 0 && loginPassword.value.length > 5) {
    loginButton.style.opacity = "1";
    loginButton.disabled = false;
    loginButton.style.cursor = "pointer";
    return
  }
  if (inputValue.length === 0 || loginPassword.value.length < 6) {
    loginButton.style.opacity = "0.3";
    loginButton.disabled = true;
    loginButton.style.cursor = "default";
  }
  // when type into input placeHolder position change
  if(inputValue.length > 0) {
    loginInputBox.classList.add('--focusStyle');
  } else {
    loginInputBox.classList.remove('--focusStyle');
  }

});

//when type into input show up ----------------------------
loginPassword.addEventListener("input", (e) => {
    let passwordValue = e.target.value;
    //when type pw button color active
    if (loginID.value.length > 0 && passwordValue.length > 5) {
      loginButton.style.opacity = "1";
      loginButton.disabled = false;
      loginButton.style.cursor = "pointer";
      return
    }
    if (loginID.value.length === 0 || passwordValue.length < 6) {
      loginButton.style.opacity = "0.3";
      loginButton.disabled = true;
      loginButton.style.cursor = "default";
    }
    // when type into input placeHolder position change
    if(passwordValue.length > 0) {
      loginPwInputBox.classList.add('--pwFocusStyle');
    } else {
      loginPwInputBox.classList.remove('--pwFocusStyle');
    }
    // when type into input show up
    passwordValue.length === 0
      ? (showPassword.style.display = "none")
      : (showPassword.style.display = "block");

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