import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  servers = [
    {
      instanceType: 'medium',
      name: 'Dev Environment',
      status: 'up',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'Test Environment',
      status: 'up',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'SIT Environmet',
      status: 'down',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Local',
      status: 'up',
      started: new Date(15, 1, 2017)
    }
  ];

  ngOnInit() {
  }

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'up',
      'list-group-item-warning': server.status === 'down',
      'list-group-item-danger': server.status === 'critical'
    };
  }

}
