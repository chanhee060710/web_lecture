async function f1() {
    //await 사용가능
     let promise = new Promise((resolve,reject) =>{
        setTimeout(() => console.log("완료"),1000); 
    });
    let result = await promise;
    alert(result);
}

f1();

async function getDataFormAPI(){
    fetch()
.then((res) => res.json())
.then((data) => {
    //data를 할당받은 후의 로직~
})
.then(() =>{})
.then(() => {})
.catch(error => alert(error.message));

}