import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiAppearance, TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium, TuiCell, TuiHeader } from '@taiga-ui/layout';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NgxBackgroundBeamsComponent } from "@omnedia/ngx-background-beams";
import { NgxFastMarqueeModule } from "ngx-fast-marquee";
@Component({
  selector: 'app-footer',
  imports: [
    RouterOutlet,
    NgxScrollTopModule,
    TuiAppearance,
    TuiCardLarge,
    TuiHeader,
    TuiTitle,
    TuiAvatar,
    TuiCell,
    TuiCardMedium,
    TuiIcon,
    NgxBackgroundBeamsComponent,
    NgxFastMarqueeModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less'
})
export class FooterComponent {

}
