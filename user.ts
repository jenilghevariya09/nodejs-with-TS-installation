import { Repo } from "./repo";

export class User {
    login:any;
    fullName:any;
    repocount:any;
    followcount:any;
    twitter_username:any;
    bio:any;
    repos?: Repo[];

constructor(userResponse:any){

    this.login = userResponse.login;
    this.fullName = userResponse.name;
    this.repocount = userResponse.public_repos;
    this.followcount = userResponse.followers;   
    this.twitter_username = userResponse.twitter_username;
    this.bio = userResponse.bio;

}
}
