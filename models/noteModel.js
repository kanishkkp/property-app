const mongoose= require("mongoose");

const notesSchema={
    title:String,
    size: String,
    description: String
}

const Note= mongoose.model("Note",notesSchema);

module.exports=Note;