import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { WithUsersContext } from './UsersProvider';

const Content = ({ usersProvider: { users, selectedId } }) => {
  const selectedUser = users.find(user => user.id === selectedId);

  return (
    <div className="py-3">
      {selectedUser && (
        <div>
          <p>
            Full Name: {_.get(selectedUser, 'name.first', '')}{' '}
            {_.get(selectedUser, 'name.first', '')}
          </p>
          <p>Email: {_.get(selectedUser, 'email', '')}</p>
          <p>
            Address: {_.get(selectedUser, 'location.street.number', '')}{' '}
            {_.get(selectedUser, 'location.street.name', '')},{' '}
            {_.get(selectedUser, 'location.city', '')}{' '}
            {_.get(selectedUser, 'location.state', '')},{' '}
            {_.get(selectedUser, 'location.country', '')}{' '}
            {_.get(selectedUser, 'location.postcode', '')}
          </p>
          <p>Phone: {selectedUser.phone} </p>
        </div>
      )}
    </div>
  );
};

Content.propTypes = {
  usersProvider: PropTypes.object.isRequired,
};

export default WithUsersContext(Content);
