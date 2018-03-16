import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-design-screen',
  templateUrl: './design-screen.component.html',
  styleUrls: ['./design-screen.component.css']
})
export class DesignScreenComponent {

  constructor(private router: Router, private route: ActivatedRoute,) {

	}

	onDragStart(event, selectedWidget) {
		event.dataTransfer.setData('selectedWidget', selectedWidget);
	}

	onDrop(event, selectedWidget) {
		event.preventDefault();
		let draggedWidget = event.dataTransfer.getData('selectedWidget');
		let widget = this.constructWidgetByName(draggedWidget);
		this.setPositionOfWidget(widget, event.offsetX , event.offsetY);
	}

	allowDrop(event) {
		event.preventDefault();
	}

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

	setPositionOfWidget(widget, leftPos, topPos) {
		document.getElementById("design-div").appendChild(widget);
		let position = "position: absolute; left: "+ leftPos + "px;";
		position = position + "top:" + topPos + "px";
		document.getElementById(widget['id']).setAttribute("style", position);
	}

	showPreview() {
		this.router.navigate(["/preview"]);
	}


}
