import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ProductoInterface } from '../../../core/interfaces/producto.interface';

@Component({
  selector: 'bodoquin-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.scss']
})
export class TarjetaProductoComponent {
  @Input() producto: ProductoInterface;
  
  @Output() onClickAgregar: EventEmitter<ProductoInterface> = new EventEmitter();
}