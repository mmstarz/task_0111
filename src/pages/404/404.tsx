import React from 'react';
import { Link } from 'react-router-dom';

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = (): React.ReactElement => {
  return (
    <div className="notFound">
      <div className="content">404 Page not found</div>
      <div className="redirect">
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};
export default NotFound;
