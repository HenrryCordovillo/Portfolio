import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonPageComponent } from '@layout/pages/skeleton-page/skeleton-page.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonPageComponent,
    children: [
      {
        path: 'about',
        loadChildren: () =>
          import('./modules/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./modules/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
