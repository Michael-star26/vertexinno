import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { TuiIcon } from '@taiga-ui/core';
import { TuiNavigation } from '@taiga-ui/layout';

@Component({
  selector: 'app-home',
  imports: [
    NavComponent,
    TuiIcon,
    TuiNavigation
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}
