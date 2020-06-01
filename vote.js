const express=require('express');
const path =require('path')
const bodyParser=require('body-parser');


//initiaing express
const app =express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

 
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, 'public/vote.html'));
});
// var server=app.listen(4000,function(){
//     console.log('runing on port 4000')
// })
//port
var PORT = 4000;

// students

//posting route
app.post("/addvote",function(req,res){
    var newstudent=req.body.newstudent;
    students.push(newstudent)
    res.send(students)
})

var students=[
    {

    name:'brandone',
    dateofbirth:'14 may 1999',
    placeofbirth:'douala',
    gender:'male',
    CNIC:'12234646464asgdgfhd45',
    politicalparty:'YYDM',
    zip:'12345'
    },
   
];
students.forEach(student=>{
    console.log(student)
})
var logger=function(req,res,next){
    console.log('you have the folowing students');
    next();
}
app.use(logger)
//middle ware functions that have access to both the res and req 
app.use(express.static(path.join(__dirname,'public')))
app.get('/api/students',function(req,res){
    res.json(students);

})
app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
})