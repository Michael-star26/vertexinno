import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articles } from '../interfaces/articles';
import { BehaviorSubject, Observable } from 'rxjs';
interface artticleTypes {
  title: string;
  content: number;
  author: string;
  readTime: number;
}
@Injectable({
  providedIn: 'root'
})

export class ArticlesService {
  private url="http://127.0.0.1:5000/Api"
  private post="addArticle"
  private get="getArticles"
  private articlesDataSubject=new BehaviorSubject('')
  article$=this.articlesDataSubject.asObservable() 
  constructor(private http:HttpClient) { 
    this.getData()
  }

  addArticles(articles:Articles){
    this.http.post(`${this.url}/${this.post}`,articles).subscribe(
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

  getArticles():Observable<artticleTypes[]>{
    return this.http.get<artticleTypes[]>("http://127.0.0.1:5000/Api/getArticles")
  }


  private dataSubject:BehaviorSubject<artticleTypes[]>=new BehaviorSubject<artticleTypes[]>([])
  public mydata$=this.dataSubject.asObservable()
   
  getData(){
    this.http.get('http://127.0.0.1:5000/Api/getArticles').subscribe(
      (response:any)=>{
        console.log('Success')
        this.dataSubject.next(response)
      },
      (error)=>{
        console.error(error) 
      }
    )
  }
}
