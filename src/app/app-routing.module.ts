import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },

  {
    path:'dashboard', component: DashboardComponent,
    children:[

      {
        path:'', redirectTo:'/dashboard', pathMatch: 'full'
      },
      {
        path:'',loadChildren: () => import('./cita/cita.module').then(m=>m.CitaModule)
      },
      {
        path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
      }



    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
