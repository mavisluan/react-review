import React from 'react';
import PropTypes from 'prop-types';
import { WithUsersContext } from './UsersProvider';
import Avatar from './Avatar';

const Sidebar = ({ usersProvider: { users, selectedId } }) => {
  const selectedUser = users.find(user => user.id === selectedId);
  const { name, location, picture } = selectedUser || {
    name: '',
    location: { country: '' },
    picture: { medium: '' },
  };

  return (
    <div className="py-3 text-center text-white">
      {selectedUser ? (
        <div>
          <Avatar size="80em" pictureUrl={picture.medium} />
          <div className="text-wrap flex-wrap">
            {name.first} {name.last}
          </div>
          <div className="text-wrap flex-wrap">{location.country}</div>
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
