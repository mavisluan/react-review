import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const UsersContext = React.createContext(null);

const UsersStore = ({ children }) => {
  const [users, setUsers] = useState([]);

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
    <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
  );
};

UsersStore.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UsersStore;
