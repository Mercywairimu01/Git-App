import { Component } from '@angular/core';
import { GithubComponent } from './github/github.component';
import { HttpServiceService } from './http-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpServiceService]
})
export class AppComponent {
  // title = 'Github-app';
}
