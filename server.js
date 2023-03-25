const express=require("express");
const bodyParser=require('body-parser');
const ejs=require('ejs');

const app=express();
app.use(express.static("public"));
app.set('view engine',ejs);
app.use(bodyParser.urlencoded({extended:true}));

const date1=new Date();
const date=date1.toDateString();

app.get("/",(req,res)=>{
      res.render("page1.ejs",{date:date});
})

app.post("/",(req,res)=>{
    res.render("page2.ejs",{date:date});
})

app.listen(3000);