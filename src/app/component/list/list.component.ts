import { RoomsService } from './../../services/rooms.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  //dependency injection -> u ctor predas nesta
  //servis je komponenta za dijelit podatke
  //ng g s services/rooms
  rooms : any[];

  constructor(private router : Router, private roomsService : RoomsService) {
    this.rooms = roomsService.rooms;
    // for(let i=0; i<this.rooms.length; i++)
    // {
    //   console.log(roomsService.rooms[i].id);
    // }
  }
  
  showDetails(id : number){
    this.router.navigate(["/detail", id])
  }  
}
