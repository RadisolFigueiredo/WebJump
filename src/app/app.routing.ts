import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ModuleWithProviders } from '@angular/core';

import { ContatoComponent } from './contato/contato.component';
import { CamisetasComponent } from './products/camisetas/camisetas.component';
import { CalcasComponent } from './products/calcas/calcas.component';
import { SapatosComponent } from './products/sapatos/sapatos.component';

const APP_ROUTES: Routes = [
  { path: '', component: ProductsComponent,     data: {
    breadcrumb: ''
  }, },
  { path: 'camisetas', component: CamisetasComponent },
  { path: 'calcas', component: CalcasComponent },
  { path: 'calcados', component: SapatosComponent },
  { path: 'contato', component: ContatoComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
