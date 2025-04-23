import { Component } from '@angular/core';
import { AddArticlesComponent } from '../add-articles/add-articles.component';

@Component({
  selector: 'app-articles',
  imports: [
    AddArticlesComponent
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.less'
})
export class ArticlesComponent {

}
