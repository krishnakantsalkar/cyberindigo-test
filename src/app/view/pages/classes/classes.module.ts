import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { RouterModule } from '@angular/router';
import { classesRoutes } from './classes.routes';

@NgModule({
  declarations: [ClassesComponent],
  imports: [CommonModule, RouterModule.forChild(classesRoutes)],
})
export class ClassesModule {}
