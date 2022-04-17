import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitFormComponent } from './git-form/git-form.component';
const routes: Routes = [
  {path:'gitUser',component:GitFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
