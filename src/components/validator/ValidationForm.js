import React from 'react';
import {
  Container,
  Form,
  FormGroup,
  FormControl,
  FormText,
  Button,
  FormLabel,
} from 'react-bootstrap';

const ValidationForm = () => (
  <div className="bg-dark text-white p-5">
    <Container>
      <h2 className="text-center p-3">Sign Up</h2>
      <Form>
        <FormGroup>
          <FormLabel>First Name </FormLabel>
          <FormControl />
          <FormText></FormText>
        </FormGroup>
        <FormGroup>
          <FormLabel>Last Name </FormLabel>
          <FormControl />
          <FormText></FormText>
        </FormGroup>
        <FormGroup>
          <FormLabel>Gender </FormLabel>
          <FormControl as="select">
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
          </FormControl>
          <FormText></FormText>
        </FormGroup>
        <FormGroup>
          <FormLabel>Username </FormLabel>
          <FormControl />
          <FormText></FormText>
        </FormGroup>
        <FormGroup>
          <FormLabel>Email </FormLabel>
          <FormControl />
          <FormText></FormText>
        </FormGroup>
        <FormGroup>
          <FormLabel>About you </FormLabel>
          <FormControl as="textarea" rows={3} />
          <FormText></FormText>
        </FormGroup>
        <Button type="submit" variant="success" block>
          SUBMIT
        </Button>
      </Form>
    </Container>
  </div>
);

export default ValidationForm;
