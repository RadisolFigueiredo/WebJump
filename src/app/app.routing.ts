import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ModuleWithProviders } from '@angular/core';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { CalcasComponent } from './calcas/calcas.component';
import { SapatosComponent } from './sapatos/sapatos.component';
import { ContatoComponent } from './contato/contato.component';

const APP_ROUTES: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'camisetas', component: CamisetasComponent },
  { path: 'calcas', component: CalcasComponent },
  { path: 'calcados', component: SapatosComponent },
  { path: 'contato', component: ContatoComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
