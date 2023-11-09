import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './info/about/about.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AboutComponent, HeaderComponent],
  exports: [AboutComponent, HeaderComponent],
})
export class UiModule {}
