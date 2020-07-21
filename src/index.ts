import { graphql } from '@octokit/graphql';
import { RepoModel, GitHubReposeModel } from './models';

export async function fetchGitHubUserData(
    token: string
): Promise<GitHubReposeModel> {
    const query: any = await graphql(
        '{ viewer { login name bio repositories(first:8) { totalCount nodes { name description url isPrivate primaryLanguage { name } } } } }',
        {
            headers: {
                authorization: `token ${token}`
            }
        }
    );
    return {
        user: {
            username: query['viewer']['login'],
            displayName: query['viewer']['name'],
            bio: query['viewer']['bio'],
            publicRepos: query['viewer']['repositories']['totalCount']
        },
        repos: query['viewer']['repositories']['nodes']
            .map((node: any) => {
                return {
                    name: node['name'],
                    description: node['description'],
                    url: node['url'],
                    isPrivate: node['isPrivate'],
                    language: node['primaryLanguage']['name']
                };
            })
            .filter((repo: RepoModel) => !repo.isPrivate)
    };
}
