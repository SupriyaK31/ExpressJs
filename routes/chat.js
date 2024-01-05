const express=require('express');
const fs=require('fs');
const router=express.Router();
router.get('/',(req,res,next)=>{
    const data = fs.readFileSync('message.txt');
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write(`<body><form onsubmit=" document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST">
    <h1>${data}</h1>
    <input type="text" name="message">
    <input type="hidden" name="username" id="username">
    <button type="submit">Send</button></form></body>`);
    res.write('</html>');
    return res.end();
});
router.post('/',(req,res,next)=>{
    const data=[];
   data.push(`${req.body.username} : ${req.body.message} `);
   console.log(data);
   fs.appendFileSync('message.txt',data.toString());
  res.redirect('/');
});


module.exports=router;