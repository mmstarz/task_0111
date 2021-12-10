import React from 'react';

interface UserRepoItemProps {
  name: string;
  url: string;
  forks: number;
  stars: number;
}

const UserRepoItem: React.FC<UserRepoItemProps> = ({
  name,
  url,
  forks,
  stars,
}: UserRepoItemProps): React.ReactElement => {
  return (
    <div className="repo_item">
      <div className="repo_title">
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </div>
      <div className="repo_info">
        <div>Forks: {forks}</div>
        <div>Stars: {stars}</div>
      </div>
    </div>
  );
};
export default UserRepoItem;
