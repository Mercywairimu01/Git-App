import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import{ HttpClientModule} from '@angular/common/http';
import { GitFormComponent } from './git-form/git-form.component'

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GitFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
