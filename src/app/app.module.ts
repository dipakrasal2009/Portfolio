import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SendMailComponent } from './send-mail/send-mail.component';
import { SendWhatsappComponent } from './send-whatsapp/send-whatsapp.component';
import { DockeroslaunchComponent } from './dockeroslaunch/dockeroslaunch.component';
import { LaunchEc2InstanceComponent } from './launch-ec2-instance/launch-ec2-instance.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SendTextMessageComponent } from './send-text-message/send-text-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SendMailComponent,
    SendWhatsappComponent,
    DockeroslaunchComponent,
    LaunchEc2InstanceComponent,
    CalculatorComponent,
    SendTextMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
