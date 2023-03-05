const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string type 변수 선언
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 로그인 버튼 클릭 이벤트 함수
function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const usename = loginInput.value;
  localStorage.setItem(USERNAME_KEY, usename);
  paintGreetings(usename);
}

// 유저 네임 띄우기
function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${username}`;
}

// localStorage에 username 저장하기
const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

// localStorage에 username 유무에 따라 화면 띄우기
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
