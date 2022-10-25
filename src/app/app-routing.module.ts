import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { TableViewComponent } from './table-view/table-view.component';
import { TableProfileDetailsComponent } from './table-profile-details/table-profile-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
  { path: 'profile-changed', redirectTo: 'table/profile-changed' },
  { path: 'profile-created', redirectTo: 'table/profile-created' },
  { path: '', component: HomePageComponent },
  { path: 'error-page-404', component: ErrorPageComponent },
  { path: 'form/create-new-profile', component: CreateFormComponent },
  { path: 'table', component: TableViewComponent },
  { path: 'table/profile-changed', component: TableViewComponent },
  { path: 'table/profile-created', component: TableViewComponent },
  { path: 'table/profile-details/:id', component: TableProfileDetailsComponent },
  { path: 'table/profile-deleted/:id', component: TableViewComponent },
  { path: '**', redirectTo: 'error-page-404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
