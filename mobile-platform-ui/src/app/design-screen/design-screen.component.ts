import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../shared/app.service';
declare var $: any;

@Component({
  selector: 'app-design-screen',
  templateUrl: './design-screen.component.html',
  styleUrls: ['./design-screen.component.css']
})
export class DesignScreenComponent {

	constructor(private router: Router, private route: ActivatedRoute, private appService: AppService) {

	}

	/**
		This function add clicked widget to design div and also makes it draggable.
		@param {DOMElement} draggedWidget - Selected/dragged widget
	*/
	addWidget(selectedWidget) {
		let widget = this.constructWidgetByName(selectedWidget);
	 	this.setPositionOfWidget(widget, 50 , 50);
	 	$('#'+widget.id).draggable({cancel:false, containment:"#design-div"});
	}

	/**
		This function creates selected widget and bundles it into a div and returns it.
		@param {DOMElement} draggedWidget - Selected/dragged widget
		@return {DOMElement} divWidget - Div element with widget inside it. 
	*/
	constructWidgetByName(draggedWidget) {
		let widget;
		switch (draggedWidget) {
		case 'input': widget = document.createElement('input');
					  widget['id'] = "input-"
					  break;
		case 'button': widget = document.createElement('button');
					  widget['id'] = "button-"
					  widget.setAttribute('class', "btn-primary");
					  widget.innerHTML = 'Submit';
					  break;
		}
		widget['id'] = widget['id'] + (document.getElementById("design-div").childElementCount + 1);
		let divWidget = document.createElement('div');
		divWidget['id'] = "div-" + (document.getElementById("design-div").childElementCount + 1);
		divWidget.appendChild(widget);
		return divWidget;
	}

	/**
		This function creates selected widget and bundles it into a div and returns it.
		@param {DOMElement} widget - Constructed widget
		@param {Number} leftPos - offsetX value from onDrop event
		@param {Number} topPos - offsetY value from onDrop event
	*/
	setPositionOfWidget(widget, leftPos, topPos) {
		document.getElementById("design-div").appendChild(widget);
		let position = "position: absolute; left: "+ leftPos + "px;";
		position = position + "top:" + topPos + "px";
		document.getElementById(widget['id']).setAttribute("style", position);
	}


	/**
		This function saves designed page to gloabl variable and redirects to preview component.
	*/
	showPreview() {
		this.appService.updateAppGlobals("design", document.getElementById('design-div').innerHTML);
		this.router.navigate(["/preview"]);
	}


}
