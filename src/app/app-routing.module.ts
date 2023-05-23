import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailsComponent } from './note-details/note-details.component';

const routes: Routes = [
  {
    path: '',
    component: NotesListComponent
  },
  {
    path: 'notes-list',
    component: NotesListComponent
  },
  {
    path: 'note-write',
    component: NoteDetailsComponent
  },
  {
    path: 'note-write/:id',
    component: NoteDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
