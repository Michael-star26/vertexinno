import { NgSwitch, NgSwitchCase } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiAppearance, TuiButton, TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiCarousel, TuiRating, TuiSegmented } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium, TuiCell } from '@taiga-ui/layout';
@Component({
  selector: 'app-testimonials',
  imports: [
    TuiCardLarge,
    TuiCarousel,
    TuiSegmented,
    TuiAvatar,
    NgSwitch,
    NgSwitchCase,
    TuiAppearance,
    TuiTitle,
    TuiCell,
    TuiRating,
    FormsModule,
    TuiIcon,
  ],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.less'
})
export class TestimonialsComponent {
  protected readonly index=signal(0)
  protected readonly segmentedIndex=0

  previous():void{
    this.index.update((index)=>index-1)
  }

  next():void{
    this.index.update((index)=>index+1)
  }
}
