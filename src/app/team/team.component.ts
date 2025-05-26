import { Component } from '@angular/core';
import { TuiAppearance, TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiBadge, TuiChip } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium, TuiHeader } from '@taiga-ui/layout';
import {TuiPin} from '@taiga-ui/kit';
@Component({
  selector: 'app-team',
  imports: [
    TuiChip,
    TuiCardMedium,
    TuiAppearance,
    TuiTitle,
    TuiHeader,
    TuiBadge,
    TuiCardLarge,
    TuiPin,
    TuiIcon
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.less'
})
export class TeamComponent {

}
