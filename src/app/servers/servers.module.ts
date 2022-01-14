import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';



@NgModule({
  declarations: [
    ServersComponent,
    ServerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServersComponent
  ]
})
export class ServersModule { }
