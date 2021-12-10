import React, { useRef, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { UsersState } from 'redux/users/interfaces';
import types from 'redux/constants';

interface SearchProps {}

const Search: React.FC<SearchProps> = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { options }: UsersState = useAppSelector(state => state?.users);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const value: string = inputRef?.current?.value as string;
      if (value?.length > 0) {
        dispatch({
          type: types.WATCH_SEARCH_USERS,
          payload: { ...options, criteria: value },
        });
      }

      if (value?.length === 0) {
        dispatch({
          type: types.WATCH_GET_USERS,
          payload: { isLoading: true },
        });
      }
    },
    [inputRef, dispatch, options],
  );

  return (
    <div className="search">
      <label htmlFor="search_input">
        <input
          id="search_input"
          name="name"
          ref={inputRef}
          defaultValue=""
          onChange={handleInputChange}
          placeholder="Search for users"
          autoComplete="off"
        />
      </label>
    </div>
  );
};
export default Search;
