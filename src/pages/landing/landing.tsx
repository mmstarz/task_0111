import React from 'react';
import Search from 'components/searchbar/search';
import Users from 'components/users/usersWrapper';

interface LandingProps {}

const Landing: React.FC<LandingProps> = (): React.ReactElement => {
  return (
    <div className="landing">
      <Search />
      <Users />
    </div>
  );
};
export default Landing;
