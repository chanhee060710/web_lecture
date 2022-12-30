// // HTML 문서에 직접 접근할 수 있게!

// const submit = document.getElementById("submit-btn")
// console.log(submitBtn)

// const hiddenBtn = document.getElementsByClassName("hidden");

// const [divA,divB,divC] = document.getElementsByTagName("div");
// console.log(divA);

// const radioInputs = document.getElementsByName("animal");
// console.log(radioInputs);

// const divs = document.querySelector("div");
// console.log(divs);

// document.querySelector("form input");

// div1.innerText = "영역 1";
// div1.style.color = "red";

// console.log(div1.className);
// console.log(div1.classList);

// const  newDiv = document.createElement("div");
// newDiv.innerText = "추가된 영역!";
// newDiv.className = "color-red";



//브라우저 => 유저가 클릭, 마우스를 올려볼수 있고
//Event
//키보드 뭔가 입력했을떄
//마우스 클릭 마우스를 올렸을때
//form 제출됬을때 "submit"

// const clickMondler = () => console.log("클릭됨!");
// div1.addEventListener("click",clickMondler);
// div1.removeEventListener("click",clickMondler);


//이벤트 버블링 /캡쳐링
const loginForm = document.querySelector(".login-form form")
const LoginInput = document.querySelector(".login-form input");
const greetingh1 = document.querySelector("#greeting");
const LoginSubmitHandler = (event) =>{
    event.preventDefault();
    const username = LoginInput.value;
    if(username === ""){
        alert("값을 입력해주세요.");
    }else if(username.length>15){
        alert("15자 이내로 작성해주세요.");
    }else{
        greetingh1.innerText = `${username}님 환영합니다`
        loginForm.classList.add('hidden');
        greetingh1.classList.remove('hidden');
    }
    console.log(username);
};
loginForm.addEventListener("submit",LoginSubmitHandler);
