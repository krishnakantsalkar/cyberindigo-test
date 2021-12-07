import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesComponent } from './resources.component';
import { RouterModule } from '@angular/router';
import { resourceRoutes } from './resources.routes';

@NgModule({
  declarations: [ResourcesComponent],
  imports: [CommonModule, RouterModule.forChild(resourceRoutes)],
})
export class ResourcesModule {}
