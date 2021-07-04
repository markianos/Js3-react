import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './views/cv/cv.component';
import { HomeComponent } from './views/home/home.component';
import { KontaktaComponent } from './views/kontakta/kontakta.component';
import { OmComponent } from './views/om/om.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'om', component: OmComponent},
  { path: 'cv', component: CvComponent},
  { path: 'kontakta', component: KontaktaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
