import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { IProfile } from 'common/interfaces';
import { IProfileState } from 'redux/profile/interfaces';

interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = (): React.ReactElement => {
  const { data }: IProfileState = useAppSelector(state => state?.profile);

  const { name, email, bio, location, followers, following, avatar, join } =
    data as IProfile;

  return (
    <div className="details">
      <div className="top_section">
        <div className="avatar">
          <img src={avatar} alt={name} />
        </div>
        <div className="info">
          <p>{name}</p>
          <p>{email}</p>
          <p>{location}</p>
          <p>{new Date(join).toLocaleDateString()}</p>
          <p>{followers} followers</p>
          <p>Following {following}</p>
        </div>
      </div>
      <div className="bottom_section">{bio || 'Bio not filled'}</div>
    </div>
  );
};
export default UserProfile;
