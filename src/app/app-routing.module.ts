import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { StatisticPageComponent } from './statistic-page/statistic-page.component';
import { ContactDetailsPageComponent } from './contact-details-page/contact-details-page.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard]  },
  { path: 'contact/:id/edit', component: ContactEditComponent },
  { path: 'contact/edit', component: ContactEditComponent },
  { path: 'contact/:id', component: ContactDetailsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'statistic', component: StatisticPageComponent },
  { path: 'signup', component: SignupPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
