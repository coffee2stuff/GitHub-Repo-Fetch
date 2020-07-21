# GitHub Repo Fetch

Simple TypeScript-based library for fetching basic information related to GitHub user and their public repositories. The
library uses `@oktokit/graphql`, a [GitHub GraphQL API](https://github.com/octokit/graphql.js/) client.

## Use

The library exposes a single method `fetchGitHubUserData(token: string)` which accepts user's personal authentication token ([learn how to generate it](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)) and returns an object containing user info and list of summarized repository infos.

```js
const userRepos = await fetchGitHubUserData('my-access-token');
```

# License

Project is licensed under MIT license.