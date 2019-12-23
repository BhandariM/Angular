import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {


  serverId = 10;
  serverStatus = "online";

  getServerStatus(){
   return this.serverStatus;
  }

  getServerColor(){
    return this.serverStatus === 'online'? 'green':'red';
  }



  constructor() {
    this. serverStatus = Math.random() > 0.5 ? 'online': 'ofline';
   }

  ngOnInit() {
  }

}
