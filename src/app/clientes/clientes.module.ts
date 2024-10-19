import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutcltPageComponent } from './pages/layoutclt-page/layoutclt-page.component';
import { FiltersComponent } from './components/filters/filters.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { HeroNosotrosComponent } from './components/hero-nosotros/hero-nosotros.component';



@NgModule({
  declarations: [
    LayoutcltPageComponent,
    FiltersComponent,
    HomePageComponent,
    ListadoProductosComponent,
    HeroNosotrosComponent
  ],
  imports: [
    CommonModule,
    
    ClientesRoutingModule,
    SharedModule
  ]
})
export class ClientesModule { }
