import React, { useState,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import axios from "axios";
import CreateArea from "./CreateArea";

function App() {
  
  const [notes,setNotes]= useState([{
    title:"",
    size:"",
    description:""
 }])
 
 useEffect(() => {
   fetch("/notes").then(res =>{
     if(res.ok){
       return res.json()
     }
   }).then(jsonRes =>setNotes(jsonRes));
 })
 
   function addNote(newNote) {
     setNotes((prevNotes) => {
      return [...prevNotes, newNote];
     });
    
   }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  

  }

  return (
    <div>
      <Header />
      
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            size={noteItem.size}
            description={noteItem.description} 
            onDelete={deleteNote}
          />
        );
      })}
      
      <Footer />
    </div>
  );
}

export default App;
