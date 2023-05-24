import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AllinOneService } from '../allin-one.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent {
  constructor(private router: Router, private allinOne: AllinOneService){}

  // noteForm = new FormGroup({
  //   title : new FormControl(''),
  //   body : new FormControl('')
  // });

  noteForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  })
  note: any;

    onSubmit(){
    console.log("noteForm >>", this.noteForm.value);
    // console.log("noteForm >>", this.noteForm.value.title);
    // console.log("noteForm >>", this.noteForm.value.body);
    // this.router.navigateByUrl('/notes-list');
    let data = this.noteForm.value;
    console.log("data >>", data);
    localStorage.setItem('note',JSON.stringify(data));
    console.log("json stringfy >>", JSON.stringify(data));
    this.router.navigateByUrl('/notes-list')
  }
  // getNote(){
  //   var data = localStorage.getItem('note');
    // this.note = JSON.parse('data');
    // console.log('data: ', JSON.parse('data'));
  //   console.log(data);
    
  //   console.log("get data >>", JSON.parse('data'));
  // }
  getnote(){
    this.allinOne.getNote();
  }

}
