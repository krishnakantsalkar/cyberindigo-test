import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { RouterModule } from '@angular/router';
import { chatRoutes } from './chat.routes';

@NgModule({
  declarations: [ChatComponent],
  imports: [CommonModule, RouterModule.forChild(chatRoutes)],
})
export class ChatModule {}
