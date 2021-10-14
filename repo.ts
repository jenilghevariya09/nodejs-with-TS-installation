export class Repo{
    name:any;
    description:any;
    url:any;
    size: any;
    forkcount: any;

    constructor(repo :any){
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.html_url;
        this.size = repo.size;
        this.forkcount = repo.forks;

    }
}
