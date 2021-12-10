import axios from 'axios';
import { IError, IUser, IProfile, IRepo } from 'common/interfaces';

export const getRepos = async (username: string): Promise<IRepo[]> => {
  try {
    // https://api.github.com/search/repositories?q=user:1+repo:boysenberry-repo-1
    // const res = await axios.get(`${process.env.REACT_APP_API_URI}/search/repositories`, );
    const res = await axios.get(
      `${process.env.REACT_APP_API_URI}/users/${username}/repos`,
    );

    return res?.data as IRepo[];
  } catch (error) {
    const err = error as IError;
    throw new Error(err.message);
  }
};

export const getReposCount = async (url: string): Promise<number> => {
  try {
    const res = await axios.get(url);
    // console.log('repos: ', res.data);
    return res?.data?.length;
  } catch (error) {
    const err = error as IError;
    throw new Error(err.message);
  }
};

export const getUsers = async (): Promise<IUser[]> => {
  try {
    const res1 = await axios.get(`${process.env.REACT_APP_API_URI}/users`);
    // don't have time to specify all fields of item object
    const res = await Promise.all(
      res1.data.map(async (item: any) => {
        const repos = await getReposCount(item.repos_url);
        const avatar = item?.avatar_url;
        return { ...item, repos, avatar };
      }),
    );
    // console.log('users: ', res);

    return res as IUser[];
  } catch (error) {
    const err = error as IError;
    throw new Error(err.message);
  }
};

export const searchUsers = async (username: string): Promise<IUser[]> => {
  try {
    const res1 = await axios.get(
      `${process.env.REACT_APP_API_URI}/users/${username}`,
    );
    // don't have time to specify all fields of item object
    const repos = await Promise.resolve(getReposCount(res1.data.repos_url));

    const res = [{ ...res1.data, repos, avatar: res1.data.avatar_url }];

    return res as IUser[];
  } catch (error) {
    const err = error as IError;
    throw new Error(err.message);
  }
};

export const getProfile = async (username: string): Promise<IProfile> => {
  try {
    const res1 = await axios.get(
      `${process.env.REACT_APP_API_URI}/users/${username}`,
    );

    const res: IProfile = {
      ...res1?.data,
      avatar: res1?.data?.avatar_url,
      join: res1?.data?.updated_at,
    };

    return res;
  } catch (error) {
    const err = error as IError;
    throw new Error(err.message);
  }
};

// https://api.github.com/users

// {
//   "login": "mojombo",
//   "id": 1,
//   "node_id": "MDQ6VXNlcjE=",
//   "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/mojombo",
//   "html_url": "https://github.com/mojombo",
//   "followers_url": "https://api.github.com/users/mojombo/followers",
//   "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
//   "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
//   "organizations_url": "https://api.github.com/users/mojombo/orgs",
//   "repos_url": "https://api.github.com/users/mojombo/repos",
//   "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/mojombo/received_events",
//   "type": "User",
//   "site_admin": false
// },

// https://api.github.com/users/mmstar

// {
//   "login": "MMStar",
//   "id": 24296984,
//   "node_id": "MDQ6VXNlcjI0Mjk2OTg0",
//   "avatar_url": "https://avatars.githubusercontent.com/u/24296984?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/MMStar",
//   "html_url": "https://github.com/MMStar",
//   "followers_url": "https://api.github.com/users/MMStar/followers",
//   "following_url": "https://api.github.com/users/MMStar/following{/other_user}",
//   "gists_url": "https://api.github.com/users/MMStar/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/MMStar/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/MMStar/subscriptions",
//   "organizations_url": "https://api.github.com/users/MMStar/orgs",
//   "repos_url": "https://api.github.com/users/MMStar/repos",
//   "events_url": "https://api.github.com/users/MMStar/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/MMStar/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": null,
//   "company": null,
//   "blog": "",
//   "location": null,
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "twitter_username": null,
//   "public_repos": 0,
//   "public_gists": 0,
//   "followers": 0,
//   "following": 0,
//   "created_at": "2016-12-01T14:31:45Z",
//   "updated_at": "2016-12-01T14:31:45Z"
// }

