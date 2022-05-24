const express= require("express");
const app=express();
const cors= require("cors");
const mongoose= require("mongoose");

app.use(cors());
app.use(express.json());

// connect to mongoose
mongoose.connect("mongodb+srv://admin-Kanishk:kani9897@cluster0.sklhz.mongodb.net/notesDB",{useNewUrlParser: true});

app.use("/",require("./routes/noteRoute"));



let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}

if(process.env.NODE_ENV==="production"){
  app.use(express.static("client/build"));
  const path = require("path");
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
  });
}


app.listen(port,function(){
    console.log("server running on port 3001");
});