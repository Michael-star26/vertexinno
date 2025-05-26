import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiRepeatTimes } from '@taiga-ui/cdk';
import { TuiAppearance, TuiButton, TuiIcon, TuiLabel, TuiTextfield } from '@taiga-ui/core';
import { TuiAvatar, TuiButtonGroup } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCell, TuiForm } from '@taiga-ui/layout';
import {TuiInputTagModule, TuiTextfieldControllerModule,TuiTextareaModule} from '@taiga-ui/legacy';

@Component({
  selector: 'app-consultation',
  imports: [
    TuiCardLarge,
    TuiIcon,
    TuiButton,
    TuiCell,
    TuiAvatar,
    TuiAppearance,
    TuiRepeatTimes,
    CommonModule,
    FormsModule,
    TuiInputTagModule, 
    TuiTextfieldControllerModule,
    TuiTextfield,
    ReactiveFormsModule,
    TuiLabel,
    TuiTextareaModule,
    TuiForm,
    TuiButtonGroup
  ],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.less'
})
export class ConsultationComponent {
  protected value=['Web Development', 'Android developmwnt', 'Web design','Payment Intergration','Data Analysis & Visualization','Other'];
    protected customSeparator = /[\s,]/; 
}
