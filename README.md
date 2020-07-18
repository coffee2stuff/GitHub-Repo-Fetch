# GitHub Repo Fetch

Simple TypeScript-based library for fetching basic information related to GitHub user and their public repositories.

## Use

Install necessary dependencies with `npm install`. Build the project with `npm run build` which compiles TypeScript to `dist` directory.

The library exposes a single method `fetchGitHubUserData(token: string)` which accepts user's personal authentication token ([learn how to generate it](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)) and returns an object containing user info and list of summarized repository infos.

```js
// Sample call
const userRepos = await fetchGitHubUserData('my-access-token');
```

# License

Project is licensed under MIT license.