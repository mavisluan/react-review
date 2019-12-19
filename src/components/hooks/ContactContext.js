import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

// Create a context object
// This is an object with 2 properties/Components: { Provider, Consumer }
// Provider passes the data and Consume extract the data
export const ContactContext = React.createContext(null);
const initialState = {
  users: [],
  user: { id: '', name: '', phone: '' },
  editId: null,
};

// Create a store component which manage the state
// 1. Render ContactContext.Provider
// 2. Wrap "children" props into Provider
// 3. pass the state as Provider's "value" props
// 4. Wrap the whole App in the Store component (index.js)
export const ContactStore = ({ children }) => {
  const [users, setUsers] = useState(initialState.users);
  const [editId, setEditId] = useState(initialState.editId);
  const [user, setUser] = useState(initialState.user);

  useEffect(() => {
    if (editId !== null) {
      const editUser = users.find(u => u.id === editId);
      setUser(editUser);
    }
  }, [editId, users]);

  const updateFormState = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const addUser = e => {
    const { name, phone } = user;
    e.preventDefault();
    setUsers([...users, { id: uuid(), name, phone }]);
    setUser(initialState.user);
  };

  const updateUser = e => {
    const { name, phone } = user;
    e.preventDefault();
    const newUsers = users.map(u => {
      if (u.id === editId) {
        u.name = name;
        u.phone = phone;
      }
      return u;
    });
    setUsers(newUsers);
    setEditId(null);
    setUser(initialState.user);
  };

  const cancelUpdate = () => {
    setEditId(null);
    setUser(initialState.user);
  };

  return (
    <ContactContext.Provider
      value={{
        users,
        editId,
        setUsers,
        setEditId,
        user,
        setUser,
        updateFormState,
        cancelUpdate,
        addUser,
        updateUser,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

ContactStore.propTypes = {
  children: PropTypes.node,
};
