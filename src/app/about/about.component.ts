import { Component } from '@angular/core';
import { TuiAppearance, TuiButton, TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiAvatarOutline, TuiAvatarStack, TuiBadgedContent, TuiChip, TuiConnected, TuiProgress } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium, TuiCell } from '@taiga-ui/layout';
import {TuiRipple} from '@taiga-ui/addon-mobile';
import { NgxDotpatternComponent } from '@omnedia/ngx-dotpattern';
import { NgxConnectionBeamComponent } from '@omnedia/ngx-connection-beam';
import { NgxFastMarqueeModule } from "ngx-fast-marquee";

@Component({
  selector: 'app-about',
  imports: [
    TuiAvatarOutline,
    TuiAvatar,
    TuiCardLarge,
    TuiChip,
    TuiProgress,
    TuiTitle,
    TuiCell,
    TuiAppearance,
    TuiButton,
    TuiRipple,
    NgxDotpatternComponent,
    NgxConnectionBeamComponent,
    NgxFastMarqueeModule,
    TuiCardMedium,
    TuiConnected,
    TuiIcon,
    TuiBadgedContent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less'
}) 
export class AboutComponent {

}
