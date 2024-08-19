import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { SendWhatsappComponent } from './send-whatsapp/send-whatsapp.component';
import { DockeroslaunchComponent } from './dockeroslaunch/dockeroslaunch.component';
import { LaunchEc2InstanceComponent } from './launch-ec2-instance/launch-ec2-instance.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SendTextMessageComponent } from './send-text-message/send-text-message.component';

const routes: Routes = [
  {path : '',component : ProfileComponent},
  {path : 'mail',component:SendMailComponent},
  {path : 'whatsapp',component:SendWhatsappComponent},
  {path : 'Docker',component:DockeroslaunchComponent},
  {path : 'ec2',component:LaunchEc2InstanceComponent},
  {path : 'calculator',component:CalculatorComponent},
  {path : 'textmsg',component:SendTextMessageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
