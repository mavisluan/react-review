import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchUsers = () => {
  // when call useState(), the setter function is created only once
  // the setter function won't be recreated every render
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results },
        } = await axios.get('https://randomuser.me/api/?results=25');
        console.log('results', results);
        setUsers(results);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
    // return () => {
    //   cleanup;
    // };
  }, [setUsers]);

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.login.uuid}>
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchUsers;
