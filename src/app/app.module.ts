import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IdeaDetailsComponent } from './components/idea-details/idea-details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RatingModule } from 'primeng/rating';
import { AssessmentCardComponent } from './components/assessment-card/assessment-card.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeaDetailsComponent,
    LandingComponent,
    LoginComponent,
    NavbarComponent,
    AssessmentCardComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    RatingModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
