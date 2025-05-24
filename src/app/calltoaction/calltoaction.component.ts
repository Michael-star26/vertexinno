import { Component } from '@angular/core';
import { TuiRipple } from '@taiga-ui/addon-mobile';
import { TuiAppearance, TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-calltoaction',
  imports: [
    TuiButton,
    TuiAppearance,
    TuiRipple
  ],
  templateUrl: './calltoaction.component.html',
  styleUrl: './calltoaction.component.less'
})
export class CalltoactionComponent {

}
