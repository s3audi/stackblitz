import express from "express";

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
res.send("Hello World");
})

app.listen(process.env.PORT || 5000, ()=>{
console.log("server");
});