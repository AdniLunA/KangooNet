import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingPageModule)
  },
    {
        path: '',
        loadChildren: './pages/tabs/tabs.module#TabsPageModule',
    },
    {
        path: 'user',
        loadChildren: () => import('./pages/user/user.module').then(m => m.UserPageModule)
    },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
