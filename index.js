const express = require('express')
const mongo = require('mongoose')
const studentModel = require('./model')
const app = express()

app.use(express.json())

mongo.connect('mongodb://127.0.0.1:27017/studentList').then(r=>{
    console.log('DB connected');
}).catch(err=>{
    console.log("err = "+err);
})

app.post('/student/add', (req,res)=>{
    let studentObj = new studentModel()
    studentObj.name = req.body.name
    studentObj.email = req.body.email
    studentObj.branch = req.body.branch

    studentObj.save()

    res.send({
        success:true,
        status:200,
        message:"studentList added successfully",
        name:studentObj.name,
        email:studentObj.email,
        branch:studentObj.branch
    })
})

app.listen(5000, (err)=>{
    if(err){
        console.log('Error Occured'+err);
    }
    else{
        console.log('server started');
    }
})