import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    NavBarComponent,
    HeaderComponent,
    SearchBoxComponent,
    Error404PageComponent,
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    NavBarComponent,
    HeaderComponent,
    Error404PageComponent
  ]
})
export class SharedModule { }
