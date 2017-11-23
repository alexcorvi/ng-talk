import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { VideosService } from '../../services/videos.service';

@Component({
	selector: 'app-root',
	templateUrl: './main.component.html',
	styleUrls: [ './main.component.css' ],
	providers: [ UsersService, VideosService ]
})
export class MainComponent {
	title = 'My Awesome Application';
	url: string = '';
	constructor(public users: UsersService, public videos: VideosService) {}
	log(input: string) {
		console.log(input);
	}
}
