import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateProfileComponent } from './components/profile/update-profile/update-profile.component'
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { LoginComponent } from './components/login/login.component';
import { FindcounselorComponent } from './components/findcounselor/findcounselor.component';
import { ChildservicesComponent } from './components/childservices/childservices.component';
import { SignupComponent } from './components/signup/signup.component';
import { CommunityComponent } from './components/community/community.component';
import { GroupsComponent } from './components/groups/groups.component';
import { MzazieventsComponent } from './components/mzazievents/mzazievents.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { WellbeingComponent } from './components/wellbeing/wellbeing.component';
import { SinglefathersComponent } from './components/singlefathers/singlefathers.component';
import { SpecialComponent } from './components/special/special.component';
import { EventsinfoComponent } from './components/mzazievents/eventsinfo/eventsinfo.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'service', component: OurservicesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'findcounselor', component: FindcounselorComponent},
  {path: 'childcare', component: ChildservicesComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'update', component: UpdateProfileComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'community', component: CommunityComponent},
  {path: 'groups', component: GroupsComponent},
  {path: 'mzazievents', component: MzazieventsComponent},
  {path: 'eventsinfo', component: EventsinfoComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'wellbeing', component: WellbeingComponent},
  {path: 'singlefathers', component: SinglefathersComponent},
  {path: 'special', component: SpecialComponent},
  {path: 'posts', component: PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
