
const express= require("express");
const bodyParser = require("body-parser");
var http= require("http");
const mongoose= require('mongoose');
var Schema= mongoose.Schema;
var User= require("./User");

mongoose.connect('mongodb://localhost:27017/FormDB');
var db=mongoose.connection;

db.on('error',console.log.bind(console,"connection error"));
db.once('open',function(callback){
    console.log("connection succeeded");
});

const app= express();
app.use(bodyParser.json());


app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
    
});

app.post('/submit',function(req,res,next){
    console.log("Posting...");
    var userData={

    
     email: req.body.email,
     phone:req.body.phone,
     username: req.body.username,
     address:req.body.address,
     city:req.body.city,
     country:req.body.country,
     code:req.body.code,
    };
    console.log(userData);

    User.create(userData, function (err, user) {
    
	  if (err) {
          console.log("Insert fail");
		       return next(err);
	  } else {
              console.log("Inserted");
              res.redirect(__dirname + "index.html");
            	  }
    });
     

});

app.get('/submit',function(req,res){
    User.find({},function(err,userData){
        if(err)
         throw err;
        console.log(userData);
        //res.sendFile(__dirname +"/submit.html"); 
        res.render('submit',{userData:userData});
    });
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});