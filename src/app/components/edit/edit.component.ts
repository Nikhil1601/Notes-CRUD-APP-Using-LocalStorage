import { Component, OnInit} from '@angular/core';
import { NoteService } from '../../services/note.service';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Note } from '../../models/note';
import { FormsModule } from '@angular/forms';
import { NotExpr } from '@angular/compiler';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, RouterLink,RouterModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  noteId:number|any
  note:Note|any
  constructor(private noteServices:NoteService , private activatedroute: ActivatedRoute,private router: Router){
    
  }
  ngOnInit(): void {
      this.activatedroute.params.subscribe(params =>{
        this.noteId=params['id']
      // this.noteServices.get(this.noteId).subscribe(x=>{
      //   this.note = x
      // })
      console.log(this.noteId)
      if(this.noteId>=0){
      this.note = this.noteServices.get(this.noteId)
      console.log(this.note)}
      else{
        console.log('Hello World')
      }
      })
  }
  updateNote():void{
    // this.noteServices.update(this.noteId).subscribe(x=>{
    //   console.log(x)
    // })
    this.noteServices.update(this.note)
    this.router.navigate([''])
    alert('File edited')
  }
  goback(){
    this.router.navigate([''])
   }
}
