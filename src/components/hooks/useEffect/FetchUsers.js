import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const FetchUsers = ({ searchValue }) => {
  // when call useState(), the setter function is created only once
  // the setter function won't be recreated every render
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results },
        } = await axios.get(`https://randomuser.me/api/?nat=${searchValue}`);
        console.log('results', results);
        setUsers(results);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, [searchValue, setUsers]); // useEffect runs on searchValue's change

  return (
    <div className="mt-3">
      <h5>Search result</h5>
      <ul>
        {users.map(user => (
          <li key={user.login.uuid}>
            <p>
              Name: {user.name.first} {user.name.last}
            </p>
            <p> Country: {user.location.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FetchUsers.propTypes = {
  searchValue: PropTypes.string.isRequired,
};
export default FetchUsers;
