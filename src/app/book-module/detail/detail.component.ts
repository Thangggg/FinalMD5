import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../../service/book.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book = new Book(0,"","","");
  id! : number;

  constructor(private bookService : BookService, private router : ActivatedRoute) {
    this.router.paramMap.subscribe((param)=>{
      this.id = Number(<string>param.get('id'));
      this.detail()
    })
  }

  ngOnInit(): void {
  }

  detail(){
    this.bookService.findById(this.id).subscribe((data)=>{
      this.book = data
    })
  }

}
