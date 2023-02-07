import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule} from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  room : any;

  constructor(private activatedRoute : ActivatedRoute, private roomsService : RoomsService) {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.room = this.roomsService.rooms.filter(r => r.id.toString() == id)[0];
    console.log(this.room);
  }
}
