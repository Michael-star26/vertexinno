import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { TuiAppearance, TuiButton, TuiIcon, TuiNotification } from '@taiga-ui/core';
import { TuiNavigation } from '@taiga-ui/layout';
import { NgxCrypticTextComponent } from '@omnedia/ngx-cryptic-text';
import { NgxRetroGridComponent } from '@omnedia/ngx-retro-grid';
@Component({
  selector: 'app-home',
  imports: [
    NavComponent,
    TuiIcon,
    TuiNotification,
    TuiButton,
    TuiAppearance,
    TuiNavigation,
    NgxCrypticTextComponent,
    NgxRetroGridComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}
