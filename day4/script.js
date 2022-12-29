// const name= "chanhee";
// const age =17;
// console.log(typeof name);

// console.log(typeof (age));

// const arr = [1,2,3]; //type??? --object

// console.log(typeof arr);

// null //type => ??
// const name2 = null;
// console.log(name2);

// let tmp;
// console.log(tmp+123);

// let tmp = 11+"chanhee";
// console.log(tmp);

// console.log(!!"chanhee"); //true
// console.log(!!"") //false

// console.log(Number.isNaN(11)); //isNaN => false :숫자라는뜻
// console.log(Number.isNaN)

// Number.isNaN()

// function example() {
//     return condition1
//     ?value1
//     :condition2
//     ?value2
//     :condition3
//     ?value3
//     :value4;
// }

// const condition = chekCondition(c);

// function example2(){

// }
// 조건식? 참일때의 값: 거짓일때의 값
// const ex3 = condition ? a===0 ? 'zero':'postive' : 'nagative';

// function greeting(isLogin){
//     const name = isLogin ? getName() :'이름없음'
//     if(isLogin){
//         return `안녕하세요 ${getName()}`
//     }

//     return `안녕하세요 이름없음`;
// }

// if(`string`.length >0){
//     console.log("빈 문자열이 아님");
// }

// if(!isNaN(10)){
//     console.log("숫자가 맞음");
// }

// const bool = true;
// if(bool === true){
//     console.log("참");
// }

// function printName(name){
//     if(name === undefined || name ===null){
//         console.log("아무도 없네요")
//     }else{
//         console.log(`반갑습니다 ${name}님!`)
//     }
// }

// console.log(true && true && "과연?");

// console.log(true || false || "이번에는?");

// function calAPI(){
//     //......
//     const data = "______";
//     if(data){
//         return data;
//     }else{
//         return "fetching";
//     }

    
// }





const arr = [1,2,3];

const objArr = {0:1,1: 2,2: 3 ,length:3};

console.log(Array.isArray(arr));
console.log(Array.isArray(objArr));

console.log(arr,length);

arr.length = 10; // [1,2,3, , , ,]
console.log(arr.length);
console.log(arr); 

// const confirmBtn =document.getElementsByTagName("button")[1];
// const cancelBtn =document.getElementsByTagName("button")[2];
// const resetBtn =document.getElementsByTagName("button")[0];

const [confirmBtn,cancelBtn,resetBtn]= document.getElementsByTagName("button");





const originArray = ['123','456','789'];

const newArray = originArray;

console.log(originArray.push(10));
originArray.push(20);
originArray.push(30);

console.log(originArray);
console.log(newArray);

//유사배열 객체

const arr1 = ["hello","javascript"];
console.log(arr1);

const objLikeArr ={0: "hello", 1: "javascript",length:5};
const converted = Array.from(objLikeArr);
console.log(objLikeArr);
console.log(converted);

const customer ={
    name: "chanhee"
};
const isLogined = true;

function getActiveUserName (isLogin,user){
    let user_name;

    if(isLogin){
        if(user){
            if(user.name){
                console.log(user.name);
            }else{
                user_name="이름 없음";
            }
        }
    }
    return user_name;
}

//function 함수이름( 매개변수,...){
//수행할 코드    
//}

getActiveUserName(isLogined,user);
let user_name;
let user_age;

console.log(user_name);

function getUserName(){
    if(isLogined && user){
        return user.name || "이름없음"
    }
}
function sum1(a,b){
    return a+b;
};

const sum2 = function(a,b){
    return a+b;
};

const person ={
    eye: 2,
    speak:  () => console.log("왈왈"),
};

//화살표함수 {}
const sum3 = (a,b) => (a+b);
    


//매개변수 => 실행할 문장....

//화살표 함수 어디에 많이쓰냐
//함수내에 콜백 함수로 건네줄때 많이 사용


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}



//arrow function의 단점
console.log(this);

const student ={
    age:17,
    sayAge: function  () {
  console.log(this.age);
    },
};

student.sayAge();

// 학생a 학생b 학생c map forEach



// const students = array1.map((name)=>{

//     return "학생" +name;
// }
// );



//Quiz 다음 조건을 만족하는 함수를 작성하라.
//조건 
//"원 글자를 붙여 원한 표기
//2.10원초과 값만 출력 //array.filter();
//3. 조건에 맞는 값만 갖고 있는 배열 반환 조건 1. 3. =>Array.map()
const price = ['2000','1000','3000','5000','4000'];
function getWonPrice(pricelist) {
    // const temp = [];

    // for(let i=0; i<pricelist.length; i++){
    //     if(pricelist[i] >1000){
    //      temp.push(pricelist[i] + "원");   
    //     }
    // }

    // return temp;
//     pricelist.filter((item) =>{
//         Number(item)>1000
// const sortedList = isOverThousand.sort((a,b) =>a-b);
// return isOverThousand.map((item) => item+"원");
    return pricelist
    .filter((item) => Number(item) >1000)
    .sort((a,b) => a-b)
    .map((item) => item + "원");
}
   const pricelist =getWonPrice(price);


const result = getWonPrice(price);
console.log(result);