import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      },
      {
        path: 'tab4',
        loadChildren: () =>
          import('../tab4/tab4.module').then((m) => m.Tab4PageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
  {
    path: 'download',
    loadChildren: () =>
      import('../tab4/download/download.module').then(
        (m) => m.DownloadPageModule
      ),
  },
  {
    path: 'glosarium',
    loadChildren: () =>
      import('../tab4/glosarium/glosarium.module').then(
        (m) => m.GlosariumPageModule
      ),
  },
  {
    path: 'sim',
    loadChildren: () =>
      import('../tab2/sim/sim.module').then((m) => m.SimPageModule),
  },
  {
    path: 'tips',
    loadChildren: () =>
      import('../tab2/tips/tips.module').then((m) => m.TipsPageModule),
  },
  {
    path: 'berkendara',
    loadChildren: () =>
      import('../tab2/berkendara/berkendara.module').then(
        (m) => m.BerkendaraPageModule
      ),
  },
  {
    path: 'jalan',
    loadChildren: () =>
      import('../tab2/jalan/jalan.module').then((m) => m.JalanPageModule),
  },
  {
    path: 'markah',
    loadChildren: () =>
      import('../tab2/markah/markah.module').then((m) => m.MarkahPageModule),
  },
  {
    path: 'rambu',
    loadChildren: () =>
      import('../tab2/rambu/rambu.module').then((m) => m.RambuPageModule),
  },
  {
    path: 'pelanggaran',
    loadChildren: () =>
      import('../tab2/pelanggaran/pelanggaran.module').then(
        (m) => m.PelanggaranPageModule
      ),
  },
  {
    path: 'telepon',
    loadChildren: () =>
      import('../tab1/telepon/telepon.module').then((m) => m.TeleponPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
