import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterModule } from '@angular/router';
import { settingsRoutes } from './settings.routes';

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, RouterModule.forChild(settingsRoutes)],
})
export class SettingsModule {}
