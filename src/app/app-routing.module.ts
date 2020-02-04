import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { HomeComponent } from './home/home.component';
import { CalcasComponent } from './calcas/calcas.component';
import { SapatosComponent } from './sapatos/sapatos.component';
import { ProductsComponent } from './products/products.component';
import { ContatoComponent } from './contato/contato.component';


const routes: Routes = [
  {
    path: 'Página Inicial',
    component: ProductsComponent,
    data: {
      breadcrumb: 'Página Inicial'
    },
  },
  {
    path: 'camisetas',
    component: CamisetasComponent,
    data: {
      breadcrumb: 'Camisetas'
    },
  },
  {
    path: 'calcas',
    component: CalcasComponent,
    data: {
      breadcrumb: 'Calças'
    },
  },
  {
    path: 'calcados',
    component: SapatosComponent,
    data: {
      breadcrumb: 'Calçados'
    },
  },
  {
    path: 'contato',
    component: ContatoComponent,
    data: {
      breadcrumb: 'Contato'
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
