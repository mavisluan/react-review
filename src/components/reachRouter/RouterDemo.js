import React from 'react';
import { Router, Link, navigate } from '@reach/router';
import PropTypes from 'prop-types';
import { Form, FormControl, Button } from 'react-bootstrap';

const Invoice = ({ invoiceId }) => (
  <div>
    <h4 className="text-danger">Current Invoice {invoiceId}</h4>
  </div>
);

const Invoices = ({ children }) => (
  <div>
    <p>Enter the invoiceId and create the route</p>
    <Form
      className="mb-3"
      inline
      onSubmit={e => {
        e.preventDefault();
        const id = e.target.elements[0].value;
        e.target.reset();
        navigate(`/invoices/${id}`);
      }}
    >
      <FormControl />
      <Button type="submit">Create</Button>
    </Form>
    <Link to="123" className="mr-2">
      Invoice 123
    </Link>
    <Link to="abc">Invoice ABC</Link>
    {children}
  </div>
);

const InvoiceList = () => (
  <div>
    <h3>This a default page for path invoices</h3>
    <h4>Invoice1</h4>
    <h4>Invoice2</h4>
    <h4>Invoice3</h4>
  </div>
);

const Team = () => <h1>Team</h1>;
const Group = () => <h1>Group</h1>;

const Dash = ({ children }) => (
  <div>
    <h1>Dashboard</h1>
    <ul>
      <li>
        <Link to="team">Team</Link>
      </li>
      <li>
        <Link to="group">Group</Link>
      </li>
      <li>
        <Link to="/" className="text-danger">
          Back to home
        </Link>
      </li>
    </ul>
    <hr />
    {children}
  </div>
);

const Main = ({ children }) => (
  <div>
    <h1>Welcome to the App!</h1>
    <ul>
      <li>
        <Link to="invoices" className="text-success">
          Invoices
        </Link>
      </li>
      <li>
        <Link to="dashboard" className="text-success">
          Dashboard
        </Link>
      </li>
    </ul>
    <hr />
    {children}
  </div>
);

const NotFound = () => (
  <div className="text-warning">
    <h4>You see this page because no routes matches the path.</h4>
    <h4>Sorry, nothing here.</h4>
  </div>
);

const RouterDemo = () => (
  <Router>
    <Main path="/">
      <Invoices path="invoices">
        <InvoiceList path="/" />
        <Invoice path=":invoiceId" />
      </Invoices>
      <Dash path="dashboard">
        <Team path="team" />
        <Group path="group" />
      </Dash>
      <NotFound default />
    </Main>
  </Router>
);

Invoice.propTypes = {
  invoiceId: PropTypes.object.isRequired,
};

Dash.propTypes = {
  children: PropTypes.node.isRequired,
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

Invoices.propTypes = {
  children: PropTypes.node.isRequired,
};
export default RouterDemo;
