import { Component, OnInit} from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { User } from '../user';
import { Repos } from '../repos';
// import { ThisReceiver } from '@angular/compiler';
// import { promises } from 'dns';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  // myRepos:any =[];
  // myProfile:any =[];

   user!:User;
   repoD =[];
   httpsevice!:HttpServiceService

  constructor(httpsevice:HttpServiceService) {
    this.httpsevice =httpsevice;
  }


  ngOnInit(): void {
   this.user =this.httpsevice.user; // Get the Response from SearchGithubService from user 
    this.repoD =this.httpsevice.repoData

  }











// this.getRepos();
// this.getProfile();
   
//   }
// async getRepos():Promise<void>{
// const repoData = await this.Repohttp.myRepos('Mercywairimu01')
// this.myRepos =repoData
// console.log(this.myRepos)
// }
// async getProfile():Promise<void>{
//   const profileData = await this.profilehttp.myProfile('Mercywairimu01')
//   this.myProfile = profileData
//   console.log(this.myProfile)

// }

}



 // interface ApiResponse{
    //   user:[];
    //   repos:[];

    // }
    // this.httpserviceservice.get<ApiResponse>('https://api.github.com/users/SamTomashi/repos').subscribe((data: { user: string; repos: string; }) =>{
    //   this.user =new User(data.user),
    //   this.repos = new Repos(data.repos)
    // })