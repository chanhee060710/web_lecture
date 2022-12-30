// js에서 비동기구현
//1 .callback
//2.promise {ES6 표준 채택}
//3. Async & await{ES8}


// 현재 작업을 비동기적으로 처리하고 있는 상황
//1. 작업중 {pending} => 성공 및 실패 여부가 결정되지 않은, promise 객체가 실행중
//2. 작업 완료 & 성공 => 작업 완료! 성관했다 => + 값 (resolve)
//3. 작억 완료 & 실패 => 작업 완료! 실패... + 왜 실패? 여러 객체 (reject)


// const P1 = new Promise(function (resolve,reject) {
//     // 어렵고 복잡한 작업~~~
//     setTimeout(() => resolve("P1 객체가 작업이 성공적으로 완료됨"), 3000);
// });

// const P2 = new Promise((resolve)=>{
//     setTimeout(() => resolve("P2 객체 작업이 성공적으로 완료됨"), 4000);
// });

//  const P3 = new Promise((reject) => {
//      setTimeout(() => reject(new Error("P3 객체 작업 중 에러 발생"),1000));
//  });

 
//작업이 완료된 후 어떻게 처리해줄지(소비자~)

//  모든 Promise 객체가 완료되었을 때!
// console.log("test");
// Promise.all([P1,P2]).then((resolve1,resolve2) => {
//    console.log(resolve1,resolve2);
//    console.log("test"); 
// });

// new Promise((resolve,reject) => {
//     //setTimeout(() => resolve("완료"),1000);
//     setTimeout(() => reject(new Error("에러 발생!"),2000));
// }).finally(() =>alert("promise가 준비됨"))
// .then((result) => alert(result));

// let promise = new Promise(function(resolve,reject){
//     setTimeout(() => resolve(1),1000);
// });

// Promise.then(function(result));

