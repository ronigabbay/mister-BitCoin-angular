import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './contact-details-page/contact-details-page.component';
import { StatisticPageComponent } from './statistic-page/statistic-page.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactPreviewComponent } from './contact-preview/contact-preview.component';
import { ChartComponent } from './chart/chart.component';
import { ContactFilterComponent } from './contact-filter/contact-filter.component';
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { TransferFundComponent } from './transfer-fund/transfer-fund.component';
import { MovesListComponent } from './moves-list/moves-list.component';
// import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactDetailsPageComponent,
    StatisticPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ChartComponent,
    ContactFilterComponent,
    AppHeaderComponent,
    ContactEditComponent,
    SignupPageComponent,
    TransferFundComponent,
    MovesListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
