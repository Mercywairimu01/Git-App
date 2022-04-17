import { Injectable } from '@angular/core';
import { User } from './user';
import { Repos } from './repos';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
// import { resolve } from 'dns';
// import { rejects } from 'assert';
@Injectable()
export class HttpServiceService {
  user!: User;
  repo!:Repos;
  repoData =[];
  newUser:any =[]; // Holds the Property for Every Array we Push to the repoData Array


  constructor(private http:HttpClient) {
this.user = new User("",0,"","",new Date(),new Date(),"");
this.repo = new Repos("","","",new Date(),"","","",new Date())
   }
   getUser(userName:string){
     this.repoData.length =0;// Empties the Array


     interface ApiResponse{
      bio:string,
      Prepos:number,
      login:string,
      User_url:string,
      createdOn:Date, 
      updatedOn:Date,
      name:string,
      fname:string, 
      html_url:string   
  }
  const promise = new Promise<void>((resolve,reject)=>{
    this.http.get<ApiResponse>(`https://api.github.com/users/${userName}`).toPromise().then(response=>{
      this.user.bio =response!.bio;
      this.user.User_url =response!.User_url;
      this.user.login =response!.login;
      this.user.Prepos =response!.Prepos;
      this.user.updatedOn =response!.updatedOn;
      this.user.createdOn =response!.createdOn;
      this.user.html_url =response!.html_url;
      
     resolve()
    },
    error=>{ reject(error)}
    )
    this.http.get<any>(`https://api.github.com/users/${userName}/repos`).toPromise().then(response=>{
      for(var i=0; i<response.length; i++){
        this.newUser = new Repos(response[i].name,response[i].fname,response[i].description,response[i].updatedOn,response[i].html_url,response[i].clone_url,response[i].language,response[i].createdOn),
        this.repoData.push(this.newUser);
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
