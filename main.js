const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database :'taskk'
});

db.connect( (err,result) =>{
    if(err)
    throw err;
    else 
    console.log("Database connected");
})

app.get("/api/list1", (req,res)=>{
    const sql = `SELECT product.id,product_name,brand,category FROM brands INNER JOIN categories on categories.id=brands.id INNER JOIN product on brands.id=product.id `
db.query(sql, (err,result) =>{
if(err){
   console.log(err);
}
res.send(result);
});
})

app.get("/api/list2", (req,res) => {
    const sql = `SELECT product.id,product_name,brand,category FROM brands INNER JOIN categories on categories.id=brands.id INNER JOIN product on brands.id=product.id WHERE product.product_name = "galaxy note 1"`
    db.query(sql, (err,result) =>{
    if(err){
       console.log(err);
    }
    res.send(result);
    });
});

app.get("/app/list3", (req,res) =>{
    const sql = `SELECT brands.id,brand,category FROM brands INNER JOIN categories ON brands.id= categories.id `
    db.query(sql, (err,result) =>{
        if(err){
           console.log(err);
        }
        res.send(result);
        });
});

app.get("/app/list4", (req,res) =>{
    const sql = `SELECT brands.id,brand,category FROM brands INNER JOIN categories ON brands.id= categories.id WHERE brands.brand = "apple" `;
    db.query(sql, (err,result) =>{
        if(err){
           console.log(err);
        }
        res.send(result);
        });
});

app.listen(3001);