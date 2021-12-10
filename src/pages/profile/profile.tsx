import React, { useCallback, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { IProfileState } from 'redux/profile/interfaces';
import types from 'redux/constants';
import UserProfile from 'components/profile/userProfile';
import UserSearchRepos from 'components/profile/userSearchRepos';

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = (): React.ReactElement => {
  const { username } = useParams();
  const dispatch = useAppDispatch();

  const { isLoading, data, isError }: IProfileState = useAppSelector(
    state => state?.profile,
  );

  const getData = useCallback((): void => {
    dispatch({
      type: types.WATCH_GET_PROFILE,
      payload: { criteria: username as string },
    });
  }, [dispatch, username]);

  useEffect((): void => {
    // if (Object.keys(data).length === 0) {
    //   getData();
    // }
    getData();
  }, [getData]);

  const isData = useMemo(() => {
    return !isLoading && !isError && Object.keys(data).length > 0;
  }, [data, isLoading, isError]);

  return (
    <div className="profile">
      {isLoading && <div>Loading data...</div>}
      {!isData && <div>Nothing was found</div>}
      {isData && <UserProfile />}
      {isData && <UserSearchRepos />}
    </div>
  );
};
export default Profile;
