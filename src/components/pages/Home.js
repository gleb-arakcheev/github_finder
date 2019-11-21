import React, { Fragment } from 'react';
import Filters from '../filters/Filters';
import Users from '../users/Users';

// not used atm, update or delete

const Home = () => {
  return (
    <Fragment>
      <Filters />
      <Users />
    </Fragment>
  );
};

export default Home;
