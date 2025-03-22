import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { TuiAppearance, TuiButton, TuiIcon, TuiNotification } from '@taiga-ui/core';
import { TuiCardLarge, TuiCardMedium, TuiNavigation } from '@taiga-ui/layout';
import { NgxCrypticTextComponent } from '@omnedia/ngx-cryptic-text';
import { NgxRetroGridComponent } from '@omnedia/ngx-retro-grid';
import { TuiAvatar, TuiAvatarOutline, TuiAvatarStack, TuiChip } from '@taiga-ui/kit';
import { TuiRipple } from '@taiga-ui/addon-mobile';
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
    TuiAvatarOutline,
    TuiCardLarge,
    TuiChip,
    TuiRipple,
    TuiCardMedium
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}
