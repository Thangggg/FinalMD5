import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Book} from "../../model/book";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private http : HttpClient,private router : Router) { }

  formCreate! : FormGroup;

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      id : new FormControl(0,Validators.required),
      title : new FormControl('',Validators.minLength(5)),
      author : new FormControl(0,Validators.required),
      description : new FormControl(0,Validators.required)
    })
  }

  create(){
    this.http.post<Book>("http://localhost:3000/books/", this.formCreate.value).subscribe((data)=>{
      console.log(data)
    })

    this.router.navigate([''])
  }
}
