import React from 'react';
import PropTypes from 'prop-types';
import { WithUsersContext } from './UsersProvider';
import Avatar from './Avatar';

const Sidebar = ({ usersProvider: { users, selectedId } }) => {
  const selectedUser = users.find(user => user.id === selectedId);
  console.log('selectedUser', selectedUser);

  return (
    <div className="py-3 text-center text-white">
      {selectedUser ? (
        <div>
          <Avatar size="80em" pictureUrl={selectedUser.picture.medium} />
          <div className="text-wrap flex-wrap">
            {selectedUser.name.first} {selectedUser.name.last}
          </div>
          <div className="text-wrap flex-wrap">
            {selectedUser.location.country}
          </div>
        </div>
      ) : (
        <span className="font-weight-bold">Select one user from above</span>
      )}
    </div>
  );
};

Sidebar.propTypes = {
  usersProvider: PropTypes.object.isRequired,
};

export default WithUsersContext(Sidebar);
