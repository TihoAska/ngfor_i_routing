
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() {

   }

  rooms = [
    {
      id : 1,
      name : "serverRoom",
      capacity : 0,
      isOccupied : false
    },
    {
      id : 2,
      name : "conferenceRoom",
      capacity : 10,
      isOccupied : false
    },
    {
      id : 3,
      name : "director",
      capacity : 1,
      isOccupied : false
    },
    {
      id : 4,
      name : "support",
      capacity : 2,
      isOccupied : false
    },
    {
      id : 5,
      name : "techLead",
      capacity : 2,
      isOccupied : false
    },
    {
      id : 6,
      name : "classRoom",
      capacity : 12,
      isOccupied : true
    },
    {
      id : 7,
      name : "teamLead",
      capacity : 2,
      isOccupied : false
    },
    {
      id : 8,
      name : "devs",
      capacity : 2,
      isOccupied : false
    }
  ];
}
