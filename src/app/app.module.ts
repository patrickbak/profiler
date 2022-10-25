import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { TableComponent } from './table/table.component';
import { TableProfileDetailsComponent } from './table-profile-details/table-profile-details.component';
import { TableViewComponent } from './table-view/table-view.component';
import { ProfileManipulatorService } from './services/profile-manipulator.service';
import { CreateFormComponent } from './create-form/create-form.component';
import { ValidatorService } from './services/validator.service';
import { UtilityService } from './services/utility.service';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    TableProfileDetailsComponent,
    TableViewComponent,
    CreateFormComponent,
    HomePageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    MatNativeDateModule
  ],
  providers: [
    MatDatepickerModule,
    ProfileManipulatorService,
    ValidatorService,
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
