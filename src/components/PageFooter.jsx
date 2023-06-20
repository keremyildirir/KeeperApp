import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PageFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer mt-auto py-3">
      <Container className="footer-container">
        <Row>
          <Col className="text-center">
            <p>Copyright &copy; {year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default PageFooter;