// https://api.github.com/users/mojombo/repos

// {
//   "id": 26899533,
//   "node_id": "MDEwOlJlcG9zaXRvcnkyNjg5OTUzMw==",
//   "name": "30daysoflaptops.github.io",
//   "full_name": "mojombo/30daysoflaptops.github.io",
//   "private": false,
//   "owner": {
//   "login": "mojombo",
//   "id": 1,
//   "node_id": "MDQ6VXNlcjE=",
//   "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/mojombo",
//   "html_url": "https://github.com/mojombo",
//   "followers_url": "https://api.github.com/users/mojombo/followers",
//   "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
//   "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
//   "organizations_url": "https://api.github.com/users/mojombo/orgs",
//   "repos_url": "https://api.github.com/users/mojombo/repos",
//   "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/mojombo/received_events",
//   "type": "User",
//   "site_admin": false
//   },
//   "html_url": "https://github.com/mojombo/30daysoflaptops.github.io",
//   "description": null,
//   "fork": false,
//   "url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io",
//   "forks_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/forks",
//   "keys_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/keys{/key_id}",
//   "collaborators_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/collaborators{/collaborator}",
//   "teams_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/teams",
//   "hooks_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/hooks",
//   "issue_events_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/issues/events{/number}",
//   "events_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/events",
//   "assignees_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/assignees{/user}",
//   "branches_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/branches{/branch}",
//   "tags_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/tags",
//   "blobs_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/blobs{/sha}",
//   "git_tags_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/tags{/sha}",
//   "git_refs_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/refs{/sha}",
//   "trees_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/trees{/sha}",
//   "statuses_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/statuses/{sha}",
//   "languages_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/languages",
//   "stargazers_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/stargazers",
//   "contributors_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/contributors",
//   "subscribers_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/subscribers",
//   "subscription_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/subscription",
//   "commits_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/commits{/sha}",
//   "git_commits_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/git/commits{/sha}",
//   "comments_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/comments{/number}",
//   "issue_comment_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/issues/comments{/number}",
//   "contents_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/contents/{+path}",
//   "compare_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/compare/{base}...{head}",
//   "merges_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/merges",
//   "archive_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/{archive_format}{/ref}",
//   "downloads_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/downloads",
//   "issues_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/issues{/number}",
//   "pulls_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/pulls{/number}",
//   "milestones_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/milestones{/number}",
//   "notifications_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/notifications{?since,all,participating}",
//   "labels_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/labels{/name}",
//   "releases_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/releases{/id}",
//   "deployments_url": "https://api.github.com/repos/mojombo/30daysoflaptops.github.io/deployments",
//   "created_at": "2014-11-20T06:42:06Z",
//   "updated_at": "2021-04-03T10:15:42Z",
//   "pushed_at": "2014-11-20T06:42:47Z",
//   "git_url": "git://github.com/mojombo/30daysoflaptops.github.io.git",
//   "ssh_url": "git@github.com:mojombo/30daysoflaptops.github.io.git",
//   "clone_url": "https://github.com/mojombo/30daysoflaptops.github.io.git",
//   "svn_url": "https://github.com/mojombo/30daysoflaptops.github.io",
//   "homepage": null,
//   "size": 1197,
//   "stargazers_count": 7,
//   "watchers_count": 7,
//   "language": "CSS",
//   "has_issues": false,
//   "has_projects": true,
//   "has_downloads": true,
//   "has_wiki": true,
//   "has_pages": false,
//   "forks_count": 2,
//   "mirror_url": null,
//   "archived": false,
//   "disabled": false,
//   "open_issues_count": 0,
//   "license": null,
//   "allow_forking": true,
//   "is_template": false,
//   "topics": [],
//   "visibility": "public",
//   "forks": 2,
//   "open_issues": 0,
//   "watchers": 7,
//   "default_branch": "gh-pages"
// },
