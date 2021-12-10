import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from 'common/interfaces';

type UserItemProps = Pick<IUser, 'login' | 'avatar' | 'repos'>;

const UserItem: React.FC<UserItemProps> = ({
  login,
  avatar,
  repos,
}: UserItemProps): React.ReactElement => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      return navigate(`profile/${login}`);
    },
    [navigate, login],
  );

  return (
    <div className="item" onClick={handleNavigate}>
      <div className="avatar">
        <img src={avatar} alt={login} />
      </div>
      <div className="username">{login}</div>
      <div className="repos">Repo: {repos}</div>
    </div>
  );
};
export default UserItem;
