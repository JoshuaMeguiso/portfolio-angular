import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProjectDetailComponent } from './pages/project-detail/project-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'projects/:slug',
    component: ProjectDetailComponent,
  },

  // 🔴 fallback route (important for portfolio)
  {
    path: '**',
    redirectTo: '',
  },
];
