import * as octokit from '@octokit/rest';
import { UserModel, RepoModel, GitHubReposeModel } from './models';

export async function fetchGitHubUserData(token: string): Promise<GitHubReposeModel> {
    const okto = new octokit.Octokit({ auth: token });
    const userResponse = await okto.request('/user');
    const user: UserModel = {
        username: userResponse.data['login'],
        displayName: userResponse.data['name'],
        bio: userResponse.data['bio'],
        publicRepos: userResponse.data['public_repos']
    };

    const reposResponse = await okto.request(`/users/${user.username}/repos`);
    const repos: Array<RepoModel> = reposResponse.data.map((data: any) => {
        return {
            name: data['name'],
            description: data['description'],
            url: data['html_url'],
            isPrivate: data['private'],
            language: data['language']
        }
    });
    return {
        user: user,
        repos: repos
    };
}