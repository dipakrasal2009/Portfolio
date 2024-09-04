import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StartingComponent } from './starting/starting.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ScrapGoogleComponent } from './scrap-google/scrap-google.component';
import { GeoCordinateComponent } from './projects/geo-cordinate/geo-cordinate.component';
import { BulkMailComponent } from './projects/bulk-mail/bulk-mail.component';
import { WhatsappComponent } from './projects/whatsapp/whatsapp.component';
import { LaunchEC2Component } from './projects/launch-ec2/launch-ec2.component';
import { SendMessageComponent } from './projects/send-message/send-message.component';




const routes: Routes = [
  {path : '',component:StartingComponent},
  {path:'about',component:AboutComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'skills',component:SkillsComponent},
  {path:'contact',component:ContactComponent},
  {path : 'scrapgoogle',component:ScrapGoogleComponent},
  {path : 'geo',component:GeoCordinateComponent},
  {path : 'bulk',component:BulkMailComponent},
  {path: 'whatsapp',component:WhatsappComponent},
  {path:'launchec2',component:LaunchEC2Component},
  {path: 'sms',component:SendMessageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
