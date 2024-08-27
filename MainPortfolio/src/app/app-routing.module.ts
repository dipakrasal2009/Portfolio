import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StartingComponent } from './starting/starting.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ScrapGoogleComponent } from './scrap-google/scrap-google.component';

const routes: Routes = [
  {path : '',component:StartingComponent},
  {path:'about',component:AboutComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'skills',component:SkillsComponent},
  {path:'contact',component:ContactComponent},
  {path : 'scrapgoogle',component:ScrapGoogleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
