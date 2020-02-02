import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ModuleWithProviders } from '@angular/core';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { CalcasComponent } from './calcas/calcas.component';
import { SapatosComponent } from './sapatos/sapatos.component';
import { ContatoComponent } from './contato/contato.component';

const APP_ROUTES: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'camisetas', component: CamisetasComponent },
  { path: 'calcas', component: CalcasComponent },
  { path: 'sapatos', component: SapatosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
