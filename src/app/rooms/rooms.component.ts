import { Component, OnInit } from '@angular/core';
import { RoomListModel, RoomModel } from '../room-model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  RoomList: RoomListModel = {
    TotalRoom: 5,
    availableRoom: 2,
    bookedRoom: 3,
  };

  rooms: RoomModel[] = [
    {
      roomId: 1,
      roomType: "Luxury",
      amenties: "Tv, Bath, Laounch, kicthen",
      photos: "yes",
      price: 200,
      booked: true,
      checkInTime: '11-Nov-2022',
      checkOutTime: '11-Nov-2022',
    },
    {
      roomId: 2,
      roomType: "Good",
      amenties: "Tv, Tsc, Laounch, kicthen",
      photos: "gud",
      price: 1200,
      booked: false,
      checkInTime: '11-Nov-2022',
      checkOutTime: '11-Nov-2022',
    },
    {
      roomId: 3,
      roomType: "Acha",
      amenties: "Tv, Bath, Laounch, kicthen",
      photos: "ach",
      price: 100,
      booked: true,
      checkInTime: '11-Nov-2022',
      checkOutTime: '11-Nov-2022',
    },
    {
      roomId: 4,
      roomType: "Luxury",
      amenties: "Tv, Gala, Laounch, kicthen",
      photos: "yes",
      price: 2100,
      booked: false,
      checkInTime: '11-Nov-2022',
      checkOutTime: '11-Nov-2022',
    },
    {
      roomId: 5,
      roomType: "Luxury",
      amenties: "Tv, Bath, Laounch, kicthen",
      photos: "yes",
      price: 200,
      booked: true,
      checkInTime: '11-Nov-2022',
      checkOutTime: '11-Nov-2022',
    },

  ]

  hideRooms = false;
  constructor() { }

  ngOnInit(): void { }
}
