import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; Rezervi 2021 <br />
            <Link to='/'>termes of uses and conditions</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
