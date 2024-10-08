import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent {

  public showMenu:boolean = false;

  onShowMenu():void {
    this.showMenu = !this.showMenu;
  }
  
}

