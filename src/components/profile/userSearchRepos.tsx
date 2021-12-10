/* eslint-disable camelcase */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { IProfileState } from 'redux/profile/interfaces';
import { IReposState } from 'redux/repos/interfaces';
import { IProfile, IRepo, RenderType } from 'common/interfaces';
import types from 'redux/constants';
import UserRepoItem from 'components/profile/userRepoItem';

interface SearchReposProps {}

const UserSearchRepos: React.FC<SearchReposProps> = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { data: profileData }: IProfileState = useAppSelector(
    state => state?.profile,
  );
  const repos: IReposState = useAppSelector(state => state?.repos);
  const [filter, setFilter] = useState({ criteria: '', start: false });

  const { login } = profileData as IProfile;
  const { data: reposData, isLoading, isError } = repos;

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (e?.target?.value?.length > 0) {
        setFilter(prev => ({ criteria: e.target.value, start: true }));
      }

      if (e?.target?.value?.length === 0) {
        setFilter(prev => ({ criteria: '', start: false }));
      }
    },
    [],
  );

  const getData = useCallback((): void => {
    dispatch({
      type: types.WATCH_GET_REPOS,
      payload: { criteria: login as string },
    });
  }, [dispatch, login]);

  useEffect((): void => {
    if (Object.keys(reposData).length === 0) {
      getData();
    }
  }, [getData, reposData]);

  const isData = useMemo(() => {
    return !isLoading && !isError && Object.keys(reposData).length > 0;
  }, [reposData, isLoading, isError]);

  const filteredRepos = useMemo((): IRepo[] => {
    if (!filter.start) {
      return reposData;
    }

    const filtered = reposData.filter(({ name }: IRepo) =>
      name.startsWith(filter.criteria),
    );

    return filtered;
  }, [filter, reposData]);

  const renderRepos = useCallback((): RenderType => {
    return filteredRepos.map(
      ({ id, name, forks_count, stargazers_count, html_url }: IRepo) => {
        return (
          <UserRepoItem
            key={id}
            name={name}
            forks={forks_count}
            stars={stargazers_count}
            url={html_url}
          />
        );
      },
    );
  }, [filteredRepos]);

  return (
    <div className="reposWrapper">
      <div className="search">
        <label htmlFor="search_input">
          <input
            id="search_input"
            name="name"
            value={filter.criteria}
            onChange={handleInputChange}
            placeholder="Search for user`s repositories"
            autoComplete="off"
          />
        </label>
      </div>
      <div className="repos">
        {isLoading && <div>Loading data...</div>}
        {!isData && <div>Nothing was found</div>}
        {isData && renderRepos()}
      </div>
    </div>
  );
};
export default UserSearchRepos;
