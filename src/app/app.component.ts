import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { MainComponent } from "./main/main.component";

@Component({
  selector: 'app-root',
  imports: [
    TuiRoot,
    MainComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'vertexinno';
}
