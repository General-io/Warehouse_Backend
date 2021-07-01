import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { GetAllEmployeeComponent } from './employee/get-all-employee/get-all-employee.component';
import { GetEmployeeByIdComponent } from './employee/get-employee-by-id/get-employee-by-id.component';
import { AddItemComponent } from './item/add-item/add-item.component';
import { GetAllItemComponent } from './item/get-all-item/get-all-item.component';
import { GetItemByIdComponent } from './item/get-item-by-id/get-item-by-id.component';
import { ItemComponent } from './item/item/item.component';
import { MainComponent } from './main/main.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { GetArchiveComponent } from './archive/get-archive/get-archive.component';
import { ArchiveComponent } from './archive/archive/archive.component';


const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'main', component: MainComponent},
  { path: 'archive', component: ArchiveComponent},
  { path: 'get-all-item-from-archive', component: GetArchiveComponent},
  { path: 'employee', component: EmployeeComponent},
  { path: 'add-employee', component: AddEmployeeComponent},
  { path: 'get-employee-by-id', component: GetEmployeeByIdComponent},
  { path: 'get-all-employee', component: GetAllEmployeeComponent},
  { path: 'update-employee', component: UpdateEmployeeComponent},
  { path: 'item', component: ItemComponent},
  { path: 'add-item', component: AddItemComponent},
  { path: 'get-item-by-id', component: GetItemByIdComponent},
  { path: 'get-all-item', component: GetAllItemComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
