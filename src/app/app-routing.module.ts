import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateProfileComponent } from './components/profile/update-profile/update-profile.component'
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FindcounselorComponent } from './components/findcounselor/findcounselor.component';
import { ChildservicesComponent } from './components/childservices/childservices.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'service', component: OurservicesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'update', component: UpdateProfileComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'findcounselor', component: FindcounselorComponent},
  {path: 'childcare', component: ChildservicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
