import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SendMailComponent } from './send-mail/send-mail.component';

const routes: Routes = [
  {path : '',component : ProfileComponent},
  {path : 'mail',component:SendMailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
