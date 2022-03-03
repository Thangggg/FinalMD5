import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http : HttpClient) { }

  findAll() : Observable<Book[]>{
    return this.http.get<Book[]>("http://localhost:3000/books");
  }

  findById(id : number) : Observable<Book>{
    return this.http.get<Book>("http://localhost:3000/books/" + id)
  }

  delete(id : number) : Observable<void>{
    return this.http.delete<void>("http://localhost:3000/books/" + id);
  }

  create(book : Book) : Observable<any>{
    return this.http.post("http://localhost:3000/books",book);
  }

  edit(book : Book): Observable<any>{
    return this.http.put("http://localhost:3000/books/" + book.id, book)
  }
}
