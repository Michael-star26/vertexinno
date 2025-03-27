import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validator, Validators } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiAppearance, TuiButton, TuiError, TuiIcon, TuiLabel, TuiNotification, TuiTextfield } from '@taiga-ui/core';
import { TuiFieldErrorPipe, TuiSwitch, TuiTooltip } from '@taiga-ui/kit';
import { TuiCardLarge, TuiForm, TuiHeader } from '@taiga-ui/layout';
import {TuiInputDateModule, TuiInputDateTimeModule, TuiTextareaModule} from '@taiga-ui/legacy';
import { ArticlesService } from '../../services/articles.service';
import { Articles } from '../../interfaces/articles';
@Component({
  selector: 'app-add-articles',
  imports: [
    ReactiveFormsModule,
    TuiForm,
    TuiNotification,
    TuiAppearance,
    TuiButton,
    TuiError,
    TuiTextfield,
    TuiIcon,
    TuiCardLarge,
    TuiHeader,
    TuiLabel,
    TuiFieldErrorPipe,
    AsyncPipe,
    TuiSwitch,
    TuiTooltip,
    TuiInputDateTimeModule,
    FormsModule,
    TuiInputDateModule,
    TuiTextareaModule,
    CommonModule
  ],
  templateUrl: './add-articles.component.html',
  styleUrl: './add-articles.component.less'
})
export class AddArticlesComponent implements OnInit{
  articleForm:FormGroup
  message=''
  error=''
  submitted=false
  constructor(private article:ArticlesService){
    this.articleForm=new FormGroup({
      title:new FormControl('',Validators.required),
      author:new FormControl('',Validators.required),
      content:new FormControl('',Validators.required),
      views:new FormControl(''),
      commentEnabled:new FormControl(''),
      readTime:new FormControl('',Validators.required)
    })
  }
  
  submits(){
    const articles:Articles={
      title:this.articleForm.value.title,
      author:this.articleForm.value.author,
      commentEnabled:this.articleForm.value.commentEnabled,
      content:this.articleForm.value.content,
      date:Date.now(),
      readTime:this.articleForm.value.readTime,
      featuredImage:"No image",
      views:9
    }

    this.article.addArticles(articles)
    this.submitted=true
  }

  ngOnInit(): void {
    this.article.article$.subscribe(
      (response:any)=>{
        this.message=response
      },
      (error)=>{
        this.error=error
      }
    )
  }
}
