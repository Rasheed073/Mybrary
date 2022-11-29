const express = require('express')
 const router = express.Router() // this meothode to allow create diffrent router in a seperate file 

 router.get('/',(req,res)=>{
res.render('index')
 })

 module.exports = router 