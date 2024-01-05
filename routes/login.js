const express=require('express');
const router=express.Router();
const fs=require('fs');
router.get('/login',(req,res,next)=>{
res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="get"><input type="text" id="username" name="username"></input><button type="submit">Login</button></form>');

});



module.exports=router;