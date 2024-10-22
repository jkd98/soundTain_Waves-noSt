import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//mport { ProductoComponent } from './components/producto/producto.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ProductoVisComponent } from './components/producto-vis/producto-vis.component';
import { AdministracionProductosComponent } from './pages/administracion-productos/administracion-productos.component';
//import { AdministracionProductosPipe } from './pages/administracion-productos.pipe';



@NgModule({
  declarations: [
//    ProductoComponent,
    BusquedaComponent,
ListadoComponent,
ProductoVisComponent,
AdministracionProductosComponent,
//AdministracionProductosPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
