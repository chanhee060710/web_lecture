const express = require("express");

const app = express();

app.get("/",(req,res) => {
    console.log("홈으로 들어왔어요")
    res.send("메인 화면");
});

app.get("/home",(req,res) => {
    console.log("홈으로 들어왔어요")
    res.send("home 화면");
});

app.listen(3000, ()=> {
    console.log("Server is runing!!!!!");
});


