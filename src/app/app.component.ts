import { Component } from '@angular/core';
import { UsersService } from './shared/services/users.service';
import { VideosService } from './shared/services/videos.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
	providers: [ UsersService, VideosService ]
})
export class AppComponent {
	title = 'My Awesome Application';
	url: string = '';
	constructor(public users: UsersService, public videos: VideosService) {}
	log(input: string) {
		console.log(input);
	}
}
