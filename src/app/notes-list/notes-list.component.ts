import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllinOneService } from '../allin-one.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {

  noteCard: any = [];
  wordLimit: number = 45;
  showMore?: boolean;

  constructor(private route: Router, private allinone: AllinOneService){}

  ngOnInit(){
    this.noteCard = this.allinone.getNote();
    // console.log("noteCard >>>", this.noteCard);
    console.log("noteCard >>>", this.noteCard);
    
  }

  delete(deleteItem: any, index : number){
    this.noteCard.splice(index ,1)
  }

  addNote(){
    this.route.navigateByUrl('/note-write')
  }

}
