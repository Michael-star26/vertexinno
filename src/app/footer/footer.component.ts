import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiAppearance } from '@taiga-ui/core';
import { NgxScrollTopModule } from 'ngx-scrolltop';
@Component({
  selector: 'app-footer',
  imports: [
    RouterOutlet,
    NgxScrollTopModule,
    TuiAppearance
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less'
})
export class FooterComponent {

}
