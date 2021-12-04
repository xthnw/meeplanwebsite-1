import React from 'react';
import './Alarm.css';
import { Row, Col, Container, Form, Button} from 'react-bootstrap';

function Alarm () {
  return (
    <Container>
    <br />
      <Row>
        <div className="Bar">
            <img src="./src/Picture/Alarmbar.png" style={{ width: '120px', height: '50px' }} />
            </div>
        <Col>
            <br />
            <Form>
              <Form.Check 
                
                type="switch"
                id="custom-switch"
                label="Check this switch"
              />
            </Form>
        </Col>
        <Col>
        <br />
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="Text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control placeholder="Time" type="Time" />
              <br />
            </Form.Group>
            <div className="Button-Position">
             <Button variant="outline-secondary" className="Button-Save">Save</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Alarm;