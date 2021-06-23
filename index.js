// let hello = "hello world";
// console.log(`${hello}`)

var express = require('express');
var app = express();
const bodyparter = require("body-parser");
const mysql = require('mysql');
const { name, render } = require('ejs');
const multer = require('multer');
var strorge = multer.diskStorage(
    {
        destination:(req,file,callback)=>{
            callback(null,'/upload')
        },
        filename:(req,file,callback)=>{
            callback(null,file.originalname);
        }
    }
);
var upload = multer({strorge:strorge});
app.use(bodyparter.json());

// create view
app.set('view engine' , 'ejs');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
    next(); // Important
})
// link with mySql
var conn =  mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'shop_demo'
});
//show from upload
app.get('/upload' , (req,res)=>{
    res.render('upload')
});
// get file in from upload
app.post('/upload',upload.single('file'),(req,res)=>{
    res.send(req.file.fieldname);
    //select infor file
    console.log(req.file);

});
// show data from mySpl
app.get('/show',(req,res)=>{
   
    conn.query("SELECT * FROM caregory order by name asc",(err,data)=>{
        let getData =data
        if(err){
            res.sendStatus(500);
        }else{
                
            res.render('show' ,{getlist:getData})
           
        }
    });
});
// add data came from mySpl
//step1
app.get('/add',(req,res)=>{
    res.render('add');
    
});
//step2
app.post('/add',(req,res)=>{
    var sql = `INSERT INTO caregory(name,status) VALUES ('${req.body.name}',${req.body.status})`
    conn.query(sql,(err,data)=>{
          if(err){
                res.sendStatus(500);
           }else{
                res.redirect('show');
            }
        })
   //console.log(req.body);
   
});
//delete data 
app.get('/delete/:id',(req,res)=>{
    conn.query(`delete from caregory where id = ${req.params.id}`,(err,data)=>{
        if(err){
            res.sendStatus(500);
        }else{
            res.redirect('/show');
           
        }
    });
});

// update data 
//step1
app.get('/update/:id' , (req,res)=>{

   conn.query(`SELECT *from caregory where id = ${req.params.id}`,(err,data)=>{
        if(err){
            res.sendStatus(500);
        }else{
                
            res.render('update' ,{getlist:data[0]})
           
        }
    });
});
//step2
app.post('/update/:id',(req,res)=>{
    conn.query(`update caregory set name ='${req.body.name}',status =${req.body.status} where id = ${req.params.id}`,(err,data)=>{
        if(err){
            res.sendStatus(500);
        }else{
            res.redirect('/show');
           
        }
    });
});
//create puns data in form
app.get('/contact' ,(req , res)=>{
    let catery =[
        {name:'ao' , type:'dai'},
        {name:'ao1' , type:'dai1'}

    ];
    let name="hhh";
    res.render('contact' , {list :catery , list2 :name} )
})
require('./router/home.router')(app);
require('./router/category.router')(app);
require('./router/account.router')(app);
require('./router/product.router')(app);


// on form
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/add' ,(req , res)=>{
    res.render('add-contact')
});
// create pull data in form 





// listen part
 app.listen(3000,()=>{
     console.log('sever runing');
 })
