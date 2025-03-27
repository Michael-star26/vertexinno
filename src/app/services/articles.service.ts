import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articles } from '../interfaces/articles';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private url="http://127.0.0.1:5000/Api/addArticle"
  private articlesDataSubject=new BehaviorSubject('')
  article$=this.articlesDataSubject.asObservable() 
  constructor(private http:HttpClient) { }
  addArticles(articles:Articles){
    this.http.post(this.url,articles).subscribe(
      (response:any)=>{
        this.articlesDataSubject.next(response.message)
        console.log("success "+ response.message)
      },
      (error)=>{
        this.articlesDataSubject.next(error.error.error)
        console.error(error)
      }
    )
  }
}
