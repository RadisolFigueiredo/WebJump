import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { SapatosComponent } from './sapatos/sapatos.component';
import { CalcasComponent } from './calcas/calcas.component';
import { ContatoComponent } from './contato/contato.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './filter/filter.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    HeaderComponent,
    ProductDetailsComponent,
    CamisetasComponent,
    SapatosComponent,
    CalcasComponent,
    ContatoComponent,
    FilterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
