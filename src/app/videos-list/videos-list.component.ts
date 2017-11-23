import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Video } from '../shared/interfaces/video';

@Component({
	selector: 'app-videos-list',
	templateUrl: './videos-list.component.html',
	styleUrls: [ './videos-list.component.css' ]
})
export class VideosListComponent implements OnInit {
	@Input() videos: Array<Video> = [];

	constructor() {}

	ngOnInit() {}
}
