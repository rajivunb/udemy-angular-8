import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  @Output() menuSelected = new EventEmitter<string>();

  onSelect(menuItem: string) {
    this.menuSelected.emit(menuItem);
  }
}
