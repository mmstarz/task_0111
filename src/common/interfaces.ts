import { ReactElement } from 'react';
import { AxiosError } from 'axios';

/* RENDER TYPES */
export type RenderType =
  | JSX.Element
  | ReactElement
  | React.ReactNode
  | Array<RenderType>
  | string
  | number
  | boolean
  | null;

/*
JSX.element                     // doesn't account for arrays
JSX.element | JSX.Element[]     // doesnt' accept function
React.ReactChildren             // not at all an appropriate type
React.ReactChild[]              // better
React.ReactNode                 // best, accepts everything
*/

/* ERROR TYPES */
interface IAxiosError {
  status: number;
  message: string;
}

export type IError =
  | TypeError
  | RangeError
  | EvalError
  | Error
  | AxiosError<IAxiosError, any>;

/* USER TYPE */
export interface IUser {
  id: number;
  login: string;
  avatar: string; // avatar_url
  repos: number;
}

/* REPO TYPE */
export interface IRepo {
  id: number;
  name: string;
  forks_count: number; // forks_count
  stargazers_count: number; // stargazers_count
  html_url: string;
}

/* PROFILE TYPE */
export interface IProfile {
  id: number;
  login: string;
  name: string; // name
  avatar: string; // avatar_url
  followers: number;
  following: number;
  bio?: string;
  email?: string;
  location?: string;
  join: Date; // updated_at
}
