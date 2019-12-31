import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import FetchUsers from './FetchUsers';

const SearchUser = () => {
  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(value);
    setValue('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div className="py-3">
          <h5>Countries code: </h5>
          AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IR, NO, NL, NZ, TR, US
        </div>
        <Form.Control
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Enter the country code to search"
        />
      </Form>
      {query.length > 0 && <FetchUsers searchValue={query} />}
    </Container>
  );
};

export default SearchUser;
