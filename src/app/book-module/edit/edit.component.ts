import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../service/book.service";
import {Book} from "../../model/book";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id! : number;
  formEdit! : FormGroup;

  constructor(private http : HttpClient,private router : Router, private bookService: BookService, private routerActive : ActivatedRoute) {
    this.routerActive.paramMap.subscribe((param)=>{
      this.id = Number(<string>param.get('id'));
      this.showFormEdit()
    })
  }

  ngOnInit(): void {
    this.formEdit = new FormGroup({
      id : new FormControl(),
      title : new FormControl(),
      author : new FormControl(),
      description : new FormControl()
    })
  }

  showFormEdit(){
    this.bookService.findById(this.id).subscribe((data)=>{
      this.formEdit = new FormGroup({
        id : new FormControl(data.id),
        title : new FormControl(data.title),
        author : new FormControl(data.author),
        description : new FormControl(data.description),
      })
    })
  }


  edit(){
    this.http.put<Book>("http://localhost:3000/books/" + this.id , this.formEdit.value).subscribe((data)=>{
      console.log(this.id)
      console.log(this.formEdit.value)
    })
    this.router.navigate([""])
  }

}
