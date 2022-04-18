import { Injectable } from '@angular/core';
import { User } from './user';
import { Repos } from './repos';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpServiceService {
  user!: User;
  repo!:Repos;
  repoData:any[] =[];
  newUser:any =[]; // Holds the Property for Every Array we Push to the repoData Array
  

  constructor(private http:HttpClient) {
this.user = new User("",0,"","",new Date(),new Date(),"");
this.repo = new Repos("","","",new Date(),"","","",new Date());

   }
   getUser(userName:string){
     this.repoData.length =0;// Empties the Array.console.log();


     interface ApiResponse{
      bio:string,
      public_repos:number,
      login:string,
      avatar_url:string,
      created_at:Date, 
      updated_at:Date,
      name:string,
      full_name:string, 
      html_url:string   
  }
  let promise = new Promise<void>((resolve,reject)=>{
    this.http.get<ApiResponse>("https://api.github.com/users/" + userName).toPromise().then(response=>{
      this.user.bio =response!.bio;      
      this.user.avatar_url =response!.avatar_url;
      this.user.login =response!.login;
      this.user.public_repos =response!.public_repos;
      this.user.updated_at =response!.updated_at;
      this.user.created_at =response!.created_at;
      this.user.html_url =response!.html_url;
  
      
     resolve()
    },
    error=>{ reject(error)}
    )
    this.http.get<any>("https://api.github.com/users/" + userName + "/repos").toPromise().then(response=>{
      for(var i=0; i<response.length; i++){
        this.newUser = new Repos(response[i].name,response[i].full_name,response[i].description,response[i].updated_at,response[i].html_url,response[i].clone_url,response[i].language,response[i].created_at);
         this.repoData.push(this.newUser);
        // console.log(this.repoData);
        
         
      }
      resolve()
    },
    error=>{ reject(error)}
    )
  })
  return promise
   }
}

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpServiceService {
//   userName = 'Mercywairimu01'
//   // get(arg0: string) {
//   //   throw new Error('Method not implemented.');
//  // }
 
//   //  getUser(){
//   //    return User
//   // }

//   constructor(private http1:HttpClient) {
//     // console.log ()
//    }
//    myRepos(userName:string):any{
// const promise = new Promise((resolve,reject)=>{
//   resolve(this.http1.get(`https://api.github.com/users/${userName}/repos`).toPromise())

// })
// return promise
//    };
//    myProfile(userName:string):any{
//     const promise2 = new Promise((resolve,reject)=>{
//       resolve(this.http1.get(`https://api.github.com/users/${userName}`).toPromise())
    
//     })
//     return promise2
//        };

// }
