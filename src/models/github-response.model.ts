import { UserModel } from './user.model';
import { RepoModel } from './repo.model';

export interface GitHubReposeModel {
    user: UserModel;
    repos: Array<RepoModel>;
}
