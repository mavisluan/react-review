import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const UsersContext = React.createContext(null);

export const UsersProvider = ({ children }) => {
  // receive children components as props
  const [users, setUsers] = useState([]); // hold the state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('./users-static-data.json');
        const fetchedUsers = data.results.map(user => {
          const {
            gender,
            name,
            location,
            email,
            dob,
            phone,
            picture,
            login,
          } = user;

          return {
            gender,
            name,
            location,
            email,
            dob,
            picture,
            phone,
            id: login.uuid,
          };
        });
        console.log('fetchedUsers', fetchedUsers);
        setUsers(fetchedUsers);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);
  return (
    // pass users array to Provider through value props
    // Render children components
    <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
  );
};

// WithUsersContext receives a component as argument
// return the component wrapped with Consumer function
export const WithUsersContext = Component => {
  const ComponentWithContext = props => (
    <UsersContext.Consumer>
      {value => <Component {...props} usersProvider={value} />}
    </UsersContext.Consumer>
  );

  return ComponentWithContext;
};

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UsersProvider;
