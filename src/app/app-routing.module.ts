import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionsContainerComponent } from './regions-container/regions-container.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path: '**', component: RegionsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
