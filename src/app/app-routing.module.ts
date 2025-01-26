import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoojaComponent } from './component/pooja/pooja.component';
import { AboutComponent } from './component/about/about.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  { path: '', component: PoojaComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
