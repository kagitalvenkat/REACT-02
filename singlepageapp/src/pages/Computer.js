import React from 'react';
import { useParams } from 'react-router-dom';

const Computer = () => {
  const params = useParams();
  return (
    <div>
      <h4>Computer Details</h4>
      <h5>Param Details:{params.category}</h5>

    </div>
  );
}

export default Computer;
