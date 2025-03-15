import { Component } from '@angular/core';
import { TuiAvatar, TuiAvatarStack } from '@taiga-ui/kit';
import { TuiCardLarge } from '@taiga-ui/layout';

@Component({
  selector: 'app-about',
  imports: [
    TuiAvatarStack,
    TuiAvatar,
    TuiCardLarge
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less'
})
export class AboutComponent {

}
