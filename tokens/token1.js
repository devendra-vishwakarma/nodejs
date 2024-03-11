import express, { request, response } from "express";
import jwt from "jsonwebtoken";

const app = express();

const secre = "mysecretkey";

app.use("/token",(request,response)=>{
    const payload ={
        id : 1,
        username : "Ram"
    }
    
    const token = jwt.sign(payload,secret);
    response.send(token);    
})

app.get("/verify",(request,response)=>{
     let token = request.headers.token;

    jwt.verify(token,secre,(err,decoded)=>{
        if(err){
            return response.status(500).json({err : "invalid token"});
        }
        else{
            return response.status(200).json('data success',{Data:decoded});
        }
    })
})


app.listen(3000,()=>{
    console.log("server-started");
})