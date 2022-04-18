import { Component, OnInit,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { HttpServiceService } from '../http-service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {
  user!:User;
  userName!:string;
  httpsevice!:HttpServiceService
  seeInput =true;
  seeData =false;


   submitName(){
     this.httpsevice.getUser(this.userName);
     this.seeInput = true;
     this.seeData = false;
   }
  seeUserInput(hideInput: any) {
    this.seeInput =hideInput;
    this.seeData =false;
  }

  constructor(httpsevice:HttpServiceService) {
    this.httpsevice =httpsevice;
   }

  ngOnInit(): void {
  }

}
