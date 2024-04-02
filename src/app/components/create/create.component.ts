import { Component } from '@angular/core';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  newNote:Note={
    id:0,
    title: '',
    description: '',
    date: new Date(),
    color: ''
  }
  componentCreated = false;


  constructor(private noteServices:NoteService,private activatedroute: ActivatedRoute,private router: Router){
    
  }

  createNew():void{
    console.log(this.newNote)
    // this.noteServices.create(this.newNote).subscribe(x=>{
    //   console.log(this.newNote)
    // })
    this.noteServices.create(this.newNote)
    console.log(this.newNote)
    alert("New element created")
    this.newNote={id:0,
      title: '',
      description: '',
      date: new Date(),
      color: ''}
      this.componentCreated = true
  }
  goback(){
   this.router.navigate([''])
  }
  // showPopup() {
  //   // Show the popup
  //   const popup = document.getElementById('popup');
  //   popup.style.display = 'block';

  //   // Hide the popup after 5 seconds
  //   setTimeout(() => {
  //     popup.style.display = 'none';
  //   }, 5000);
  // }
}
