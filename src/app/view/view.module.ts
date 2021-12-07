import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutModule, PagesModule],
  exports: [CommonModule, LayoutModule, PagesModule],
})
export class ViewModule {}
