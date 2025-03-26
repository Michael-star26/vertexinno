import { TuiRoot } from "@taiga-ui/core";
import { Component, OnInit } from '@angular/core';
import { MainComponent } from "./main/main.component";
import { NgxStarrySkyComponent } from '@omnedia/ngx-starry-sky';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  imports: [
    TuiRoot,
    MainComponent,
    NgxStarrySkyComponent,
    NgxSpinnerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit{
  constructor(private spinner:NgxSpinnerService){}
  title = 'vertexinno';ngOnInit(): void {
    this.spinner.show()
    setTimeout(
      ()=>{
        this.spinner.hide()
      },5000
    )
  }
}
