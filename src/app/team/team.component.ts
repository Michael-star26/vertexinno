import { Component } from '@angular/core';
import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiBadge, TuiChip } from '@taiga-ui/kit';
import { TuiCardMedium, TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-team',
  imports: [
    TuiChip,
    TuiCardMedium,
    TuiAppearance,
    TuiTitle,
    TuiHeader,
    TuiBadge
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.less'
})
export class TeamComponent {

}
