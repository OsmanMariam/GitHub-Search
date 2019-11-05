import { Component, OnInit } from '@angular/core';
import { GithubHttpService } from "../github-http.service";
import { User } from '../user';
import { Repo } from "../repo";

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  users:User;
  repos: Repo[] = [];

  constructor(public githubHttpService:GithubHttpService) { }

  ngOnInit() {
    this.searchUser("OsmanMariam")
    this.getRepos("OsmanMariam")
  }
 

  searchUser(searchTerm){
    this.githubHttpService.searchUsers(searchTerm).then(
      (shows)=>{
        this.users=this.githubHttpService.users;
        
      },
      (error)=>{
        
      }
      
    )

  
  }
  getRepos(searchTerm) {
    this.githubHttpService.getUserRepo(searchTerm).then(
     (shows) => {
      this.repos = this.githubHttpService.repos;
      console.log(this.repos);
      
    },
    (error) => {
      console.log(error);
      alert("No Users nor Repositories found.")
    }
    );
   }

}
