import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Video } from '../../../types/video';
import { VideosService } from '../../services/videos.service';
import { UsersService } from '../../services/users.service';

@Component({
	selector: 'app-video-thumb',
	templateUrl: './video-thumb.component.html',
	styleUrls: [ './video-thumb.component.css' ],
	providers: []
})
export class VideoThumbComponent implements OnInit {
	@Input() video: Video;
	@Input() index: number;

	constructor(private videos: VideosService, public users: UsersService) {}

	ngOnInit() {}

	selectVideo(index: number) {
		this.videos.selectedVideoIndex = index;
	}
}
