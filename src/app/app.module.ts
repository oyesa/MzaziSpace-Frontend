import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { CommunityComponent } from './components/community/community.component';
import { GroupsComponent } from './components/groups/groups.component';
import { MzazieventsComponent } from './components/mzazievents/mzazievents.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateProfileComponent } from './components/profile/update-profile/update-profile.component';
import { FindcounselorComponent } from './components/findcounselor/findcounselor.component';
import { ChildservicesComponent } from './components/childservices/childservices.component';
import { SinglefathersComponent } from './components/singlefathers/singlefathers.component';
import { SpecialComponent } from './components/special/special.component';
import { WellbeingComponent } from './components/wellbeing/wellbeing.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { CommentsComponent } from './components/comments/comments.component';
import { PostsComponent } from './components/posts/posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component';



const appRoutes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'community', component: CommunityComponent},
  {path: 'about', component: AboutComponent},
  {path: 'service', component: OurservicesComponent},
  {path: 'testimonials', component: TestimonialsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomepageComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    OurservicesComponent,
    CommunityComponent,
    GroupsComponent,
    MzazieventsComponent,
    TestimonialsComponent,
    SignupComponent,
    LoginComponent,
    FindcounselorComponent,
    ChildservicesComponent,
    SinglefathersComponent,
    SpecialComponent,
    WellbeingComponent,
    UpdateProfileComponent,
    CommentsComponent,
    PostsComponent,
    LandingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true}),
    NgbModule,
    NgbDropdownModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
