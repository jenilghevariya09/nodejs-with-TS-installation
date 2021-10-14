import { githubApiService } from './githubApiService';
import { Repo } from './repo';
import { User } from './user';
import * as _ from 'lodash';

let svc = new githubApiService();
if (process.argv.length < 3){
    console.log('please pass the username as an argument');

}
else {
let userName = process.argv[2];

svc.getUserInfo(userName, (user:User) => {
    svc.getRepos(userName, (repos : Repo[]) => {
        let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.size * -1]);
        let filteredRepos = _.take(sortedRepos, 2);
        user.repos = filteredRepos;

    console.log(user);
    });

});

}
