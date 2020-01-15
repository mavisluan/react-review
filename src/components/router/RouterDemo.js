import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import React from 'react';

function Home() {
  const match = useRouteMatch();
  console.log('Home match', match);
  return <h2>Home</h2>;
}

function About() {
  const match = useRouteMatch();
  console.log('About match', match);
  return <h2>About</h2>;
}

function Topics() {
  const match = useRouteMatch();
  console.log('Topics match', match);

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  const { topicId } = useParams();
  console.log('useParams', useParams());
  return <h3>Requested topic ID: {topicId}</h3>;
}

const RouterDemo = () => (
  <Router>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">React Demo</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/topics">Topics</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>

    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/topics">
        <Topics />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default RouterDemo;
