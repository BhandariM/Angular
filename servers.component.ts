import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
world = 'jaanu';
allowServer = false;
serverCreation = "server not loaded";
serverName = 'TestServer';
serverCreated = false;
servers = ['server1', 'server2'];

  constructor() { 
    setTimeout(() => {
     this. allowServer = true;
    },2000)
  }

  onBtnClick(){
    this. serverCreated = true;
    this.servers.push(this.serverName);
    return this. serverCreation = "Server Loaded" + this.serverName;
  }

  onServerUpdate(event:Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }


  ngOnInit() {
  }

}
