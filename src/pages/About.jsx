import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const AboutUs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/keremyldrr7/data/about')
      .then(response => {
        setData(response.data);
      })
  }, []);

  if (!data) {
    return <div>Please wait, page content is loading...</div>;
  }
  
  return (
    <Container className="about-us-container">
      <h2>{data.title}</h2>
      <Row >
        {data.content.map((paragraph, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <p>{paragraph}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AboutUs;
