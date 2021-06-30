import { Component, OnInit } from '@angular/core';
import { Yorum } from './yorum';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-yorumlar',
  templateUrl: './yorumlar.component.html',
  styleUrls: ['./yorumlar.component.css']
})
export class YorumlarComponent implements OnInit {

  yorum:Yorum[];

  inputYorum:string = ''

  constructor() { }

  ngOnInit(): void {
    this.yorum = [
      {
        content: 'İlk Yorum Girildi',
        completed: false
      }
      
    ]
  }

  toggleDone (id:number) {
    this.yorum.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteYorum (id:number) {
    this.yorum = this.yorum.filter((v, i) => i !== id);
  }

  addYorum () {
    this.yorum.push({
      content: this.inputYorum,
      completed: false
    });

    this.inputYorum = "";
  }

  
}
