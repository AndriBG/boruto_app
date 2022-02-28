import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'portada',
    component: HomePage,
    children: [
      {
        path: 'portada',
        children:[
          {
            path: '',
            loadChildren: () => import('../pages/portada/portada.module').then( m => m.PortadaPageModule)
          }
        ]
      },
      {
        path: 'personajes',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/personajes/personajes.module').then( m => m.PersonajesPageModule)
          }
        ]
      },
      {
        path: 'momentos',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/momentos/momentos.module').then( m => m.MomentosPageModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/about/about.module').then( m => m.AboutPageModule)
          }
        ]
      },
      {
        path: 'vida',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/vida/vida.module').then( m => m.VidaPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'portada',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'portada',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
