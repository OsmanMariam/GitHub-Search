import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from "../app/user";
import { Repo } from "../app/repo";

@Injectable({
  providedIn: 'root'
})


export class GithubHttpService {
  searchRepo(searchTerm: any) {
    throw new Error("Method not implemented.");
  }
  users: User;
  repos: Repo[]=[]

  constructor(private http: HttpClient) { }

  searchUsers(searchTerm: string) {

    interface ApiResponse {
      login: string;
      followers: number;
      following: number;
    }

    let searchEndpoint = "https://api.github.com/users/" + searchTerm + "?access_token=" + environment.GITSEARCHAPIKEY;

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(searchEndpoint).toPromise().then(
        (results) => {

          this.users = results
          console.log(results);

          resolve()
        },
        (error) => {
          console.log(error)
          reject()
        }
      )
    })
    return promise;
  }
  getUserRepo(searchTerm: string){

  interface ApiResponse {
    
    full_name:string;
    
    description:string;

  }
  let searchEndpoint = "https://api.github.com/users/" + searchTerm + "/repos?access_token=" + environment.GITSEARCHAPIKEY;

  let promise = new Promise((resolve, reject) => {
    this.http.get<ApiResponse[]>(searchEndpoint).toPromise().then(
      (results) => {

        this.repos = [];
        for (let x=0;x<results.length;x++){
          let repo=new Repo(results[x].full_name,results[x].description)
          this.repos.push(repo)
        }
        

        resolve()
      },
      (error) => {
        
        reject()
      }
    )
  })
  return promise;
}
}
