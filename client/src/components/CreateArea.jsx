import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    size: "",
    description:""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    //props.onAdd(note);
    axios.post("http://localhost:3001/create",note);

    setNote({
      title: "",
      size: "",
      description:""
     });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note" >
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Property name"
          />
        )}

        {isExpanded && (
          <input
            name="size"
            onChange={handleChange}
            value={note.size}
            placeholder="Property size"
          />
        )}

        <textarea
          name="description"
          onClick={expand}
          onChange={handleChange}
          value={note.description}
          placeholder={isExpanded ? "Property description" : "Add property"}
          rows={isExpanded ? 2: 1}
        />
        <button onClick={submitNote}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
