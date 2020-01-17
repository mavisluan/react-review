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
import { useForm } from 'react-hook-form';

const MiniValidationForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log('input data', data);

  console.log('watch example', watch('example')); // watch input value by passing the name of it

  return (
    <Container className="p-3">
      {/* "handleSubmit" will validate inputs before invoking "onSubmit" */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormLabel className="font-weight-bold">
            Example no validation
          </FormLabel>
          {/* register input into the hook by invoking the "register" function */}
          <FormControl name="example" defaultValue="test" ref={register} />
          <small className="text-muted">No rules set for this input</small>
        </FormGroup>
        {errors.example && (
          <FormText className="text-danger">
            This field mininum length is 5 characters
          </FormText>
        )}
        <FormGroup>
          <FormLabel className="font-weight-bold text-success">
            Example MinLength
          </FormLabel>
          {/* register input into the hook by invoking the "register" function */}
          <FormControl
            name="exampleMinLength"
            ref={register({ minLength: 5 })} // can be empty, if input, minLength is 5 chars
          />
          <small className="text-muted">
            The input can be empty, but if there is an input, minLength is 5
            characters
          </small>
        </FormGroup>
        {errors.exampleMinLength && (
          <FormText className="text-danger">
            This field mininum length is 5 characters
          </FormText>
        )}
        <FormGroup>
          <FormLabel className="text-primary font-weight-bold">
            Example Required
          </FormLabel>
          {/* include validation with required or other standard HTML validation rules */}
          <FormControl
            name="exampleRequired"
            ref={register({ required: true })}
          />
          <small className="text-muted">The input can NOT be empty.</small>
        </FormGroup>
        {errors.exampleRequired && (
          <FormText className="text-danger">This field is required</FormText>
        )}
        <Button type="submit" block className="mt-3">
          SUBMIT
        </Button>
      </Form>
    </Container>
  );
};

MiniValidationForm.propTypes = {};

export default MiniValidationForm;
