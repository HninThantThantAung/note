import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllinOneService {

  constructor() { }

  note?: any = [];

  getNote(){
    let length = this.note.length;
    console.log("note array", this.note);
    
    let notedata: any = localStorage.getItem('note');
    console.log("data",notedata);
    
    // console.log("get data >>", JSON.parse('data'));
    // console.log("length:", this.note.length);
    
    // this.note[0] = JSON.parse('{"title": "reminder", "body":"11AM the body11AM the body11AM the body11AM the body11AM the body11AM the body"}');
    // this.note[1] = JSON.parse('{"title": "alarm", "body":"12AM"}');
    this.note[length]= JSON.parse(notedata);
    console.log("Json format of data ", this.note);
    
    return this.note;
  }
}
