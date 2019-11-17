import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {
    path: 'landing',
      loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingPageModule),
  },
    {
        path: '',
        loadChildren: './pages/tabs/tabs.module#TabsPageModule',
    },
    {
        path: 'user',
        loadChildren: () => import('./pages/user/user.module').then(m => m.UserPageModule),
    },
    {
        path: 'register',
        loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule),
    },
    {
        path: 'match',
        loadChildren: () => import('./pages/match/match.module').then(m => m.MatchPageModule),
    },
    {
        path: 'kangoo-net',
        loadChildren: () =>
            import('./pages/kangoo-net/kangoo-net.module').then(m => m.KangooNetPageModule),
    },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
