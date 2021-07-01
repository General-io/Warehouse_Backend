import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GetAllEmployeeComponent } from './employee/get-all-employee/get-all-employee.component';
import { GetEmployeeByIdComponent } from './employee/get-employee-by-id/get-employee-by-id.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { AddItemComponent } from './item/add-item/add-item.component';
import { GetAllItemComponent } from './item/get-all-item/get-all-item.component';
import { GetItemByIdComponent } from './item/get-item-by-id/get-item-by-id.component';
import { ItemComponent } from './item/item/item.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { SearchfilterItemPipe } from './searchfilter-item.pipe';
import { CookieService } from 'ngx-cookie-service';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { ArchiveComponent } from './archive/archive/archive.component';
import { GetArchiveComponent } from './archive/get-archive/get-archive.component';
import { SearchfilterArchivePipe } from './searchfilter-archive.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AddEmployeeComponent,
    GetAllEmployeeComponent,
    GetEmployeeByIdComponent,
    EmployeeComponent,
    AddItemComponent,
    GetAllItemComponent,
    GetItemByIdComponent,
    ItemComponent,
    SearchfilterPipe,
    SearchfilterItemPipe,
    UpdateEmployeeComponent,
    ArchiveComponent,
    GetArchiveComponent,
    SearchfilterArchivePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
