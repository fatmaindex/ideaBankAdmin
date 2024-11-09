import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { IdeaDetailsComponent } from './components/idea-details/idea-details.component';
import { AuthGuard } from './guards/auth.guard';
import { AssessmentCardComponent } from './components/assessment-card/assessment-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'landing', component:LandingComponent ,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'ideaDetails/:ideaID', component: IdeaDetailsComponent },
  { path: 'assessment/:ideaID', component: AssessmentCardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
