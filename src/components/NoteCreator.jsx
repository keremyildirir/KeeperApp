import React, { useState } from "react";
import { Row, Col, Form, FormGroup, FormControl, Button } from "react-bootstrap";

const NoteCreator = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
    dueDate: "",
    teammates: "",
    reminder: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "date") {
      const selectedDate = new Date(value);
      const currentDate = new Date();

      if (selectedDate <= currentDate) {
        alert(
          "This due date has already passed! Please enter a future date."
        );
        return;
      }
    }
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  function submitNote(event) {
    if (note.title.trim() === "") {
      alert("You can't add a note without a title!");
      return;
    }

    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      dueDate: "",
      teammates: "",
      reminder: ""
    });
    event.preventDefault();
  }

  return (
    <Row>
      <Col xs={12} md={6} lg={4}>
        <Form>
          <FormGroup>
            <FormControl
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
              maxLength={24}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              as="textarea"
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Note Description..."
              rows="2"
              maxLength={100}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="date"
              name="dueDate"
              onChange={handleChange}
              value={note.dueDate}
              placeholder="Due Date"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              name="teammates"
              onChange={handleChange}
              value={note.teammates}
              placeholder="Teammates"
              maxLength={24}
            />
          </FormGroup>
          <FormGroup>
            <Form.Control
              as="select"
              name="reminder"
              onChange={handleChange}
              value={note.reminder}
              className="reminder-dropdown"
            >
              <option value="">Select Reminder</option>
              <option value="5 Minutes Before">5 Minutes Before</option>
              <option value="15 Minutes Before">15 Minutes Before</option>
              <option value="30 Minutes Before">30 Minutes Before</option>
              <option value="1 Hour Before">1 Hour Before</option>
              <option value="None">Don't Remind Me</option>
            </Form.Control>
          </FormGroup>
          <Button variant="primary" onClick={submitNote}>
            <span className="plusbutton">+</span>
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default NoteCreator;