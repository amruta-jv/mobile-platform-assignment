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
    for (var i = 0; i < div.childNodes.length; ++i) {
      let currentDiv = document.getElementById(div.childNodes[i]['id']);
      let currentLeft = currentDiv.style.left.replace("px", "");
      let latestLeft = parseFloat(currentLeft) + 27; 
      currentDiv.style.left = latestLeft + "px";
    }
  }

}
