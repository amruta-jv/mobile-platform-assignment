import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/app.service';

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

  /**
    This function displays preview for the design done in design page.
  */
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
    this.generateJason();
  }

  generateJason() {
    let globalVal = this.appService.getAppGlobals();
    console.log(document.getElementById('preview-div').childNodes)
    let previewDiv = document.getElementById('preview-div');
    let jason: any = {"$jason": {
                                        "head": {}, 
                                        "body": {"sections": [ 
                                                          {"items": []}
                                                  ]
                                                }
                                    }
                          };
    for (var i = 0; i < previewDiv.childNodes.length; ++i) {
      let item = this.getItemJasonByWidget(previewDiv.childNodes[i]);
      jason["$jason"].body.sections[0].items.push(item);
      this.appService.updateAppGlobals("jason", jason);
    }
  }


  getItemJasonByWidget(widgetDiv) {
     let item;
     console.log('Preview Component'+widgetDiv.style.length)
    
     //document.getElementById("design-div").childNodes[1].style.length
     switch(widgetDiv.childNodes[0].localName) {
        case 'input': item = {"type": "textfield"};
                      break;
        case 'button': item = {"type": "button"};
                       break;
     }
     let style = {};
     for (var i = 0; i < widgetDiv.style.length; ++i) {
       var styleName = widgetDiv.style[i]
       style[styleName] = widgetDiv.style[styleName].replace("px", "");
     }
     item["style"] = style;

     return item;
  }

}
