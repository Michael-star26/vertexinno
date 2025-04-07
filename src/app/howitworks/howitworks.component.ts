import { Component } from '@angular/core';
import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiBadge, TuiChip } from '@taiga-ui/kit';
import { TuiCardMedium, TuiHeader } from '@taiga-ui/layout';
import { NgxFlickeringGridComponent } from '@omnedia/ngx-flickering-grid';

@Component({
  selector: 'app-howitworks',
  imports: [
    TuiChip,
    TuiCardMedium,
    TuiHeader,
    TuiTitle,
    TuiAppearance,
    TuiBadge,
    NgxFlickeringGridComponent,
    TuiAvatar
  ],
  templateUrl: './howitworks.component.html',
  styleUrl: './howitworks.component.less'
})
export class HowitworksComponent {

}
