import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { TuiAppearance, TuiButton, TuiIcon, TuiNotification } from '@taiga-ui/core';
import { TuiCardLarge, TuiNavigation } from '@taiga-ui/layout';
import { NgxCrypticTextComponent } from '@omnedia/ngx-cryptic-text';
import { NgxRetroGridComponent } from '@omnedia/ngx-retro-grid';
import { TuiAvatar, TuiAvatarStack, TuiChip } from '@taiga-ui/kit';
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
    NgxRetroGridComponent,
    TuiAvatar,
    TuiAvatarStack,
    TuiCardLarge,
    TuiChip
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}
