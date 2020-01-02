import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const RoomContext = React.createContext();

const RoomStore = ({ children }) => {
  const [isLit, setLit] = useState(false);

  const toggleLight = () => setLit(!isLit);
  return (
    <RoomContext.Provider value={{ isLit, onToggleLight: toggleLight }}>
      {children}
    </RoomContext.Provider>
  );
};

RoomStore.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RoomStore;
