import { Component } from '@angular/core';
import { TuiAppearance, TuiScrollbar, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiAvatarOutline, TuiChip } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium, TuiHeader } from '@taiga-ui/layout';
import { NgxTracingBeamComponent } from '@omnedia/ngx-tracing-beam';
import { NgxShineBorderComponent } from '@omnedia/ngx-shine-border';
import { NgxDotpatternComponent } from '@omnedia/ngx-dotpattern';
import { NgxNeonUnderlineComponent } from '@omnedia/ngx-neon-underline';
import { NgxShinyTextComponent } from '@omnedia/ngx-shiny-text';
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
    TuiScrollbar,
    NgxNeonUnderlineComponent,
    NgxShinyTextComponent,
    NgxShineBorderComponent
  ],
  
  templateUrl: './services.component.html',
  styleUrl: './services.component.less',
  
})
export class ServicesComponent {
  
}
