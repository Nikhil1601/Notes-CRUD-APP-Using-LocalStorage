import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  note: Note[]=[]
  // x:string=''

  constructor(private notesService: NoteService,private route: ActivatedRoute,private router: Router,) {
  }
  ngOnInit(): void {
      // this.notesService.getAll().subscribe(x=>{
      //   console.log(x)
      //   this.note = x
      // })
      this.note =this.notesService.getAll()
      
  }
  deleteNote(noteId: number): void {
    // this.notesService.delete(noteId).subscribe(() => {
    //   console.log('Note deleted');
    if(confirm('Do you want to delete ?')){
    this.notesService.delete(noteId)
    // this.router.navigate([''],{ replaceUrl: true })
    window.location.reload()}
    else{
      return
    }
    
  }
    getBgColor(x:String|null):string{
      console.log(x)
      if(x){
      return `background-color:${x}`}
      else{
        return `background-color:black`
      }
    }
    
    // getBgColor(this.x){
    //   return `background-color:${this.x}`
    // }
    



}
