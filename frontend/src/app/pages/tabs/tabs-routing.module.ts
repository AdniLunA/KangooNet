import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
          path: 'conference',
        children: [
          {
            path: '',
              loadChildren: () =>
                  import('../conference/conference.module').then(m => m.ConferencePageModule),
          },
        ],
      },
      {
          path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
          },
        ],
      },
      {
          path: 'dashboard',
        children: [
          {
            path: '',
              loadChildren: () =>
                  import('../dashboard/dashboard.module').then(m => m.DashboardPageModule),
          },
        ],
      },
      {
        path: '',
          redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
      redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
