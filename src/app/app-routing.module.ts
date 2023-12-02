import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddFormComponent } from './add-form/add-form.component';
import { WorkersComponent } from './workers/workers.component';
import { AbsencesComponent } from './absences/absences.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ListsComponent } from './lists/lists.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:"home", component: HomeComponent},
  { path:"workers", component: WorkersComponent},
  { path:"absences", component: AbsencesComponent},
  { path:"schedule", component: ScheduleComponent},
  { path:"forms", component: AddFormComponent},
  { path:"lists", component: ListsComponent},
  { path:"login", component: LoginComponent},
  { path:"", component:HomeComponent },
  { path:"**", component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
