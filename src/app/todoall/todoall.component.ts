import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todoall',
  templateUrl: './todoall.component.html',
  styleUrls: ['./todoall.component.css']
})
export class TodoallComponent implements OnInit {

  constructor(private api:ApiService) {this.datafraomApi() }

  datafraomApi=()=>{
    this.api.fetchtodo().subscribe(
      (Response)=>{
        this.todo=Response
      }
    )
  }

  todo:any=[ ]
  

 


  ngOnInit(): void {
  }

}
