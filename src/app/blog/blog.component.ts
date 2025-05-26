import { Component, OnInit } from '@angular/core';
import { TuiRipple } from '@taiga-ui/addon-mobile';
import { TuiAppearance, TuiButton, TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiChip, TuiFade } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium, TuiCell, TuiHeader } from '@taiga-ui/layout';
import { NgxFastMarqueeModule } from "ngx-fast-marquee";
import { ArticlesService } from '../services/articles.service';
import { Articles } from '../interfaces/articles';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface artticleTypes {
  title: string;
  content: number;
  author: string;
  readTime: number;
  date:string
}

@Component({
  selector: 'app-blog',
  imports: [
    NgxFastMarqueeModule,
    TuiCardLarge,
    TuiAppearance,
    TuiCardMedium,
    TuiHeader,
    TuiTitle,
    TuiAvatar,
    TuiIcon,
    TuiButton,
    TuiCell,
    TuiRipple,
    TuiFade,
    CommonModule,
    TuiChip
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.less'
})
export class BlogComponent implements OnInit{
  constructor(private article:ArticlesService,private http:HttpClient ){}
  data:any[]=[]
  error=''
  url:string=''
  info:any[]=[]
  ngOnInit(): void {
    this.article.getArticles().subscribe(
      (response:any) => {
        this.data = response
      },
      (err) => {
        this.error = err;
      }
    )

  //
  this.article.mydata$.subscribe(
    (res)=>{
      this.info=res
    }
  )  

  this.article.getImage().subscribe(
    (response)=>{
      this.url=response.imgUrl
      console.log(this.url)
    },
    (error)=>{
      this.error=error
    }
  )
  }

}
