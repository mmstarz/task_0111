import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import ChevronLeft from 'components/svgs/chevronLeft';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (): React.ReactElement => {
  const location = useLocation();

  return (
    <div className="header">
      {location.pathname.startsWith('/profile/') && (
        <Link to="/">
          <ChevronLeft />
        </Link>
      )}
      <div>{process.env.REACT_APP_WEBSITE_NAME}</div>
    </div>
  );
};
export default Header;
