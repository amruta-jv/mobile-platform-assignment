import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { AppService } from '../../shared/app.service';
declare var $: any;

@Component({
  selector: 'app-design-screen',
  templateUrl: './design-screen.component.html',
  styleUrls: ['./design-screen.component.css']
})
export class DesignScreenComponent implements OnInit {

	isJasonExists: boolean = true;
	jason: any;
	constructor(private router: Router, private route: ActivatedRoute, private appService: AppService) {
	}

	ngOnInit() {
    	let globalVal = this.appService.getAppGlobals();
    	console.log('JASON',globalVal.jason);
    	if (globalVal.jason != undefined) {
    		this.isJasonExists = false;

    	}
  	}



	/**
		'onDragStart' event handler function.
	*/
	onDragStart(event, selectedWidget) {
		console.log("On Drag start");
		event.dataTransfer.setData('selectedWidget', selectedWidget);
	}

	/**
		'onDrop' event handler function.
	*/
	onDrop(event) {
		console.log("On Drop event")
		event.preventDefault();
		let draggedWidget = event.dataTransfer.getData('selectedWidget');
		let widget = this.constructWidgetByName(draggedWidget);
		console.log("Widget ID:"+widget.id);
		this.setPositionOfWidget(widget, event.offsetX , event.offsetY);
		$('#'+widget.id).draggable({cancel:false, containment:"#design-div"});
	}


	/**
		'allowDrop' event handler function.
	*/
	allowDrop(event) {
		event.preventDefault();
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
		let divId = "div-" + (document.getElementById("design-div").childElementCount + 1);
		divWidget['id'] = divId;
		divWidget.appendChild(widget);
		console.log('#'+divId);
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

	loadJasonDesign() {
    	let globalVal = this.appService.getAppGlobals();
    	let jason = globalVal.jason != undefined ? globalVal.jason : "";
    	this.constructDesignDivByJason(jason);
  	}

  	constructDesignDivByJason(jason) {
  		let items = jason["$jason"].body.sections[0].items;
  		let widget;
  		let style;
  		document.getElementById("design-div").innerHTML = "";
  		for (var i = 0; i < items.length; ++i) {
			switch (items[i].type) {
				case 'textfield': widget = document.createElement('input');
							  	  widget['id'] = "input-";
							 	 break;
				case 'button': widget = document.createElement('button');
							  widget['id'] = "button-"
							  widget.setAttribute('class', "btn-primary");
							  widget.innerHTML = 'Submit';
							  break;
			}
			widget['id'] = widget['id'] + (i + 1);
			let divWidget = document.createElement('div');
			let divId = "div-" + (i + 1);
			divWidget['id'] = divId;
			for (var key in  items[i].style) {
				if (key.indexOf("left") > -1 || key.indexOf("top") > -1) {
					if (key.indexOf("left") > -1) {
						divWidget.style[key] = (items[i].style[key] - 27) + "px";
					} else {
						divWidget.style[key] = items[i].style[key] + "px";
					}
				} else {
					divWidget.style[key] = items[i].style[key];
				}
			}
			divWidget.appendChild(widget);
			document.getElementById("design-div").appendChild(divWidget);
  		}
  	}

  	showJason() {
  		let globalVal = this.appService.getAppGlobals();
  		this.jason = globalVal.jason != undefined ?  globalVal.jason : "";
  	}


}
