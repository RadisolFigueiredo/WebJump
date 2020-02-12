import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { ProductsComponent } from './products/products.component';
import { CamisetasComponent } from './products/camisetas/camisetas.component';
import { CalcasComponent } from './products/calcas/calcas.component';
import { SapatosComponent } from './products/sapatos/sapatos.component';



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
