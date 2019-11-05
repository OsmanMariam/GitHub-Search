import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { GitSearchComponent } from "./gitsearch/gitsearch.component";



const routes: Routes = [
  // {"path":"home","component":GitSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
