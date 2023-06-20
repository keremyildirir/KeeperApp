import React from "react";

const NoteItem = (props) => {

  function handleClick() {props.onDelete(props.id);};

  return (
    <div className="note">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <h1><span className="label">Title:</span> {props.title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-4">
          <p><span className="label">Description:</span> {props.content}</p>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
          <p><span className="label">Due Date:</span> {props.dueDate} {console.log(props.dueDate)}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-4">
          <p><span className="label">Teammates:</span> {props.teammates}</p>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
          <p><span className="label">Reminder:</span> {props.reminder}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-danger" onClick={handleClick}><span className="deleteButton">Delete</span></button>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
