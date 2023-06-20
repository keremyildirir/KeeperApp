import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Contact = () => {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/keremyldrr7/data/contact')
      .then(response => { setData(response.data); })
  }, []);

  const handleInputChange = (event) => { setMessage(event.target.value); };

  const handleSendMessage = () => {
    axios
      .post('https://my-json-server.typicode.com/keremyldrr7/data/contact', { message })
      .then((response) => {
        alert("We received your message, thank you for your time!");
        setMessage('');
      })
  };


  if (!data) {
    return <div>Please wait, page content is loading...</div>;
  }

  return (
    <Container className="contact-container">
      <h2>{data.title}</h2>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          {data.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Col>
        <Col xs={12} sm={6} md={8} lg={9}>
          <div className="message-box">
            <h3 className="message-header">Send us a direct message!</h3>
            <textarea
              rows="4"
              placeholder="Please type your message here..."
              value={message}
              onChange={handleInputChange}
              className="message-input"
            />
            <button className="send-button btn-danger" onClick={handleSendMessage}>Send</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;