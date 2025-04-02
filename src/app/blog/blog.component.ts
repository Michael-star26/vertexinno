import { Component } from '@angular/core';
import { TuiRipple } from '@taiga-ui/addon-mobile';
import { TuiAppearance, TuiButton, TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiChip, TuiFade } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium, TuiCell, TuiHeader } from '@taiga-ui/layout';
import { NgxFastMarqueeModule } from "ngx-fast-marquee";
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
    TuiChip
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.less'
})
export class BlogComponent {

}
