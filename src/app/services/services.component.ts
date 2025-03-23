import { Component } from '@angular/core';
import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiAvatarOutline, TuiChip } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium, TuiHeader } from '@taiga-ui/layout';
import { NgxTracingBeamComponent } from '@omnedia/ngx-tracing-beam';

@Component({
  selector: 'app-services',
  imports: [
    TuiCardLarge,
    TuiCardMedium,
    TuiAvatarOutline,
    TuiAvatar,
    TuiAppearance,
    TuiHeader,
    TuiTitle,
    TuiChip,
    NgxTracingBeamComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.less'
})
export class ServicesComponent {
  
}
