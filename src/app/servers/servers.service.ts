import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
  ]
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];
  constructor(private serversService: ServersService) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }

}
