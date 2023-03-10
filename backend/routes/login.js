const express = require("express");

const collection = require("../mongo")
const router = express.Router();

router.post("/",async(req,res)=>{
  const {email,password} = req.body

  try{
    const check = await collection.findOne({email:email})

    if(check){
      res.json("exist")
    }
    else{
      res.json('notexist')
    }
  }
  catch(e){
    res.json('notexist')
  }
})

module.exports = router;