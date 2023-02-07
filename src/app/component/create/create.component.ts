import { Component } from '@angular/core';
import { RoomsService } from './../../services/rooms.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent 
{
  feedbackMessage = " ";
  descriptionMessage = " ";
  rooms : any[];
  getId : number = 1;
  getName : string = " ";
  getCapacity : number = 0;
  getIsOccupied : boolean = false;

  constructor(roomsService : RoomsService){
    this.rooms = roomsService.rooms;
  }

  Occupied(){
    this.getIsOccupied = !this.getIsOccupied;
    console.log("Is occupied: " + this.getIsOccupied);
  }

  Create()
  {
    for(let i=0; i<this.rooms.length; i++)
    {
      if(this.getId == this.rooms[i].id)
      {
        this.feedbackMessage = "Room with the same id already exists"
        console.log("Room with the same id already exists");
        return;
      }
      if(this.getName == " "){
        this.feedbackMessage = "Name can't be empty!";
        console.log("Name can't be empty");
        return;
      }
      if(this.getName == this.rooms[i].name)
      {
        this.feedbackMessage = "Room with the same name already exists";
        console.log("Room with the same name already exists");
        return;
      }
    }
    console.log("Your room is created\n");
    this.feedbackMessage = "Your room is created!";
    this.descriptionMessage = "Id: " + this.getId + "   Name: " + this.getName + " Capacity: " + this.getCapacity + " Is occupied: " + this.getIsOccupied;
    console.log("Id: " + this.getId + " Name: " + this.getName + " Capacity: " + this.getCapacity + " isOccupied: " + this.getIsOccupied);
  
    this.rooms.push(
      {
        id : this.getId,
        name : this.getName,
        capacity : this.getCapacity,
        isOccupied : this.getIsOccupied
      }
    )

    return this.rooms;
  }
}
