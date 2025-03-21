import { Component } from '@angular/core';
import { TuiAppearance, TuiButton, TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiCarousel, TuiChevron, TuiChip } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium, TuiCell, TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-casestudie',
  imports: [
    TuiCarousel,
    TuiCardLarge,
    TuiChip,
    TuiTitle,
    TuiAppearance,
    TuiCell,
    TuiButton,
    TuiIcon,
    TuiChevron,
    TuiCardMedium,
    TuiHeader
  ],
  templateUrl: './casestudie.component.html',
  styleUrl: './casestudie.component.less'
})
export class CasestudieComponent {

}
