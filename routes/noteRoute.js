const express=require("express");
const router= express.Router();
const Note=require("../models/noteModel");

router.route("/create").post((req,res)=>{
    const title=req.body.title;
    const size=req.body.size;
    const description=req.body.description;
    const newNote=new Note({
     title,
     size,
     description 
    })
    newNote.save();
})

router.route("/notes").get((req,res)=>{
    Note.find()
       .then(foundNotes=>res.json(foundNotes))
})


router.route("/delete").post((req,res)=>{
    
    Note.findByIdAndRemove(req.body.id,function(err){
        if(err)
        {
          console.log(err);
        }
      });
})
module.exports = router;