import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { DoctorHomePageComponent } from './Components/Doctor/doctor-home-page/doctor-home-page.component';
import { DoctorInfoComponent } from './Components/Doctor/doctor-info/doctor-info.component';
import { PatientHomePageComponent } from './Components/Patient/patient-home-page/patient-home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },

  // Patients
  { path: 'Patients', component: PatientHomePageComponent },

  // Doctor
  { path: 'Doctor', component: DoctorHomePageComponent },
  { path: 'DoctorInfo', component: DoctorInfoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
