import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor(private httpserviceservice:HttpServiceService) {
    
  }

  ngOnInit(): void {
  }

}
