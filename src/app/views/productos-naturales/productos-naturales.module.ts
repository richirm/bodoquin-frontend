import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';

import { ProductosNaturalesRoutingModule } from './productos-naturales-routing.module';
import { ProductosNaturalesComponent } from './productos-naturales.component';
import { ProductosNaturalesListadoComponent } from './productos-naturales-listado/productos-naturales-listado.component';

import { ProductosNaturalesService } from './productos-naturales.service';

@NgModule({
  imports: [
    CommonModule,
    
    TarjetasProductoModule,
    
    ProductosNaturalesRoutingModule
  ],
  declarations: [
    ProductosNaturalesComponent, 
    ProductosNaturalesListadoComponent
  ],
  providers: [
    ProductosNaturalesService,
  ]
})
export class ProductosNaturalesModule { }
