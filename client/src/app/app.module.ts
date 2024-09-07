import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartingComponent } from './starting/starting.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ScrapGoogleComponent } from './scrap-google/scrap-google.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GeoCordinateComponent } from './projects/geo-cordinate/geo-cordinate.component';
import { BulkMailComponent } from './projects/bulk-mail/bulk-mail.component';
import { WhatsappComponent } from './projects/whatsapp/whatsapp.component';
import { LaunchEC2Component } from './projects/launch-ec2/launch-ec2.component';
import { SendMessageComponent } from './projects/send-message/send-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartingComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    ScrapGoogleComponent,
    GeoCordinateComponent,
    BulkMailComponent,
    WhatsappComponent,
    LaunchEC2Component,
    SendMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
