import React  from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import config from "./config";

function Note(props) {
 function handleClick() {
     
     axios.post(config.SERVER_URI+"/delete",props);
   }


  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p><strong>Size: </strong>{props.size}</p>
      <p><strong>Description:</strong> {props.description}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
