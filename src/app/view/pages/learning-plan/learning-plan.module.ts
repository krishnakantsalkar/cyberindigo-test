import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningPlanComponent } from './learning-plan.component';
import { RouterModule } from '@angular/router';
import { learningPlanRoutes } from './learning-plan.routes';

@NgModule({
  declarations: [LearningPlanComponent],
  imports: [CommonModule, RouterModule.forChild(learningPlanRoutes)],
})
export class LearningPlanModule {}
