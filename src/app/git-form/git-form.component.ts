import { Component, OnInit } from '@angular/core';
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


  constructor(httpsevice:HttpServiceService) {
    this.httpsevice =httpsevice;
   }

  ngOnInit(): void {
  }

}
