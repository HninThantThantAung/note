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
    
    this.note[length]= JSON.parse(notedata);
    console.log("Json format of data ", this.note);
    
    return this.note;
  }
}
