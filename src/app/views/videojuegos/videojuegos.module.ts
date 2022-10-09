import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TarjetasProductoModule } from '../../components/tarjetas-producto/tarjetas-producto.module';

import { VideojuegosComponent } from './Videojuegos.component';
import { VideojuegosListadoComponent } from './videojuegos-listado/videojuegos-listado.component';
import { VideojuegosDetalleComponent } from './videojuegos-detalle/videojuegos-detalle.component';

import { VideojuegosRoutingModule } from './videojuegos-routing.module';
import { VideojuegosService } from './videojuegos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    TarjetasProductoModule,
    
    VideojuegosRoutingModule,
  ], 
  declarations: [
    VideojuegosComponent,
    VideojuegosListadoComponent,
    VideojuegosDetalleComponent
  ], 
  exports: [
    VideojuegosComponent,
    VideojuegosListadoComponent,
    VideojuegosDetalleComponent
  ],
  providers: [
    VideojuegosService,
  ]
})
export class VideojuegosModule {}
