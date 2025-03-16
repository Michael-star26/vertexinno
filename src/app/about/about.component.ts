import { Component } from '@angular/core';
import { TuiAppearance, TuiButton, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiAvatarStack, TuiChip, TuiProgress } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium, TuiCell } from '@taiga-ui/layout';
import {TuiRipple} from '@taiga-ui/addon-mobile';
import { NgxDotpatternComponent } from '@omnedia/ngx-dotpattern';

@Component({
  selector: 'app-about',
  imports: [
    TuiAvatarStack,
    TuiAvatar,
    TuiCardLarge,
    TuiChip,
    TuiProgress,
    TuiTitle,
    TuiCell,
    TuiAppearance,
    TuiButton,
    TuiRipple,
    NgxDotpatternComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less'
}) 
export class AboutComponent {

}
