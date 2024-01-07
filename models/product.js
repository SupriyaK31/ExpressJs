const products=[];
const { json } = require('body-parser');
const fs=require('fs');
const path=require('path');
const p=path.join(path.dirname(process.mainModule.filename),
    'data','products.json');
const getProductsFromFile=(cb)=>{
    
    fs.readFile(p,(err,fileContent)=>{
        if(err){
           // return [];
            return cb([]);
        }else{
            cb(JSON.parse(fileContent));
        }
        
    })
    // return products;
}
module.exports= class Product{
     constructor(t){
        this.title=t;
     }
     save(){
       // products.push(this);
       //save product in file
    //    const p=path.join(
    //     path.dirname(process.mainModule.filename),
    //    'data',
    //    'products.json'
    //    );
    getProductsFromFile(products=>{
        products.push(this);
        fs.writeFile(p,JSON.stringify(products),err=>{
            console.log(err);
        });
       });
    //    fs.readFile(p,(err,fileContent)=>{
    //     // if(!err){
    //     //     products=JSON.parse(fileContent);
    //     // }

    //  });
    }
       
    //static is use to call directly from this class
     static fetchAll(cb){
        getProductsFromFile(cb);
     }
}