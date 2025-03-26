import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiAppearance, TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium, TuiCell, TuiHeader } from '@taiga-ui/layout';
import { NgxScrollTopModule } from 'ngx-scrolltop';
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
    TuiIcon
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less'
})
export class FooterComponent {

}
