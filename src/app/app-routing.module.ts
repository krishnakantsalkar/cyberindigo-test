import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./view/pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'classes',
        loadChildren: () =>
          import('./view/pages/classes/classes.module').then(
            (m) => m.ClassesModule
          ),
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('./view/pages/chat/chat.module').then((m) => m.ChatModule),
      },
      {
        path: 'learning-plan',
        loadChildren: () =>
          import('./view/pages/learning-plan/learning-plan.module').then(
            (m) => m.LearningPlanModule
          ),
      },
      {
        path: 'resources',
        loadChildren: () =>
          import('./view/pages/resources/resources.module').then(
            (m) => m.ResourcesModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./view/pages/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
