import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const AppRoutes = {
  example: 'example'
}

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/landing/landing.module').then(m => m.LandingModule),
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
