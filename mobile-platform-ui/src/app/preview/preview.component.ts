import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/app.global';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(private appService: AppService) { }


  ngOnInit() {
    this.showPreview();
  }

  showPreview() {
  	let globalVal = this.appService.getAppGlobals();
    var div = document.getElementById('preview-div');
    div.innerHTML = globalVal.design != undefined ? globalVal.design.trim() : "";
  }

}
