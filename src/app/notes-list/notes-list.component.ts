import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllinOneService } from '../allin-one.service';
import { FormControl, FormGroup } from '@angular/forms';
// import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {

  noteCard: any = [];
  wordLimit: number = 45;
  showMore?: boolean;
  searchText: any;
  // showForm?: boolean;

  // noteForm= new FormGroup({
  //   title: new FormControl(''),
  //   body: new FormControl('')
  // })

  // note: any;

  constructor(private router: Router, private allinone: AllinOneService){}

  ngOnInit(){
    this.noteCard = this.allinone.getNote();
    // console.log("noteCard >>>", this.noteCard);
    console.log("notecard >>", this.noteCard);
    
  }

  delete(deleteItem: any, index : number){
    this.noteCard.splice(index ,1)
  }
  // onSubmit(){
  //   console.log("noteForm >>", this.noteForm.value);
  //   let data = this.noteForm.value;
  //   console.log("data >>", data);
  //   localStorage.setItem('note',JSON.stringify(data));
  //   console.log("json stringfy >>", JSON.stringify(data));
  //   this.router.navigateByUrl('/notes-list')
  // }
  // getNote(){
  //   var data = localStorage.getItem('note');
    // this.note = JSON.parse('data');
    // console.log('data: ', JSON.parse('data'));
  //   console.log(data);
    
  //   console.log("get data >>", JSON.parse('data'));
  // }
  // getnote(){
  //   this.allinone.getNote();
  // }

  addNote(){
    this.router.navigateByUrl('/note-write')
  }



}
