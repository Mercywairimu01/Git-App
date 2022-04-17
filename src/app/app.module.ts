import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import{ HttpClientModule} from '@angular/common/http';
import { GitFormComponent } from './git-form/git-form.component';
import { DaysPastPipe } from './days-past.pipe'

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GitFormComponent,
    DaysPastPipe
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
