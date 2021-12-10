import React, { useCallback, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { UsersState } from 'redux/users/interfaces';
import { RenderType, IUser } from 'common/interfaces';
import types from 'redux/constants';
import UserItem from 'components/users/userItem';

interface UsersWrapperProps {}

const UsersWrapper: React.FC<UsersWrapperProps> = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { isLoading, data, isError }: UsersState = useAppSelector(
    state => state?.users,
  );

  const getData = useCallback((): void => {
    dispatch({
      type: types.WATCH_GET_USERS,
      payload: { isLoading: true },
    });
  }, [dispatch]);

  useEffect((): void => {
    getData();
  }, [getData]);

  const renderUsers = useCallback((): RenderType => {
    return data.map(({ id, ...rest }: IUser) => {
      return <UserItem key={id} {...rest} />;
    });
  }, [data]);

  const isData = useMemo(() => {
    return !isLoading && !isError && data?.length > 0;
  }, [data, isLoading, isError]);

  return (
    <div className="users">
      {isLoading && <div>Loading data...</div>}
      {!isData && <div>Nothing was found</div>}
      {isData && renderUsers()}
    </div>
  );
};
export default UsersWrapper;
