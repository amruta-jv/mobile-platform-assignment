import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Mobile platform UI';

	onDragStart(event, data) {
		event.dataTransfer.setData('data', data);
	}
	
	onDrop(event, data) {
		let dataTransfer = event.dataTransfer.getData('data');
		console.log("Dropped", event)
		event.preventDefault();
	}

	allowDrop(event) {
		event.preventDefault();
	}

}


