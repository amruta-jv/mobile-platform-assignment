import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Mobile platform UI';
	leftPostionOfDesignDiv;
	topPostionOfDesignDiv;

	ngOnInit() {
		let desginDivPositions = document.getElementById("design-div").getBoundingClientRect();
		this.leftPostionOfDesignDiv = desginDivPositions.left;
		this.topPostionOfDesignDiv = desginDivPositions.top;
	}
	


	onDragStart(event, selectedWidget) {
		event.dataTransfer.setData('selectedWidget', selectedWidget);
	}

	onDrop(event, selectedWidget) {
		event.preventDefault();
		let draggedWidget = event.dataTransfer.getData('selectedWidget');
		let widget = this.constructWidgetByName(draggedWidget);
		document.getElementById("design-div").appendChild(widget);
	}

	allowDrop(event) {
		event.preventDefault();
	}

	constructWidgetByName(draggedWidget) {
		let widget;
		switch (draggedWidget) {
			case 'input': widget = document.createElement('input');
						  widget['id'] = "input-"
						  widget.setAttribute('class', "widget-in-design");
						  break;
		    case 'button': widget = document.createElement('button');
						  widget['id'] = "button-"
						  widget.setAttribute('class', "widget-in-design btn-primary");
						  widget.innerHTML = 'Submit';
						  break;
		}
		widget['id'] = widget['id'] + (document.getElementById("design-div").childElementCount + 1);
		return widget;
	}



}


