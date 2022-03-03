import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listBook : Book [] = []
  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.getListBook()
  }

  getListBook(){
    this.http.get<Book[]>("http://localhost:3000/books").subscribe((data)=>{
      this.listBook = data
    })
  }

  delete(id : number){
    this.http.delete("http://localhost:3000/books/" + id).subscribe((data)=>{
      this.getListBook()
    })
    this.getListBook()
  }

}
