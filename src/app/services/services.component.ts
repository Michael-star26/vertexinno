import { Component } from '@angular/core';
import { TuiAppearance, TuiScrollbar, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiAvatarOutline, TuiChip } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium, TuiHeader } from '@taiga-ui/layout';
import { NgxTracingBeamComponent } from '@omnedia/ngx-tracing-beam';
import { NgxShineBorderComponent } from '@omnedia/ngx-shine-border';
import { NgxDotpatternComponent } from '@omnedia/ngx-dotpattern';
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
    NgxTracingBeamComponent,
    NgxShineBorderComponent,
    NgxDotpatternComponent,
    TuiScrollbar
  ],
  
  templateUrl: './services.component.html',
  styleUrl: './services.component.less',
  
})
export class ServicesComponent {
  
}
