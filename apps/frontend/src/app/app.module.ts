import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ViewdialogComponent } from './home/viewdialog/viewdialog.component';
import { ChartComponent } from './chart/chart.component';
import { LoginComponent } from './login/login.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
//import material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, HomeComponent,ViewdialogComponent, ChartComponent, LoginComponent],
  entryComponents: [
    ViewdialogComponent
  ],
  imports: [
    MatGridListModule,
    BrowserModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
   

    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    //imports auth0
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
