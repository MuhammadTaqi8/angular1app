export class RoomListModel {
  TotalRoom: number;
  availableRoom: number;
  bookedRoom: number;
  constructor() {
    this.TotalRoom = 0;
    this.availableRoom = 0;
    this.bookedRoom = 0;
  }
}

export class RoomModel {
  roomId: number;
  roomType: string;
  amenties: string;
  price: number;
  photos: string;
  booked: boolean;
  checkInTime: string;
  checkOutTime: string;
  constructor(roomID: number){
    this.roomId = roomID;
    this.roomType = '';
    this.amenties = '';
    this.price = 0;
    this.photos = '';
    this.booked = false;
    this.checkInTime = '';
    this.checkOutTime = '';
  }
}
