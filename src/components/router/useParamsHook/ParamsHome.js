import React from 'react';
import { useParams } from 'react-router-dom';

const ParamsHome = () => {
  // destruct the URL parameter from useParams()
  const { id } = useParams();

  // use the parameter
  return (
    <h4 className="text-warning p-5">
      The value of the id URL parameter is {id}
    </h4>
  );
};

export default ParamsHome;
