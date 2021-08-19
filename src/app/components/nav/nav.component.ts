import { 
  Component, 
  Input, 
  OnChanges 
} from '@angular/core';

@Component({
  selector: 'bodoquin-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnChanges {
  
  @Input() isClickedMenu: boolean = false;
  
  menuColapsado: boolean = true;
  
  ngOnChanges(changes) {
    if(changes.isClickedMenu) {
      if(this.isClickedMenu === true) {
        this.colapsarExpandirMenu();
      }
    }
  }
  
  colapsarExpandirMenu() {
    if(this.menuColapsado === true) {
      (document.querySelector('.nav_menu') as HTMLElement).classList.remove('colapsado');
      (document.querySelector('.nav_backdrop') as HTMLElement).style.display = 'block';
      this.menuColapsado = false;
    } else {
      (document.querySelector('.nav_menu') as HTMLElement).classList.add('colapsado');
      (document.querySelector('.nav_backdrop') as HTMLElement).style.display = 'none';
      this.menuColapsado = true;
    }
  }
}